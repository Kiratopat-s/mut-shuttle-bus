"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MiniBookingCard from "./miniBookingCard";
import { useAllBookings, BookingCardInfo } from "@/hooks/useBookings";
import { useMemo, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CalendarX } from "lucide-react";
import QrPassanger from "./modals/qrPassangerModal";

export function BookingHistoryTab() {
  const { bookings, loading, error, refetch } = useAllBookings(); // Changed from useActiveBookings
  const [selectedBooking, setSelectedBooking] =
    useState<BookingCardInfo | null>(null);
  const [qrModalOpen, setQrModalOpen] = useState(false);

  // Split bookings into upcoming and past based on schedule datetime
  const { upcomingBookings, pastBookings } = useMemo(() => {
    const now = new Date();
    console.log("Current time:", now);
    console.log("Total bookings:", bookings.length);

    const upcoming = bookings
      .filter((booking) => {
        // Use the raw schedule datetime for accurate comparison
        if (booking.scheduleDateTime) {
          const scheduleDate = new Date(booking.scheduleDateTime);
          const isUpcoming = scheduleDate >= now;
          console.log(
            `Booking ${booking.id}: ${booking.scheduleDateTime} -> ${
              isUpcoming ? "UPCOMING" : "PAST"
            }`
          );
          return isUpcoming;
        }
        // Fallback: try parsing the formatted date string
        const bookingDate = new Date(booking.departDate);
        const isUpcoming = bookingDate >= now;
        console.log(
          `Booking ${booking.id} (fallback): ${booking.departDate} -> ${
            isUpcoming ? "UPCOMING" : "PAST"
          }`
        );
        return isUpcoming;
      })
      .sort((a, b) => {
        // Sort upcoming bookings by datetime ascending (soonest first)
        const dateA = new Date(a.scheduleDateTime || a.departDate);
        const dateB = new Date(b.scheduleDateTime || b.departDate);
        return dateA.getTime() - dateB.getTime();
      });

    const past = bookings
      .filter((booking) => {
        // Use the raw schedule datetime for accurate comparison
        if (booking.scheduleDateTime) {
          const scheduleDate = new Date(booking.scheduleDateTime);
          return scheduleDate < now;
        }
        // Fallback: try parsing the formatted date string
        const bookingDate = new Date(booking.departDate);
        return bookingDate < now;
      })
      .sort((a, b) => {
        // Sort past bookings by datetime descending (most recent first)
        const dateA = new Date(a.scheduleDateTime || a.departDate);
        const dateB = new Date(b.scheduleDateTime || b.departDate);
        return dateB.getTime() - dateA.getTime();
      });

    console.log("Upcoming bookings:", upcoming.length);
    console.log("Past bookings:", past.length);

    return { upcomingBookings: upcoming, pastBookings: past };
  }, [bookings]);

  const handleOpenQrPassengerModal = (booking: BookingCardInfo) => {
    setSelectedBooking(booking);
    setQrModalOpen(true);
  };

  const handleCloseQrModal = () => {
    setQrModalOpen(false);
    setSelectedBooking(null);
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <div className="h-[80vh] overflow-y-auto">
              <div className="flex flex-col gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-2">
                    <Skeleton className="h-48 w-full" />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {error}
            <button
              type="button"
              onClick={refetch}
              className="ml-2 underline hover:no-underline"
            >
              Try again
            </button>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <QrPassanger
        isOpen={qrModalOpen}
        onClose={handleCloseQrModal}
        bookingData={selectedBooking}
      />

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">
            Upcoming ({upcomingBookings.length})
          </TabsTrigger>
          <TabsTrigger value="past">Past ({pastBookings.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <div className="h-[80vh] overflow-y-auto">
            {upcomingBookings.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CalendarX className="h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500 font-medium">
                  No upcoming bookings
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Your future trips will appear here
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {upcomingBookings.map((b) => (
                  <MiniBookingCard
                    key={b.id}
                    bookingInfo={b}
                    handleOpenQrPassengerModal={handleOpenQrPassengerModal}
                  />
                ))}
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="h-[80vh] overflow-y-auto">
            {pastBookings.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CalendarX className="h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500 font-medium">No past bookings</p>
                <p className="text-gray-400 text-sm mt-2">
                  Your completed trips will appear here
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {pastBookings.map((b) => (
                  <MiniBookingCard
                    key={b.id}
                    bookingInfo={b}
                    handleOpenQrPassengerModal={handleOpenQrPassengerModal}
                    isPast
                  />
                ))}
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
