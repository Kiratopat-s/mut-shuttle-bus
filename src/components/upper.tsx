"use client";

import { User, Search } from "lucide-react";
import { ButtonWithIcon } from "./buttonWithLogo";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Upper() {
  return (
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
  );
}
