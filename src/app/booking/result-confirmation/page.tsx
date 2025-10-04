"use client";
import Loading from "@/components/loading/Loading";
import { Suspense, useEffect, useState } from "react";
import { useQueryState } from "nuqs";
import {
  ChevronLeft,
  Car,
  Check,
  X,
  AlertTriangle,
  Clock,
  MapPin,
  Users,
  Phone,
  Mail,
  ExternalLink,
  Download,
  Share2,
  Copy,
  CheckCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Trip } from "@/components/tripCard";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BookingResult {
  status: "success" | "error";
  mainBookingId?: string;
  errorCode?: string;
  errorMessage?: string;
  errorDetails?: string;
  timestamp: Date;
  trip?: Trip;
  guests?: Array<{
    bookingId: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    isMainBooking?: boolean;
  }>;
}

function ResultConfirmationPageContent() {
  const router = useRouter();
  const [bookingId] = useQueryState("bookingId");
  const [status] = useQueryState("status");
  const [errorCode] = useQueryState("errorCode");
  const [isLoading, setIsLoading] = useState(true);
  const [bookingResult, setBookingResult] = useState<BookingResult | null>(
    null
  );

  useEffect(() => {
    // Fetch booking result from API
    const fetchBookingResult = async () => {
      setIsLoading(true);

      try {
        if (status === "error") {
          // Handle error case - no API call needed
          const errorCodeValue = errorCode || "BOOKING_FAILED";
          setBookingResult({
            status: "error",
            errorCode: errorCodeValue,
            errorMessage: getErrorMessage(errorCodeValue),
            errorDetails: getErrorDetails(errorCodeValue),
            timestamp: new Date(),
          });
        } else if (bookingId) {
          // Fetch booking details from API
          const response = await fetch(
            `/api/booking/get-by-booking-id?bookingId=${bookingId}`,
            {
              credentials: "include",
            }
          );

          if (!response.ok) {
            throw new Error("Failed to fetch booking details");
          }

          const result = await response.json();

          if (!result.success || !result.data) {
            throw new Error(result.error || "Failed to load booking");
          }

          const booking = result.data;

          // Calculate actual start and end times based on route stops
          const route = booking.vehicleRouteSchedule.route;
          const routeStartTime = new Date(
            booking.vehicleRouteSchedule.scheduleTime
          );

          // Find origin and destination stop indices
          const originStopIndex = route.RouteBusStop.findIndex(
            (rbs: { busStopId: number }) =>
              rbs.busStopId === booking.originStopId
          );
          const destinationStopIndex = route.RouteBusStop.findIndex(
            (rbs: { busStopId: number }) =>
              rbs.busStopId === booking.destinationStopId
          );

          // Calculate time to reach origin stop
          let timeToOrigin = 0;
          for (let i = 0; i < originStopIndex; i++) {
            timeToOrigin += route.RouteBusStop[i].travelTime;
          }

          // Calculate travel time from origin to destination
          let travelTime = 0;
          for (let i = originStopIndex; i < destinationStopIndex; i++) {
            travelTime += route.RouteBusStop[i].travelTime;
          }

          // Calculate actual times
          const userStartTime = new Date(
            routeStartTime.getTime() + timeToOrigin * 60000
          );
          const userEndTime = new Date(
            userStartTime.getTime() + travelTime * 60000
          );

          // Format the booking data
          setBookingResult({
            status: "success",
            mainBookingId: bookingId,
            timestamp: new Date(booking.createdAt),
            trip: {
              vehicleRouteScheduleId: booking.vehicleRouteScheduleId.toString(),
              vehicle_license_plate:
                booking.vehicleRouteSchedule.vehicle.licensePlate,
              vehicle_type:
                booking.vehicleRouteSchedule.vehicle.vehicleType
                  .VehicleTypeName,
              vehicle_seat: booking.vehicleRouteSchedule.vehicle.capacity,
              vehicle_route_start_time: userStartTime.toLocaleTimeString(
                "th-TH",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                }
              ),
              vehicle_route_end_time: userEndTime.toLocaleTimeString("th-TH", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              }),
              vehicle_route_duration: `${travelTime} min`,
              available_seat: 0, // Not relevant after booking
              origin: booking.originStop.stopName,
              destination: booking.destinationStop.stopName,
            },
            guests: [
              {
                bookingId: bookingId,
                email: booking.user.email,
                firstName: booking.user.firstName,
                lastName: booking.user.lastName,
                phoneNumber: booking.user.phoneNumber || "Not provided",
                isMainBooking: true,
              },
            ],
          });
        } else {
          // No booking ID and not an error
          throw new Error("Missing booking information");
        }
      } catch (error) {
        console.error("Error fetching booking result:", error);
        setBookingResult({
          status: "error",
          errorCode: "NETWORK_ERROR",
          errorMessage: "Network connection failed",
          errorDetails:
            "Unable to connect to the server. Please check your internet connection and try again.",
          timestamp: new Date(),
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookingResult();
  }, [bookingId, status, errorCode]);

  const getErrorMessage = (code: string): string => {
    switch (code) {
      case "DUPLICATE_BOOKING":
        return "You already have a booking for this trip";
      case "BOOKING_FAILED":
        return "Booking could not be completed";
      case "SEAT_UNAVAILABLE":
        return "Selected seats are no longer available";
      case "PAYMENT_FAILED":
        return "Payment processing failed";
      case "VALIDATION_ERROR":
        return "Invalid booking information provided";
      case "NETWORK_ERROR":
        return "Network connection failed";
      case "SERVER_ERROR":
        return "Server temporarily unavailable";
      default:
        return "An unexpected error occurred";
    }
  };

  const getErrorDetails = (code: string): string => {
    switch (code) {
      case "DUPLICATE_BOOKING":
        return "You already have an active booking for this schedule. Each user can only book once per trip. Please check your bookings or contact support if you believe this is an error.";
      case "BOOKING_FAILED":
        return "The booking system encountered an error while processing your reservation. This may be due to high demand or a temporary system issue.";
      case "SEAT_UNAVAILABLE":
        return "The seats you selected have been booked by another passenger. Please select different seats or choose another trip.";
      case "PAYMENT_FAILED":
        return "Your payment could not be processed. Please check your payment method and ensure you have sufficient funds.";
      case "VALIDATION_ERROR":
        return "Some of the information provided does not meet our requirements. Please review your details and try again.";
      case "NETWORK_ERROR":
        return "There was a problem connecting to our servers. Please check your internet connection and try again.";
      case "SERVER_ERROR":
        return "Our servers are experiencing high load. Please try again in a few minutes.";
      default:
        return "An unexpected error occurred while processing your booking. Please contact support if the problem persists.";
    }
  };

  const handleRetry = () => {
    router.push("/booking/search");
  };

  const handleViewMyBookings = () => {
    router.push("/my-bookings");
  };

  const handleNewBooking = () => {
    router.push("/booking/search");
  };

  const handleDownloadTicket = () => {
    // Implementation for downloading ticket
    console.log(
      "Downloading ticket for booking:",
      bookingResult?.mainBookingId
    );
  };

  const handleShareBooking = () => {
    // Implementation for sharing booking
    if (navigator.share && bookingResult?.mainBookingId) {
      navigator.share({
        title: "Shuttle Bus Booking",
        text: `My booking confirmation: ${bookingResult.mainBookingId}`,
        url: window.location.href,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <div className="text-lg font-medium">Processing your booking...</div>
          <div className="text-sm text-gray-600">
            Please wait while we confirm your reservation
          </div>
        </div>
      </div>
    );
  }

  if (!bookingResult) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center space-y-4">
          <AlertTriangle className="w-16 h-16 text-yellow-600 mx-auto" />
          <div className="text-lg font-medium">
            Unable to load booking result
          </div>
          <Button onClick={() => router.push("/booking/search")}>
            Return to Search
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <ResultHeader />

      <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
        {bookingResult.status === "success" ? (
          <SuccessResult bookingResult={bookingResult} />
        ) : (
          <ErrorResult bookingResult={bookingResult} />
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {bookingResult.status === "success" ? (
            <>
              <Button
                onClick={handleDownloadTicket}
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Ticket
              </Button>
              <Button
                variant="outline"
                onClick={handleShareBooking}
                className="flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share Booking
              </Button>
              <Button variant="outline" onClick={handleNewBooking}>
                New Booking
              </Button>
            </>
          ) : (
            <>
              {bookingResult.errorCode === "DUPLICATE_BOOKING" ? (
                <>
                  <Button
                    onClick={handleViewMyBookings}
                    className="flex items-center gap-2"
                  >
                    View My Bookings
                  </Button>
                  <Button variant="outline" onClick={handleNewBooking}>
                    Different Trip
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={handleRetry}
                    className="flex items-center gap-2"
                  >
                    Try Different Trip
                  </Button>
                  <Button variant="outline" onClick={handleNewBooking}>
                    New Search
                  </Button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}

function ResultHeader() {
  const router = useRouter();
  return (
    <>
      <div className="sticky top-0 left-0 w-screen flex flex-row items-center justify-start bg-white z-[100] border-b border-gray-200 shadow-sm">
        <div className="flex md:hidden w-full p-2 gap-2 items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/booking/search")}
            className="flex-shrink-0 w-8 h-8"
            aria-label="Go to search"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h2>Booking Result</h2>
        </div>
      </div>

      <div className="hidden md:flex w-full p-4 gap-4 items-center max-w-4xl mx-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push("/booking/search")}
          className="flex-shrink-0"
          aria-label="Go to search"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <h2 className="text-xl font-semibold">Booking Result</h2>
      </div>
    </>
  );
}

function SuccessResult({ bookingResult }: { bookingResult: BookingResult }) {
  return (
    <>
      {/* Success Header */}
      <Card className="border-green-200 bg-green-50/30">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-green-100 rounded-full">
              <Check className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-2xl text-green-800">
            Booking Confirmed!
          </CardTitle>
          <CardDescription className="text-green-700">
            Your shuttle bus reservation has been successfully confirmed
          </CardDescription>
          <div className="mt-4 space-y-2">
            <div>
              <div className="text-sm text-gray-600">Booking ID</div>
              <div className="text-xl font-mono font-semibold text-gray-900">
                {bookingResult.mainBookingId}
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Booked on{" "}
              {bookingResult.timestamp.toLocaleDateString("th-TH", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              at{" "}
              {bookingResult.timestamp.toLocaleTimeString("th-TH", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Trip Details */}
      {bookingResult.trip && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Car className="w-5 h-5 text-red-600" />
              Trip Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Route */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
              <div className="flex-1">
                <div className="text-sm text-gray-600 mb-1">Your Journey</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {bookingResult.trip.origin}
                      </div>
                      <div className="text-sm text-gray-600">
                        Departure at{" "}
                        {bookingResult.trip.vehicle_route_start_time}
                      </div>
                    </div>
                  </div>
                  <div className="ml-1 border-l-2 border-gray-300 h-6"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {bookingResult.trip.destination}
                      </div>
                      <div className="text-sm text-gray-600">
                        Arrival at {bookingResult.trip.vehicle_route_end_time}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gray-500" />
              <div>
                <div className="text-sm text-gray-600">Travel Duration</div>
                <div className="font-medium">
                  {bookingResult.trip.vehicle_route_duration}
                </div>
              </div>
            </div>

            {/* Vehicle Info */}
            <div className="border-t pt-4">
              <div className="text-sm text-gray-600 mb-2">
                Vehicle Information
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="border border-red-500 text-red-600 bg-transparent">
                  {bookingResult.trip.vehicle_type}
                </Badge>
                <Badge className="bg-red-500 text-white">
                  {bookingResult.trip.vehicle_license_plate}
                </Badge>
                <Badge className="bg-gray-100 text-gray-700">
                  Capacity: {bookingResult.trip.vehicle_seat} seats
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Passenger Details */}
      {bookingResult.guests && (
        <PassengerInformation guests={bookingResult.guests} />
      )}

      {/* Important Information */}
      <Card className="border-blue-200 bg-blue-50/30">
        <CardHeader>
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Important Information
          </CardTitle>
        </CardHeader>
        <CardContent className="text-blue-700 space-y-3">
          <div className="flex items-start gap-2">
            <div className="font-bold">•</div>
            <div>
              Please arrive at <strong>{bookingResult.trip?.origin}</strong> at
              least <strong>10 minutes before departure</strong> (
              {bookingResult.trip?.vehicle_route_start_time})
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="font-bold">•</div>
            <div>
              Bring a <strong>valid ID</strong> for verification
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="font-bold">•</div>
            <div>
              Keep your{" "}
              <strong>Booking ID: {bookingResult.mainBookingId}</strong> for
              reference
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="font-bold">•</div>
            <div>
              Contact support if you need to make changes or have questions
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="font-bold">•</div>
            <div>
              You can view and manage your booking in the{" "}
              <strong>&quot;My Bookings&quot;</strong> section
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function ErrorResult({ bookingResult }: { bookingResult: BookingResult }) {
  return (
    <>
      {/* Error Header */}
      <Card className="border-red-200 bg-red-50/30">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-red-100 rounded-full">
              <X className="w-8 h-8 text-red-600" />
            </div>
          </div>
          <CardTitle className="text-2xl text-red-800">
            Booking Failed
          </CardTitle>
          <CardDescription className="text-red-700">
            {bookingResult.errorMessage}
          </CardDescription>
          {bookingResult.errorCode && (
            <div className="mt-4">
              <div className="text-sm text-gray-600">Error Code</div>
              <div className="text-lg font-mono font-semibold text-red-700">
                {bookingResult.errorCode}
              </div>
            </div>
          )}
        </CardHeader>
      </Card>

      {/* Error Details */}
      <Card className="border-orange-200 bg-orange-50/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-800">
            <AlertTriangle className="w-5 h-5" />
            What went wrong?
          </CardTitle>
        </CardHeader>
        <CardContent className="text-orange-700">
          <p>{bookingResult.errorDetails}</p>
        </CardContent>
      </Card>

      {/* Troubleshooting Steps */}
      <Card>
        <CardHeader>
          <CardTitle>What can you do next?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {getRecommendations(bookingResult.errorCode || "").map(
            (recommendation, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                  {index + 1}
                </div>
                <div className="text-gray-700">{recommendation}</div>
              </div>
            )
          )}
        </CardContent>
      </Card>

      {/* Support Information */}
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-500" />
            <span className="text-sm">Call Support: </span>
            <Button variant="link" className="p-0 h-auto text-blue-600">
              02-123-4567
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-500" />
            <span className="text-sm">Email: </span>
            <Button variant="link" className="p-0 h-auto text-blue-600">
              support@mutshuttle.com
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-gray-500" />
            <Button variant="link" className="p-0 h-auto text-blue-600">
              Visit Help Center
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function getRecommendations(errorCode: string): string[] {
  switch (errorCode) {
    case "DUPLICATE_BOOKING":
      return [
        "Check your existing bookings in 'My Bookings' section",
        "Cancel your existing booking if you want to rebook",
        "Choose a different departure time",
        "Contact support if you believe you don't have an active booking",
      ];
    case "SEAT_UNAVAILABLE":
      return [
        "Choose a different time or date for your trip",
        "Select alternative seats if available",
        "Try booking during off-peak hours",
        "Consider alternative routes to your destination",
      ];
    case "PAYMENT_FAILED":
      return [
        "Check your payment method details",
        "Ensure you have sufficient funds",
        "Try a different payment method",
        "Contact your bank if the issue persists",
      ];
    case "VALIDATION_ERROR":
      return [
        "Review all passenger information for accuracy",
        "Check email addresses and phone numbers",
        "Ensure names match official documents",
        "Verify all required fields are completed",
      ];
    case "NETWORK_ERROR":
      return [
        "Check your internet connection",
        "Try refreshing the page",
        "Clear your browser cache",
        "Try again in a few minutes",
      ];
    case "SERVER_ERROR":
      return [
        "Wait a few minutes and try again",
        "Try during off-peak hours",
        "Contact support if the problem continues",
        "Check our status page for updates",
      ];
    default:
      return [
        "Try booking again with the same details",
        "Contact our support team for assistance",
        "Check our FAQ for common issues",
        "Verify your internet connection is stable",
      ];
  }
}

function PassengerInformation({
  guests,
}: {
  guests: Array<{
    bookingId: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    isMainBooking?: boolean;
  }>;
}) {
  const [copiedBookingId, setCopiedBookingId] = useState<string | null>(null);

  const handleCopyBookingId = async (bookingId: string) => {
    try {
      await navigator.clipboard.writeText(bookingId);
      setCopiedBookingId(bookingId);
      setTimeout(() => setCopiedBookingId(null), 2000);
    } catch (err) {
      console.error("Failed to copy booking ID:", err);
    }
  };

  // Separate main booking from other passengers
  const mainBooking = guests.find((guest) => guest.isMainBooking);
  const otherPassengers = guests.filter((guest) => !guest.isMainBooking);

  return (
    <div className="space-y-4">
      {/* Main Booking */}
      {mainBooking && (
        <Card className="border-blue-200 bg-blue-50/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              My Booking Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">
                    {mainBooking.firstName} {mainBooking.lastName}
                  </div>
                  <div className="text-sm text-gray-600">Main Passenger</div>
                </div>
                <Badge className="bg-blue-600 text-white">Primary</Badge>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  {mainBooking.email}
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  {mainBooking.phoneNumber}
                </div>
              </div>

              <div className="border-t pt-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">Booking ID</div>
                    <div className="font-mono text-sm font-medium text-gray-900">
                      {mainBooking.bookingId}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopyBookingId(mainBooking.bookingId)}
                    className="flex items-center gap-2"
                  >
                    {copiedBookingId === mainBooking.bookingId ? (
                      <>
                        <CheckCheck className="w-3 h-3" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Copy ID
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Other Passengers */}
      {otherPassengers.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-gray-600" />
              Other Passengers ({otherPassengers.length})
            </CardTitle>
            <CardDescription>
              Individual booking details for other passengers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {otherPassengers.map((guest, index) => (
                <div
                  key={guest.bookingId}
                  className="border rounded-lg p-4 bg-gray-50/50"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-medium text-gray-900">
                        {guest.firstName} {guest.lastName}
                      </div>
                      <div className="text-sm text-gray-600">
                        Passenger {index + 2}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      {guest.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      {guest.phoneNumber}
                    </div>
                  </div>

                  <div className="border-t pt-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-600">Booking ID</div>
                        <div className="font-mono text-sm font-medium text-gray-900">
                          {guest.bookingId}
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopyBookingId(guest.bookingId)}
                        className="flex items-center gap-2"
                      >
                        {copiedBookingId === guest.bookingId ? (
                          <>
                            <CheckCheck className="w-3 h-3" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            Copy ID
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function Page() {
  return (
    <Suspense fallback={<Loading title="Loading booking result..." />}>
      <ResultConfirmationPageContent />
    </Suspense>
  );
}

export default Page;
