import { Skeleton } from "@/components/ui/skeleton";

export function UpperSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between w-full z-[100]">
      <div className="flex flex-row gap-2 items-center">
        {/* Avatar skeleton */}
        <Skeleton className="h-10 w-10 rounded-full" />
        {/* Name text skeleton */}
        <Skeleton className="h-4 w-20" />
      </div>
      {/* Search button skeleton */}
      <Skeleton className="h-10 w-10 rounded-md" />
    </div>
  );
}
