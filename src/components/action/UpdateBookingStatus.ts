"use server";

import { PrismaClient } from "@/generated/prisma";

const prismaClient = new PrismaClient();

export async function UpdateBookingStatus(bookingId: number): Promise<boolean> {
  try {
    await prismaClient.booking.update({
      where: { bookingId: bookingId },
      data: { status: "COMPLETED" },
    });
    return true;
  } catch (error) {
    console.error("Error updating booking status:", error);
    return false;
  }
}
