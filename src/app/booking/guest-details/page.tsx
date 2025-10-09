"use client";
import Loading from "@/components/loading/Loading";
import { Suspense, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import {
  ChevronLeft,
  Car,
  User,
  Check,
  Plus,
  Minus,
  UserCheck,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { z } from "zod";
import {
  bookingApi,
  type BookingCreateRequest,
} from "@/lib/booking-api-client";
import { useUserInformation } from "@/provider/UserProvider";
import { userApi } from "@/lib/user-api-client";

// Zod schema for guest form validation
const GuestFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(
      /^[a-zA-Zก-๙\s]+$/,
      "First name can only contain letters and spaces"
    ),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Zก-๙\s]+$/, "Last name can only contain letters and spaces"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
});

type GuestForm = z.infer<typeof GuestFormSchema>;
type GuestFormErrors = Partial<Record<keyof GuestForm, string>>;
type AllGuestErrors = GuestFormErrors[];

// Trip data from URL parameters
interface TripData {
  vehicleRouteScheduleId: string;
  originStopId: string;
  destinationStopId: string;
  guests: number;
  origin: string;
  destination: string;
  startTime: string;
  endTime: string;
  duration: string;
  vehicleType: string;
  licensePlate: string;
  availableSeats: number;
  capacity: number;
}

function GuestDetailsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useUserInformation();

  // Parse trip data from URL
  const tripData: TripData | null = (() => {
    try {
      const vehicleRouteScheduleId = searchParams.get("vehicleRouteScheduleId");
      const guests = searchParams.get("guests");
      const originStopId = searchParams.get("originStopId");
      const destinationStopId = searchParams.get("destinationStopId");

      if (
        !vehicleRouteScheduleId ||
        !guests ||
        !originStopId ||
        !destinationStopId
      ) {
        return null;
      }

      return {
        vehicleRouteScheduleId,
        originStopId,
        destinationStopId,
        guests: parseInt(guests, 10),
        origin: searchParams.get("origin") || "",
        destination: searchParams.get("destination") || "",
        startTime: searchParams.get("startTime") || "",
        endTime: searchParams.get("endTime") || "",
        duration: searchParams.get("duration") || "",
        vehicleType: searchParams.get("vehicleType") || "",
        licensePlate: searchParams.get("licensePlate") || "",
        availableSeats: parseInt(searchParams.get("availableSeats") || "0", 10),
        capacity: parseInt(searchParams.get("capacity") || "0", 10),
      };
    } catch {
      return null;
    }
  })();

  const [guestForms, setGuestForms] = useState<GuestForm[]>(() =>
    Array.from({ length: tripData?.guests || 1 }, () => ({
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    }))
  );
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<AllGuestErrors>([]);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Real-time validation function for a single field
  const validateField = useCallback(
    (guestData: GuestForm, field: keyof GuestForm): string | null => {
      try {
        const fieldSchema = GuestFormSchema.shape[field];
        fieldSchema.parse(guestData[field]);
        return null;
      } catch (error) {
        if (error instanceof z.ZodError) {
          return error.issues[0]?.message || "Invalid input";
        }
        return "Invalid input";
      }
    },
    []
  );

  const updateGuestForm = useCallback(
    (index: number, field: keyof GuestForm, value: string) => {
      setGuestForms((prev) => {
        const newForms = prev.map((guest, i) =>
          i === index ? { ...guest, [field]: value } : guest
        );

        // Perform real-time validation
        const updatedGuest = newForms[index];
        const fieldError = validateField(updatedGuest, field);

        setValidationErrors((prevErrors) => {
          const newErrors = [...prevErrors];
          if (!newErrors[index]) {
            newErrors[index] = {};
          }

          if (fieldError) {
            newErrors[index][field] = fieldError;
          } else {
            delete newErrors[index][field];
          }

          return newErrors;
        });

        return newForms;
      });
    },
    [validateField]
  );

  const validateAllGuestForms = useCallback(() => {
    const errors: AllGuestErrors = [];
    let hasErrors = false;

    guestForms.forEach((guest, index) => {
      const result = GuestFormSchema.safeParse(guest);
      if (!result.success) {
        const fieldErrors: GuestFormErrors = {};
        result.error.issues.forEach((issue) => {
          const field = issue.path[0] as keyof GuestForm;
          fieldErrors[field] = issue.message;
        });
        errors[index] = fieldErrors;
        hasErrors = true;
      } else {
        errors[index] = {};
      }
    });

    setValidationErrors(errors);
    return !hasErrors;
  }, [guestForms]);

  const validateSingleGuest = useCallback(
    (index: number) => {
      const guest = guestForms[index];
      const result = GuestFormSchema.safeParse(guest);

      if (!result.success) {
        const fieldErrors: GuestFormErrors = {};
        result.error.issues.forEach((issue) => {
          const field = issue.path[0] as keyof GuestForm;
          fieldErrors[field] = issue.message;
        });

        setValidationErrors((prev) => {
          const newErrors = [...prev];
          newErrors[index] = fieldErrors;
          return newErrors;
        });
        return false;
      } else {
        setValidationErrors((prev) => {
          const newErrors = [...prev];
          newErrors[index] = {};
          return newErrors;
        });
        return true;
      }
    },
    [guestForms]
  );

  const isAllFormsValid = useCallback(() => {
    return guestForms.every((guest, index) => {
      const result = GuestFormSchema.safeParse(guest);
      return (
        result.success &&
        (!validationErrors[index] ||
          Object.keys(validationErrors[index]).length === 0)
      );
    });
  }, [guestForms, validationErrors]);

  const fillMyInfo = useCallback(() => {
    if (!user) {
      console.warn("No user information available to fill");
      return;
    }

    // Fill the first guest form with current user's information
    const currentUserData: GuestForm = {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: "", // Note: Phone number not available in User model
    };

    setGuestForms((prev) =>
      prev.map((guest, i) => (i === 0 ? { ...currentUserData } : guest))
    );

    // Validate the filled form
    setValidationErrors((prev) => {
      const newErrors = [...prev];
      newErrors[0] = {};
      return newErrors;
    });
  }, [user]);

  const autoFillFromEmail = useCallback(
    async (email: string, guestIndex: number) => {
      // Validate email format before making API call
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        console.log("Invalid email format, skipping auto-fill");
        return;
      }

      try {
        console.log(`Searching for user with email: ${email}`);

        // Call API to search for user by email
        const result = await userApi.searchUserByEmail(email);

        if (result.user) {
          // User found in system - auto-fill their information
          console.log("User found in system:", result.user);

          setGuestForms((prev) =>
            prev.map((guest, i) =>
              i === guestIndex
                ? {
                    ...guest,
                    email: result.user!.email,
                    firstName: result.user!.firstName,
                    lastName: result.user!.lastName,
                    // Phone number still needs to be entered manually
                    phoneNumber: guest.phoneNumber, // Keep existing value
                  }
                : guest
            )
          );

          // Clear validation errors for auto-filled fields
          setValidationErrors((prev) => {
            const newErrors = [...prev];
            if (newErrors[guestIndex]) {
              delete newErrors[guestIndex].email;
              delete newErrors[guestIndex].firstName;
              delete newErrors[guestIndex].lastName;
            }
            return newErrors;
          });
        } else {
          // User not found - treat as external user
          console.log("User not found in system - treating as external user");
          // Email is already set, user will need to fill rest manually
        }
      } catch (error) {
        console.error("Error searching for user:", error);
        // Don't show error to user - just treat as external user
        // User can continue filling the form manually
      }
    },
    []
  );

  const currentGuestsNum = guestForms.length;
  const maxGuests = Math.min(4, tripData?.availableSeats || 1);

  const addGuest = useCallback(() => {
    if (currentGuestsNum < maxGuests) {
      setGuestForms((prev) => [
        ...prev,
        { email: "", firstName: "", lastName: "", phoneNumber: "" },
      ]);
      setValidationErrors((prev) => [...prev, {}]);
    }
  }, [currentGuestsNum, maxGuests]);

  const removeGuest = useCallback(() => {
    if (currentGuestsNum > 1) {
      setGuestForms((prev) => prev.slice(0, -1));
      setValidationErrors((prev) => prev.slice(0, -1));
    }
  }, [currentGuestsNum]);

  // Redirect if no trip data
  if (!tripData) {
    router.push("/booking/search");
    return null;
  }

  const handleSubmit = async () => {
    if (!validateAllGuestForms()) {
      return;
    }

    setShowConfirmDialog(true);
  };

  const handleConfirmSubmit = async () => {
    if (!tripData) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Create booking via API
      const bookingRequest: BookingCreateRequest = {
        originStopId: parseInt(tripData.originStopId, 10),
        destinationStopId: parseInt(tripData.destinationStopId, 10),
        vehicleRouteScheduleId: parseInt(tripData.vehicleRouteScheduleId, 10),
      };

      const booking = await bookingApi.createBooking(bookingRequest);

      // Navigate to success page with booking details
      router.push(
        `/booking/result-confirmation?status=success&bookingId=${booking.bookingId}`
      );
    } catch (error) {
      console.error("Error creating booking:", error);

      // Determine error code based on error message
      let errorCode = "BOOKING_FAILED";
      let errorMessage = "Failed to create booking";

      if (error instanceof Error) {
        errorMessage = error.message;

        // Map specific error messages to error codes
        if (
          errorMessage.includes("already have an active booking") ||
          errorMessage.includes("duplicate")
        ) {
          errorCode = "DUPLICATE_BOOKING";
        } else if (
          errorMessage.includes("fully booked") ||
          errorMessage.includes("no longer available") ||
          errorMessage.includes("capacity")
        ) {
          errorCode = "SEAT_UNAVAILABLE";
        } else if (
          errorMessage.includes("not found") ||
          errorMessage.includes("invalid")
        ) {
          errorCode = "VALIDATION_ERROR";
        } else if (
          errorMessage.includes("network") ||
          errorMessage.includes("connection")
        ) {
          errorCode = "NETWORK_ERROR";
        } else if (
          errorMessage.includes("server") ||
          errorMessage.includes("500")
        ) {
          errorCode = "SERVER_ERROR";
        }
      }

      // Redirect to error result page with error details
      router.push(
        `/booking/result-confirmation?status=error&errorCode=${errorCode}&errorMessage=${encodeURIComponent(
          errorMessage
        )}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <GuestDetailsHeader />
      <TripInfoHeadBar tripData={tripData} />

      <div className="w-full max-w-6xl mx-auto p-4 bg-white rounded-b-2xl shadow">
        {submitError && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{submitError}</AlertDescription>
          </Alert>
        )}

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">
            Guest Information ({currentGuestsNum}{" "}
            {currentGuestsNum === 1 ? "Guest" : "Guests"})
          </h3>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={removeGuest}
              disabled={currentGuestsNum <= 1}
              className="px-3"
            >
              <Minus className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={addGuest}
              disabled={currentGuestsNum >= maxGuests}
              className="px-3"
            >
              <Plus className="w-4 h-4" />
            </Button>
            <span className="text-sm text-gray-500 ml-2">Max: {maxGuests}</span>
          </div>
        </div>

        <Accordion
          type="multiple"
          className="w-full"
          defaultValue={guestForms.map((_, index) => `guest-${index + 1}`)}
        >
          {guestForms.map((guest, index) => (
            <GuestFormAccordion
              key={index}
              guestNumber={index + 1}
              guestForm={guest}
              errors={validationErrors[index] || {}}
              onUpdate={(field: keyof GuestForm, value: string) =>
                updateGuestForm(index, field, value)
              }
              onEmailChange={(email) => autoFillFromEmail(email, index)}
              onFillMyInfo={index === 0 ? fillMyInfo : undefined}
              onBlur={() => validateSingleGuest(index)}
              hasUserData={!!user}
            />
          ))}
        </Accordion>

        <div className="mt-8 flex justify-end">
          <Button
            onClick={handleSubmit}
            disabled={guestForms.length === 0 || !isAllFormsValid()}
            className="px-8 py-2"
          >
            Continue to Confirmation
          </Button>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              Confirm Booking Details
            </DialogTitle>
            <DialogDescription>
              Please review your booking information before proceeding.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Trip Summary */}
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">Trip Details</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div>
                  {tripData.origin} → {tripData.destination}
                </div>
                <div>
                  {tripData.startTime} — {tripData.endTime} •{" "}
                  {tripData.duration}
                </div>
                <div>
                  {tripData.vehicleType} • {tripData.licensePlate}
                </div>
              </div>
            </div>

            {/* Guests Summary */}
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">Passenger Information</h4>
              <div className="space-y-2">
                {guestForms.map((guest, index) => (
                  <div
                    key={index}
                    className="text-sm border-l-2 border-gray-200 pl-3"
                  >
                    <div className="font-medium">
                      Guest {index + 1}: {guest.firstName} {guest.lastName}
                    </div>
                    <div className="text-gray-600">
                      {guest.email} • {guest.phoneNumber}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Note */}
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Note:</strong> This booking is for{" "}
                <strong>1 seat</strong> only. Guest information is collected for
                record purposes.
              </AlertDescription>
            </Alert>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowConfirmDialog(false)}
              disabled={isSubmitting}
            >
              Review Details
            </Button>
            <Button
              onClick={handleConfirmSubmit}
              disabled={isSubmitting}
              className="px-6"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                "Confirm Booking"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}

function GuestDetailsHeader() {
  const router = useRouter();
  return (
    <>
      <div className="sticky top-0 left-0 w-screen flex flex-row items-center justify-start bg-white z-[100] border-b border-gray-200 shadow-sm">
        <div className="flex md:hidden w-full p-2 gap-2 items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="flex-shrink-0 w-8 h-8"
            aria-label="Go back"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h2>Guest details</h2>
        </div>
      </div>

      <div className="hidden md:flex w-full p-4 gap-4 items-center max-w-6xl mx-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="flex-shrink-0"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <h2>Guest details</h2>
      </div>
    </>
  );
}

function GuestFormAccordion({
  guestNumber,
  guestForm,
  errors,
  onUpdate,
  onEmailChange,
  onFillMyInfo,
  onBlur,
  hasUserData = false,
}: {
  guestNumber: number;
  guestForm: GuestForm;
  errors: GuestFormErrors;
  onUpdate: (field: keyof GuestForm, value: string) => void;
  onEmailChange?: (email: string) => void;
  onFillMyInfo?: () => void;
  onBlur?: () => void;
  hasUserData?: boolean;
}) {
  const [isSearchingUser, setIsSearchingUser] = useState(false);

  const hasErrors = Object.keys(errors).length > 0;
  const isComplete =
    guestForm.email &&
    guestForm.firstName &&
    guestForm.lastName &&
    guestForm.phoneNumber &&
    !hasErrors;

  const handleEmailChange = (email: string) => {
    onUpdate("email", email);
  };

  const handleEmailBlur = async () => {
    // First validate the field
    if (onBlur) {
      onBlur();
    }

    // Then try to auto-fill if email is valid and fields are empty
    if (
      guestForm.email &&
      !errors.email &&
      !guestForm.firstName &&
      !guestForm.lastName &&
      onEmailChange
    ) {
      setIsSearchingUser(true);
      await onEmailChange(guestForm.email);
      setIsSearchingUser(false);
    }
  };

  return (
    <AccordionItem
      value={`guest-${guestNumber}`}
      className={`border rounded-lg mb-2 ${
        hasErrors
          ? "border-red-200 bg-red-50/30"
          : isComplete
          ? "border-green-200 bg-green-50/30"
          : "border-gray-200"
      }`}
    >
      <AccordionTrigger className="px-4 hover:no-underline">
        <div className="flex items-center gap-3">
          <div
            className={`p-2 rounded-full ${
              hasErrors
                ? "bg-red-100"
                : isComplete
                ? "bg-green-100"
                : "bg-gray-100"
            }`}
          >
            {hasErrors ? (
              <AlertCircle className="w-4 h-4 text-red-600" />
            ) : isComplete ? (
              <Check className="w-4 h-4 text-green-600" />
            ) : (
              <User className="w-4 h-4 text-gray-600" />
            )}
          </div>
          <div className="text-left">
            <div className="font-medium">Guest {guestNumber}</div>
            {isComplete && (
              <div className="text-sm text-gray-600">
                {guestForm.firstName} {guestForm.lastName}
              </div>
            )}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-4">
        <div className="space-y-4">
          {/* Email field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor={`email-${guestNumber}`}>Email Address</Label>
              {onFillMyInfo && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={onFillMyInfo}
                  disabled={!hasUserData}
                  className="text-xs px-2 py-1 h-auto"
                  title={
                    hasUserData
                      ? "Fill with your account information"
                      : "Please log in to use this feature"
                  }
                >
                  <UserCheck className="w-3 h-3 mr-1" />
                  Fill my info
                </Button>
              )}
            </div>
            <Input
              id={`email-${guestNumber}`}
              type="email"
              placeholder="Enter email address"
              value={guestForm.email}
              onChange={(e) => handleEmailChange(e.target.value)}
              onBlur={handleEmailBlur}
              disabled={isSearchingUser}
              className={
                errors.email
                  ? "border-red-500 focus-visible:border-red-500"
                  : guestForm.email && !errors.email
                  ? "border-green-500 focus-visible:border-green-500"
                  : ""
              }
            />
            {isSearchingUser && (
              <div className="flex items-center gap-1 text-sm text-blue-600 mt-1">
                <Loader2 className="w-3 h-3 animate-spin" />
                Searching for user...
              </div>
            )}
            {errors.email ? (
              <div className="flex items-center gap-1 text-sm text-red-600 mt-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </div>
            ) : guestForm.email && !errors.email ? (
              <div className="flex items-center gap-1 text-sm text-green-600 mt-1">
                <Check className="w-3 h-3" />
                Valid email address
              </div>
            ) : null}
          </div>

          {/* Other fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`firstName-${guestNumber}`}>First Name</Label>
              <Input
                id={`firstName-${guestNumber}`}
                placeholder="Enter first name"
                value={guestForm.firstName}
                onChange={(e) => onUpdate("firstName", e.target.value)}
                onBlur={onBlur}
                className={
                  errors.firstName
                    ? "border-red-500 focus-visible:border-red-500"
                    : guestForm.firstName && !errors.firstName
                    ? "border-green-500 focus-visible:border-green-500"
                    : ""
                }
              />
              {errors.firstName && (
                <div className="flex items-center gap-1 text-sm text-red-600 mt-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.firstName}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor={`lastName-${guestNumber}`}>Last Name</Label>
              <Input
                id={`lastName-${guestNumber}`}
                placeholder="Enter last name"
                value={guestForm.lastName}
                onChange={(e) => onUpdate("lastName", e.target.value)}
                onBlur={onBlur}
                className={
                  errors.lastName
                    ? "border-red-500 focus-visible:border-red-500"
                    : guestForm.lastName && !errors.lastName
                    ? "border-green-500 focus-visible:border-green-500"
                    : ""
                }
              />
              {errors.lastName && (
                <div className="flex items-center gap-1 text-sm text-red-600 mt-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.lastName}
                </div>
              )}
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor={`phone-${guestNumber}`}>Phone Number</Label>
              <Input
                id={`phone-${guestNumber}`}
                placeholder="0812345678"
                value={guestForm.phoneNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                  onUpdate("phoneNumber", value);
                }}
                onBlur={onBlur}
                className={
                  errors.phoneNumber
                    ? "border-red-500 focus-visible:border-red-500"
                    : guestForm.phoneNumber && !errors.phoneNumber
                    ? "border-green-500 focus-visible:border-green-500"
                    : ""
                }
              />
              {errors.phoneNumber && (
                <div className="flex items-center gap-1 text-sm text-red-600 mt-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.phoneNumber}
                </div>
              )}
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

function TripInfoHeadBar({ tripData }: { tripData: TripData }) {
  return (
    <div className="w-full p-4 gap-4 items-center max-w-6xl mx-auto border-b border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-start md:items-center gap-3">
          <div className="p-2 bg-red-800 rounded-md">
            <Car className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <div className="text-sm text-gray-600">
              {tripData.origin} → {tripData.destination}
            </div>

            <div className="text-lg font-semibold text-gray-900">
              {tripData.startTime} — {tripData.endTime} • {tripData.duration}
            </div>

            <div className="text-sm text-gray-600 mt-1">
              <Badge className="border border-red-500 text-red-600 bg-transparent">
                {tripData.vehicleType}
              </Badge>
              <Badge className="ml-2 bg-red-500 text-white">
                {tripData.licensePlate}
              </Badge>
              <Badge className="ml-2 bg-green-600 text-white">
                {tripData.availableSeats} seats available
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end text-sm text-gray-600">
          <span>Schedule ID</span>
          <span className="text-gray-900 font-medium">
            {tripData.vehicleRouteScheduleId}
          </span>
        </div>
      </div>
    </div>
  );
}

function Page() {
  return (
    <Suspense fallback={<Loading title="Loading..." />}>
      <GuestDetailsPageContent />
    </Suspense>
  );
}

export default Page;
