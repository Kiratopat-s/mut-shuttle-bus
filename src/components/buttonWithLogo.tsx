import { Button } from "@/components/ui/button";
import React, { JSX } from "react";

interface ButtonWithIconProps {
  classname?: string;
  name?: string;
  onclick?(): void;
  icon?: React.ReactNode;
}

export function ButtonWithIcon({
  classname,
  name,
  onclick,
  icon,
}: ButtonWithIconProps): JSX.Element {
  return (
    <Button className={classname} onClick={onclick} variant="outline" size="sm">
      {icon} {name}
    </Button>
  );
}
