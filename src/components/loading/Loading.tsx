import Image from "next/image";
import React from "react";

interface Props {
  title: string;
}

export default function Loading({ title }: Props) {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
      <div className="flex flex-col gap-4 text-center items-center">
        <Image
          src="/mut_banner.png"
          alt="Logo"
          width={200}
          height={100}
          className="animate-bounce drop-shadow-lg mx-auto"
        />
        <p className="flex gap-2 items-center font-semibold text-neutral-500 animate">
          {title}
        </p>
      </div>
    </div>
  );
}
