import React from "react";
import { ButtonWithIcon } from "../buttonWithLogo";
import { ChevronLeft } from "lucide-react";
import { Input } from "../ui/input";
import Link from "next/link";

interface SearchModalProps {
  isOpen?: boolean;
  close?(): void;
}

function SearchModal({ isOpen, close }: SearchModalProps) {
  return (
    isOpen && (
      <div className="w-screen h-screen bg-white items-center justify-center p-4 absolute top-0 left-0 z-[100]">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between gap-4 border-b border-gray-300 pb-4">
            <div
              onClick={close}
              className="flex flex-col justify-center items-center"
            >
              <ChevronLeft />
            </div>
            <Input className="" placeholder="Search a destination" />
          </div>
        </div>
      </div>
    )
  );
}

export default SearchModal;
