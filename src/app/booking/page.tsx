"use client";

import React, { Suspense, useMemo } from "react";
import { Combobox, ComboboxItem } from "@/components/comboBox";
import { ChevronLeft } from "lucide-react";
import { DatePicker } from "@/components/datePicker";
import { useQueryState, parseAsString, parseAsIsoDateTime } from "nuqs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useBusStops } from "@/hooks/useBusStops";

function BookingPageContent() {
  const router = useRouter();
  const { busStops } = useBusStops();

  const [selectedDate, setSelectedDate] = useQueryState(
    "date",
    parseAsIsoDateTime.withDefault(new Date())
  );
  const [origin, setOrigin] = useQueryState(
    "originStopId",
    parseAsString.withDefault("")
  );
  const [destination, setDestination] = useQueryState(
    "destinationStopId",
    parseAsString.withDefault("")
  );
  const [guestCount, setGuestCount] = useQueryState(
    "guests",
    parseAsString.withDefault("")
  );

  // Convert bus stops to combobox items
  const bussStop: ComboboxItem[] = useMemo(() => {
    return busStops.map((stop) => ({
      value: stop.busStopId.toString(),
      label: stop.stopName,
    }));
  }, [busStops]);

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date || null);
  };

  const handleSearch = () => {
    if (!isFormValid) {
      alert("Please fill in all required fields");
      return;
    }

    console.log("Searching with params:", {
      date: selectedDate,
      origin,
      destination,
      guests: guestCount,
    });

    const searchParams = new URLSearchParams();
    if (selectedDate) {
      searchParams.set("date", selectedDate.toISOString());
    }
    if (origin) searchParams.set("originStopId", origin);
    if (destination) searchParams.set("destinationStopId", destination);
    if (guestCount) searchParams.set("guests", guestCount);

    router.push(`/booking/search?${searchParams.toString()}`);
  };

  const handleClearForm = () => {
    setSelectedDate(null);
    setOrigin("");
    setDestination("");
    setGuestCount("");
  };

  const isFormValid = selectedDate && origin && destination && guestCount;

  const guestAmount: ComboboxItem[] = [
    { value: "1", label: "1 guest" },
    { value: "2", label: "2 guests" },
    { value: "3", label: "3 guests" },
    { value: "4", label: "4 guests" },
    { value: "5", label: "5 guests" },
    { value: "6", label: "6 guests" },
    { value: "7", label: "7 guests" },
    { value: "8", label: "8 guests" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <div className="flex gap-4 items-center w-full p-4">
        <Link href="/">
          <ChevronLeft />
        </Link>
        <h1 className="text-xl font-bold text-red-500">Book a Shuttle Bus</h1>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-md px-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Pick a date to book <span className="text-red-500">*</span>
          </label>
          <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
            placeholder="Pick a date to book"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            From <span className="text-red-500">*</span>
          </label>
          <Combobox
            placeholder="Origin bus stop"
            items={bussStop}
            value={origin}
            onChange={setOrigin}
            required={true}
            allowDeselect={false}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            To <span className="text-red-500">*</span>
          </label>
          <Combobox
            placeholder="Destination bus stop"
            items={bussStop}
            value={destination}
            onChange={setDestination}
            required={true}
            allowDeselect={false}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            How many people <span className="text-red-500">*</span>
          </label>
          <Combobox
            placeholder="Select number of guests"
            items={guestAmount}
            value={guestCount}
            onChange={setGuestCount}
            defaultValue="1"
            required={true}
            allowDeselect={false}
          />
        </div>

        <div className="flex gap-2 mt-8">
          <button
            type="button"
            className="flex-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSearch}
            disabled={!isFormValid}
          >
            Search for trip
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={handleClearForm}
          >
            Clear
          </button>
        </div>
        {/* Summary Section */}
        {isFormValid && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-800 mb-3">
              Booking Summary
            </h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Date:</span>
                <span className="font-medium">
                  {selectedDate?.toLocaleDateString("th-TH", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span>From:</span>
                <span className="font-medium">
                  {bussStop.find((stop) => stop.value === origin)?.label}
                </span>
              </div>
              <div className="flex justify-between">
                <span>To:</span>
                <span className="font-medium">
                  {bussStop.find((stop) => stop.value === destination)?.label}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Passengers:</span>
                <span className="font-medium">
                  {
                    guestAmount.find((guest) => guest.value === guestCount)
                      ?.label
                  }
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function BookingPageLoading() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <div className="flex gap-4 items-center w-full p-4">
        <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded animate-pulse w-48"></div>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-md px-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
        <div className="flex gap-2 mt-8">
          <div className="flex-1 h-10 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-20 h-10 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </main>
  );
}

function Page() {
  return (
    <Suspense fallback={<BookingPageLoading />}>
      <BookingPageContent />
    </Suspense>
  );
}

export default Page;
