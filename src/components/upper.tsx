"use client";

import { LogOut, Search } from "lucide-react";
import { ButtonWithIcon } from "./buttonWithLogo";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useQueryState, parseAsBoolean } from "nuqs";
import SearchModal from "./modals/searchModal";
import Link from "next/link";
import { useRouter } from "next/navigation";

// interface UpperProps {
//   search: () => void;
// }

const User = {
  name: "Kiratipat",
};

export function Upper(
  {
    //   search = () => {
    //     alert("search");
    //   },
  }
) {
  const router = useRouter();
  const [searchModalOpen, setSearchModalOpen] = useQueryState(
    "search",
    parseAsBoolean.withDefault(false)
  );

  const handleOpenQrModal = () => {
    setSearchModalOpen(true);
  };

  const handleCloseQrModal = () => {
    setSearchModalOpen(false);
  };

  return (
    <div className="sticky top-0 w-full bg-white h-auto z-[100] py-4 ">
      <SearchModal isOpen={searchModalOpen} close={handleCloseQrModal} />
      <div className="flex flex-row items-center justify-between w-full ">
        <Link href="/me">
          <div className="flex flex-row gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>Hi {User.name}</p>
          </div>
        </Link>
        <div className="flex gap-2">
          <ButtonWithIcon onclick={handleOpenQrModal} icon={<Search />} />
          <ButtonWithIcon
            className="bg-red-500 text-white hover:bg-red-600"
            icon={<LogOut />}
            onclick={() => {
              router.push("/login");
            }}
          />
        </div>
      </div>
    </div>
  );
}
