import { Button } from "@/components/ui/button";
import React, { JSX } from "react";

interface ButtonWithIconProps {
  className?: string;
  name?: string;
  onclick?(): void;
  icon?: React.ReactNode;
}

export function ButtonWithIcon({
  className,
  name,
  onclick,
  icon,
}: ButtonWithIconProps): JSX.Element {
  return (
    <Button className={className} onClick={onclick} variant="outline" size="sm">
      {icon} {name}
    </Button>
  );
}
