"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MiniBookingCard from "./miniBookingCard";

export function BookingHistoryTab() {
  const MockBookings = [
    {
      id: 1,
      origin: "มหาวิทยลัยมหานคร",
      destination: "โลตัสหนองจอก",
      departTime: "08:00",
      arriveTime: "09:00",
      departDate: "Fri, 26 Sep 2025",
      bookingNo: "21222423624825102612",
      vehicleNo: "สย 2591 กทม",
    },
    {
      id: 2,
      origin: "โลตัสหนองจอก",
      destination: "Big C หนองจอก",
      departTime: "11:00",
      arriveTime: "12:00",
      departDate: "Fri, 26 Sep 2025",
      bookingNo: "31222423624825102612",
      vehicleNo: "บก 1130 กทม",
    },
    {
      id: 3,
      origin: "Big C หนองจอก",
      destination: "มหาวิทยลัยมหานคร",
      departTime: "14:00",
      arriveTime: "15:30",
      departDate: "Fri, 26 Sep 2025",
      bookingNo: "41222423624825102612",
      vehicleNo: "สย 2599 กทม",
    },
  ];

  const handleOpenQrPassengerModal = () => {
    console.log("go to details?");
  };
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
              {MockBookings.map((b) => (
                <MiniBookingCard
                  key={b.id}
                  bookingInfo={b}
                  handleOpenQrPassengerModal={handleOpenQrPassengerModal}
                />
              ))}
              {MockBookings.map((b) => (
                <MiniBookingCard
                  key={b.id}
                  bookingInfo={b}
                  handleOpenQrPassengerModal={handleOpenQrPassengerModal}
                />
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="past">
          <div className="h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-4">
              {MockBookings.reverse().map((b) => (
                <MiniBookingCard
                  key={b.id}
                  bookingInfo={b}
                  handleOpenQrPassengerModal={handleOpenQrPassengerModal}
                />
              ))}
              {MockBookings.map((b) => (
                <MiniBookingCard
                  key={b.id}
                  bookingInfo={b}
                  handleOpenQrPassengerModal={handleOpenQrPassengerModal}
                />
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
