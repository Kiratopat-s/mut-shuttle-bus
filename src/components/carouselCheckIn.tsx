import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Car, EllipsisVertical, MonitorCog, QrCode } from "lucide-react";
import { ButtonWithIcon } from "./buttonWithLogo";

export function CarouselCheckIn() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-2">
              <Card className="!p-0">
                <CardContent className="flex items-center justify-center p-4">
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex justify-between w-full items-center">
                      <p>Departs Fri, 26 Sep 2025</p>
                      <EllipsisVertical className=" scale-90 text-gray-500" />
                    </div>
                    <div className="flex flex-row gap-4 items-center w-full justify-between">
                      <div className="flex-col gap-1">
                        <p>มหาวิทยลัยมหานคร</p>
                        <p className="text-xs text-gray-500">08:00</p>
                      </div>
                      <div className="">
                        <Car />
                      </div>
                      <div className="flex-col gap-1">
                        <p>โลตัสหนองจอก</p>
                        <p className="text-xs text-gray-500 text-right">
                          09:00
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between text-xs text-gray-500 w-full">
                      <div className="flex flex-row gap-8">
                        <div className="flex flex-col">
                          <p>Booking no.</p>
                          <p className="text-black">21222423624825102612</p>
                        </div>
                        <div className="flex flex-col">
                          <p>Vehicle no.</p>
                          <p className="text-black">สย 2591 กทม</p>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <QrCode className="text-red-500 scale-125" />
                      </div>
                    </div>
                    <ButtonWithIcon
                      name="Manage booking"
                      icon={<MonitorCog />}
                      classname="bg-red-500 text-white cursor-pointer hover:bg-red-600 hover:text-white"
                    />
                  </div>
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
