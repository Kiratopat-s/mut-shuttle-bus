"use client";

import React from "react";
import { Combobox, ComboboxItem } from "@/components/comboBox";
import { ChevronLeft } from "lucide-react";
import { DatePicker } from "@/components/datePicker";
import { useQueryState, parseAsString, parseAsIsoDateTime } from "nuqs";
import Link from "next/link";

function Page() {
  // State management using nuqs
  const [selectedDate, setSelectedDate] = useQueryState(
    "date",
    parseAsIsoDateTime.withDefault(new Date())
  );
  const [origin, setOrigin] = useQueryState(
    "origin",
    parseAsString.withDefault("")
  );
  const [destination, setDestination] = useQueryState(
    "destination",
    parseAsString.withDefault("")
  );
  const [guestCount, setGuestCount] = useQueryState(
    "guests",
    parseAsString.withDefault("")
  );
  const [vehicleTypeSelected, setVehicleTypeSelected] = useQueryState(
    "vehicle",
    parseAsString.withDefault("")
  );

  // Local state for UI interactions
  const [showAdvancedOptions, setShowAdvancedOptions] = React.useState(true);

  // Wrapper functions to handle type conversions
  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date || null);
  };

  const handleSearch = () => {
    // Validate required fields
    if (!isFormValid) {
      alert("Please fill in all required fields");
      return;
    }

    // Here you would typically make an API call or navigate to search results
    console.log("Searching with params:", {
      date: selectedDate,
      origin,
      destination,
      guests: guestCount,
      vehicle: vehicleTypeSelected || "all",
    });

    // Example: You could navigate to a results page with these query parameters
    // router.push('/search-results');
  };

  const handleClearForm = () => {
    setSelectedDate(null);
    setOrigin("");
    setDestination("");
    setGuestCount("");
    setVehicleTypeSelected("");
  };

  // Check if form is valid
  const isFormValid = selectedDate && origin && destination && guestCount;

  const bussStop: ComboboxItem[] = [
    { value: "1", label: "มหาวิทยาลัยเทคโนโลยีมหานคร" },
    { value: "2", label: "โลตัสหนองจอก" },
    { value: "3", label: "โรงพยาบาลหนองจอก" },
    { value: "4", label: "Big C หนองจอก" },
    { value: "5", label: "สวนสาธารณหนองจอก" },
    { value: "6", label: "ร้านส้มตำป้านาง" },
  ];

  const guestAmount: ComboboxItem[] = [
    { value: "1", label: "1 guest" },
    { value: "2", label: "2 guests" },
    { value: "3", label: "3 guests" },
    { value: "4", label: "4 guests" },
  ];

  const vehicleType: ComboboxItem[] = [
    { value: "1", label: "All type" },
    { value: "2", label: "Minibus" },
    { value: "3", label: "Bus" },
    { value: "4", label: "Van" },
    { value: "5", label: "Minivan" },
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
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Vehicle type
            </label>
            <button
              type="button"
              onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
              className="text-xs text-blue-600 hover:text-blue-800"
            >
              {showAdvancedOptions ? "Hide" : "Show"} advanced options
            </button>
          </div>
          <Combobox
            placeholder="Select vehicle type (optional)"
            items={vehicleType}
            value={vehicleTypeSelected}
            onChange={setVehicleTypeSelected}
            defaultValue="1"
            allowDeselect={true}
            disabled={!showAdvancedOptions}
          />
        </div>

        <div className="flex gap-2 mt-8">
          <button
            type="button"
            className="flex-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSearch}
            disabled={!isFormValid}
          >
            Search for my bus
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
                  {selectedDate?.toLocaleDateString("en-US", {
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
              {vehicleTypeSelected && (
                <div className="flex justify-between">
                  <span>Vehicle type:</span>
                  <span className="font-medium">
                    {
                      vehicleType.find(
                        (vehicle) => vehicle.value === vehicleTypeSelected
                      )?.label
                    }
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Page;
