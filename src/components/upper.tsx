"use client";

import { Search } from "lucide-react";
import { ButtonWithIcon } from "./buttonWithLogo";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useQueryState, parseAsBoolean } from "nuqs";
import SearchModal from "./modal/searchModal";

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
    <>
      <SearchModal isOpen={searchModalOpen} close={handleCloseQrModal} />
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row gap-2 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Hi {User.name}</p>
        </div>
        <ButtonWithIcon onclick={handleOpenQrModal} icon={<Search />} />
      </div>
    </>
  );
}
