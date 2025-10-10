"use server";

import { prisma } from "@/lib/prisma";

export async function UpdateBookingStatus(bookingId: number): Promise<boolean> {
  try {
    await prisma.booking.update({
      where: { bookingId: bookingId },
      data: { status: "COMPLETED" },
    });
    return true;
  } catch (error) {
    console.error("Error updating booking status:", error);
    return false;
  }
}
