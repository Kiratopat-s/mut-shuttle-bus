import { Skeleton } from "@/components/ui/skeleton";

interface PageSkeletonProps {
  variant?: "home" | "booking" | "routes" | "me" | "admin" | "default";
}

export function PageSkeleton({ variant = "default" }: PageSkeletonProps) {
  switch (variant) {
    case "home":
      return <HomeVariant />;
    case "booking":
      return <BookingVariant />;
    case "routes":
      return <RoutesVariant />;
    case "me":
      return <ProfileVariant />;
    case "admin":
      return <AdminVariant />;
    default:
      return <DefaultVariant />;
  }
}

function HomeVariant() {
  return (
    <div className="flex flex-col h-[80vh] gap-12">
      {/* Carousel skeleton */}
      <div className="p-2 bg-red-900 rounded-xl w-full max-w-lg">
        <div className="space-y-3 p-4">
          <div className="bg-white rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-20" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="flex justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-8 w-full rounded-md" />
          </div>
          <div className="flex justify-center space-x-2 pt-2">
            <Skeleton className="h-2 w-2 rounded-full" />
            <Skeleton className="h-2 w-2 rounded-full" />
            <Skeleton className="h-2 w-2 rounded-full" />
          </div>
        </div>
      </div>

      {/* Main menu skeleton */}
      <div className="space-y-4 w-full max-w-lg">
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="p-4 border rounded-lg space-y-3">
              <Skeleton className="h-8 w-8 mx-auto" />
              <Skeleton className="h-4 w-20 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BookingVariant() {
  return (
    <div className="space-y-6 w-full max-w-lg">
      <Skeleton className="h-8 w-48 mx-auto" />
      <div className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-12 w-full rounded-md" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-12 w-full rounded-md" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-12 w-full rounded-md" />
        </div>
      </div>
      <Skeleton className="h-12 w-full rounded-md" />
    </div>
  );
}

function RoutesVariant() {
  return (
    <div className="space-y-4 w-full max-w-lg">
      <Skeleton className="h-8 w-32 mx-auto" />
      <div className="space-y-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="p-4 border rounded-lg space-y-3">
            <div className="flex justify-between">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-24" />
            </div>
            <Skeleton className="h-4 w-full" />
            <div className="flex justify-between">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileVariant() {
  return (
    <div className="space-y-6 w-full max-w-lg">
      <div className="flex flex-col items-center space-y-4">
        <Skeleton className="h-24 w-24 rounded-full" />
        <div className="text-center space-y-2">
          <Skeleton className="h-6 w-32 mx-auto" />
          <Skeleton className="h-4 w-48 mx-auto" />
        </div>
      </div>
      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center space-x-3 p-3 border rounded-lg"
          >
            <Skeleton className="h-6 w-6" />
            <Skeleton className="h-5 w-32" />
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminVariant() {
  return (
    <div className="space-y-6 w-full max-w-lg">
      <Skeleton className="h-8 w-40 mx-auto" />
      <div className="grid grid-cols-1 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="p-4 border rounded-lg space-y-3">
            <div className="flex justify-between items-center">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-6" />
            </div>
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

function DefaultVariant() {
  return (
    <div className="flex flex-col space-y-4 p-4 w-full max-w-lg">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[160px]" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}
