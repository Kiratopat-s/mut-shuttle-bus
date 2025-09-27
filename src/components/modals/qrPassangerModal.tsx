import { QRCodeSVG } from "qrcode.react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import OriginToDestination from "../originToDestination";

interface QrPassangerProps {
  isOpen?: boolean;
  onClose?: () => void;
}

function QrPassanger({ isOpen = true, onClose }: QrPassangerProps) {
  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } w-screen h-screen bg-red-900 items-center justify-center p-4 absolute top-0 left-0 z-[1000]`}
    >
      <Card className="w-full max-w-sm">
        <CardHeader className="relative">
          <CardTitle>MUT shuttle bus</CardTitle>
          <CardDescription>
            better way to travel around the city
          </CardDescription>
          <div className="flex flex-col text-right absolute right-4 gap-1.5">
            <CardTitle>Bus stop</CardTitle>
            <CardDescription>A2</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <OriginToDestination />
          <div className="flex flex-col mt-4 gap-1">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p>Passanger</p>
                <p className="text-gray-500 text-sm">
                  Kiratipat Sawangsisombat
                </p>
              </div>
              <div className="flex flex-col">
                <p>Route</p>
                <p className="text-gray-500 text-sm">K</p>
              </div>
              <div className="flex flex-col">
                <p>Trip</p>
                <p className="text-gray-500 text-sm">1</p>
              </div>
            </div>
          </div>
          <div className="">
            <QRCodeSVG
              value="https://reactjs.org/"
              className="w-full aspect-square mt-4"
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            variant="default"
            className="w-full bg-red-700 text-white cursor-pointer"
            onClick={onClose}
          >
            Close
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default QrPassanger;
