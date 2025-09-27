import { BookingHistoryTab } from "@/components/bookingHistoryTab";
import React from "react";

function Page() {
  return (
    <main className="flex flex-col h-[80vh] justify-start items-center w-full">
      <div className="flex items-start justify-start w-full mb-4">
        <h4 className="text-xl text-left">Your Bookings</h4>
      </div>
      <BookingHistoryTab />
      <div className="flex w-full"></div>
    </main>
  );
}

export default Page;
