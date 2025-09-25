import { ButtonWithIcon } from "@/components/buttonWithLogo";
import { SignpostBig } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 gap-4">
      <h1 className="text-4xl font-bold">Welcome to Shuttle Buss!</h1>
      <p className="text-lg text-gray-600">
        This is a simple shuttle bus booking application for Mahanakorn
        Technology University.
      </p>
      <div className="self-start">
        <Link href="/booking">
          <ButtonWithIcon icon={<SignpostBig />} name="Booking" />
        </Link>
      </div>
    </div>
  );
}
