import { Skeleton } from "@/components/ui/skeleton";

export function HomePageSkeleton() {
  return (
    <div className="flex flex-col h-[80vh] gap-12">
      {/* Carousel skeleton - matches CarouselCheckIn */}
      <div className="p-2 bg-red-900 rounded-xl w-full max-w-lg">
        <div className="space-y-3 p-4">
          {/* Mini booking card skeleton */}
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
          {/* Carousel indicators */}
          <div className="flex justify-center space-x-2 pt-2">
            <Skeleton className="h-2 w-2 rounded-full" />
            <Skeleton className="h-2 w-2 rounded-full" />
            <Skeleton className="h-2 w-2 rounded-full" />
          </div>
        </div>
      </div>

      {/* Main menu skeleton - matches HomeMainMenu */}
      <div className="space-y-4 w-full max-w-lg">
        <div className="grid grid-cols-2 gap-4">
          {/* Menu item skeletons */}
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
