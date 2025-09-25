import { ButtonWithIcon } from "@/components/buttonWithLogo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bus, Search, TicketCheck, Waypoints } from "lucide-react";
import { CarouselCheckIn } from "@/components/carouselCheckIn";
import Link from "next/link";

const User = { name: "Kiratipat" };

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 gap-4">
      {/* upper */}
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Hi {User.name}</p>
        </div>
        <ButtonWithIcon icon={<Search />} />
      </div>
      {/* end upper */}

      {/* body */}
      <div className="flex flex-col h-full justify-start gap-4">
        <div className="p-2 bg-red-900 rounded-xl w-full max-w-lg">
          <CarouselCheckIn />
        </div>
      </div>
      {/* end body */}

      {/* footer */}
      <div className="flex flex-row py-2 justify-around w-full border-t border-gray-300">
        <div className="flex flex-col justify-center items-center">
          <Bus />
          <p>Check-in</p>
        </div>
        <div className="relative flex flex-col justify-center items-center">
          <div className="absolute flex rounded-full bg-red-500 p-3 -top-6">
            <Waypoints className=" scale-110 text-white" />
          </div>
          <Waypoints className=" opacity-0" />
          <p className="text-gray-500">Routes</p>
        </div>
        <div className="flex flex-col justify-center items-center text-gray-500">
          <TicketCheck />
          <p>Purchase</p>
        </div>
      </div>
      {/* end footer */}
    </div>
  );
}
