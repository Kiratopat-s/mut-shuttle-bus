import { NextRequest, NextResponse } from "next/server";
import { BookingStatus } from "@/generated/prisma";
import {
  createApiResponse,
  requireAuth,
  userHasPermission,
  handleApiError,
} from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";

export interface UpdateBookingRequest {
  bookingId: number;
  status?: BookingStatus;
  originStopId?: number;
  destinationStopId?: number;
  vehicleRouteScheduleId?: number;
}

/**
 * PATCH /api/booking/edit-by-booking-id
 * Update an existing booking (user must own the booking or have manage_bookings permission)
 */
export async function PATCH(req: NextRequest) {
  try {
    // Check authentication
    const authResult = await requireAuth();
    if (authResult instanceof NextResponse) {
      return authResult;
    }
    const user = authResult;

    // Parse request body
    const body: UpdateBookingRequest = await req.json();

    if (!body.bookingId) {
      return createApiResponse(
        false,
        400,
        undefined,
        undefined,
        "Booking ID is required"
      );
    }

    // Fetch existing booking
    const existingBooking = await prisma.booking.findUnique({
      where: { bookingId: body.bookingId },
      include: {
        vehicleRouteSchedule: true,
      },
    });

    if (!existingBooking) {
      return createApiResponse(
        false,
        404,
        undefined,
        undefined,
        "Booking not found"
      );
    }

    // Check if user has permission to edit this booking
    const canManageAll = await userHasPermission(user.userId, "manage_bookings");

    if (
      existingBooking.userId !== user.userId &&
      !canManageAll
    ) {
      return createApiResponse(
        false,
        403,
        undefined,
        undefined,
        "Forbidden. You can only edit your own bookings."
      );
    }

    // Don't allow editing of completed, cancelled, or missed bookings
    if (
      existingBooking.status === BookingStatus.COMPLETED ||
      existingBooking.status === BookingStatus.MISSED
    ) {
      return createApiResponse(
        false,
        400,
        undefined,
        undefined,
        `Cannot edit a ${existingBooking.status.toLowerCase()} booking`
      );
    }

    // Build update data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateData: any = {};

    if (body.status !== undefined) {
      // Validate status transitions
      if (
        existingBooking.status === BookingStatus.BOOKED &&
        body.status === BookingStatus.CANCELLED
      ) {
        updateData.status = body.status;
      } else if (canManageAll) {
        // Users with manage_bookings permission can change to any status
        updateData.status = body.status;
      } else {
        return createApiResponse(
          false,
          400,
          undefined,
          undefined,
          "Invalid status transition"
        );
      }
    }

    if (body.originStopId !== undefined) {
      // Verify bus stop exists
      const originStop = await prisma.busStop.findUnique({
        where: { busStopId: body.originStopId },
      });
      if (!originStop) {
        return createApiResponse(
          false,
          404,
          undefined,
          undefined,
          "Origin stop not found"
        );
      }
      updateData.originStopId = body.originStopId;
    }

    if (body.destinationStopId !== undefined) {
      // Verify bus stop exists
      const destinationStop = await prisma.busStop.findUnique({
        where: { busStopId: body.destinationStopId },
      });
      if (!destinationStop) {
        return createApiResponse(
          false,
          404,
          undefined,
          undefined,
          "Destination stop not found"
        );
      }
      updateData.destinationStopId = body.destinationStopId;
    }

    // Validate that origin and destination are different
    const finalOriginId = body.originStopId ?? existingBooking.originStopId;
    const finalDestinationId =
      body.destinationStopId ?? existingBooking.destinationStopId;

    if (finalOriginId === finalDestinationId) {
      return createApiResponse(
        false,
        400,
        undefined,
        undefined,
        "Origin and destination stops must be different"
      );
    }

    if (body.vehicleRouteScheduleId !== undefined) {
      // Verify schedule exists
      const schedule = await prisma.vehicleRouteSchedule.findUnique({
        where: { vehicleRouteScheduleId: body.vehicleRouteScheduleId },
        include: {
          vehicle: true,
        },
      });

      if (!schedule) {
        return createApiResponse(
          false,
          404,
          undefined,
          undefined,
          "Vehicle route schedule not found"
        );
      }

      if (schedule.status !== "UPCOMING") {
        return createApiResponse(
          false,
          400,
          undefined,
          undefined,
          "Cannot book this schedule. It is not upcoming."
        );
      }

      // Check capacity
      const bookingCount = await prisma.booking.count({
        where: {
          vehicleRouteScheduleId: body.vehicleRouteScheduleId,
          status: BookingStatus.BOOKED,
          bookingId: { not: body.bookingId }, // Exclude current booking
        },
      });

      if (bookingCount >= schedule.vehicle.capacity) {
        return createApiResponse(
          false,
          409,
          undefined,
          undefined,
          "This schedule is fully booked"
        );
      }

      updateData.vehicleRouteScheduleId = body.vehicleRouteScheduleId;
    }

    // Update the booking
    const updatedBooking = await prisma.booking.update({
      where: { bookingId: body.bookingId },
      data: updateData,
      include: {
        originStop: true,
        destinationStop: true,
        user: {
          select: {
            userId: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        vehicleRouteSchedule: {
          include: {
            route: true,
            vehicle: {
              include: {
                vehicleType: true,
              },
            },
            driver: {
              select: {
                userId: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });

    return createApiResponse(
      true,
      200,
      updatedBooking,
      "Booking updated successfully"
    );
  } catch (error) {
    return handleApiError(error);
  }
}

/**
 * DELETE /api/booking/edit-by-booking-id?bookingId=<id>
 * Cancel a booking (user must own the booking or have manage_bookings/cancel_booking permission)
 */
export async function DELETE(req: NextRequest) {
  try {
    // Check authentication
    const authResult = await requireAuth();
    if (authResult instanceof NextResponse) {
      return authResult;
    }
    const user = authResult;

    // Get query parameters
    const { searchParams } = new URL(req.url);
    const bookingIdParam = searchParams.get("bookingId");

    if (!bookingIdParam) {
      return createApiResponse(
        false,
        400,
        undefined,
        undefined,
        "Booking ID is required"
      );
    }

    const bookingId = parseInt(bookingIdParam);

    // Fetch existing booking
    const existingBooking = await prisma.booking.findUnique({
      where: { bookingId },
    });

    if (!existingBooking) {
      return createApiResponse(
        false,
        404,
        undefined,
        undefined,
        "Booking not found"
      );
    }

    // Check if user has permission to delete this booking
    const canManageAll = await userHasPermission(user.userId, "manage_bookings");
    const canCancel = await userHasPermission(user.userId, "cancel_booking");

    if (
      existingBooking.userId !== user.userId &&
      !canManageAll &&
      !canCancel
    ) {
      return createApiResponse(
        false,
        403,
        undefined,
        undefined,
        "Forbidden. You can only cancel your own bookings."
      );
    }

    // Check if booking can be cancelled
    if (existingBooking.status !== BookingStatus.BOOKED) {
      return createApiResponse(
        false,
        400,
        undefined,
        undefined,
        `Cannot cancel a ${existingBooking.status.toLowerCase()} booking`
      );
    }

    // Update booking status to CANCELLED
    const cancelledBooking = await prisma.booking.update({
      where: { bookingId },
      data: { status: BookingStatus.CANCELLED },
      include: {
        originStop: true,
        destinationStop: true,
        user: {
          select: {
            userId: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        vehicleRouteSchedule: {
          include: {
            route: true,
            vehicle: {
              include: {
                vehicleType: true,
              },
            },
            driver: {
              select: {
                userId: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });

    return createApiResponse(
      true,
      200,
      cancelledBooking,
      "Booking cancelled successfully"
    );
  } catch (error) {
    return handleApiError(error);
  }
}
