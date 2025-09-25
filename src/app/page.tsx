import { ButtonWithIcon } from "@/components/buttonWithLogo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bus, Search, TicketCheck, Waypoints } from "lucide-react";
import { CarouselCheckIn } from "@/components/carouselCheckIn";
import Link from "next/link";

const User = { name: "Kiratipat" };

export default function Home() {
  return (
    <>
      {/* body */}
      <div className="flex flex-col h-full justify-start gap-4">
        <div className="p-2 bg-red-900 rounded-xl w-full max-w-lg">
          <CarouselCheckIn />
        </div>
      </div>
      {/* end body */}
    </>
  );
}
