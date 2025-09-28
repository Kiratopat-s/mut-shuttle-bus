"use client";

import * as React from "react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface ComboboxItem {
  value: string;
  label: string;
}

export interface ComboboxProps {
  items: ComboboxItem[];
  onChange?: (value: string) => void;
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  allowDeselect?: boolean;
  required?: boolean;
  disabled?: boolean;
}

export function Combobox({
  items,
  onChange,
  value: externalValue = "",
  placeholder = "Select item...",
  defaultValue,
  allowDeselect = true,
  required = false,
  disabled = false,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  // Set default value if provided and no external value is set
  React.useEffect(() => {
    if (defaultValue && !externalValue && onChange) {
      onChange(defaultValue);
    }
  }, [defaultValue, externalValue, onChange]);

  const handleSelect = (currentValue: string) => {
    // If allowDeselect is false and the current value is already selected, don't deselect
    const newValue =
      currentValue === externalValue && allowDeselect ? "" : currentValue;
    onChange?.(newValue);
    setOpen(false);
  };

  return (
    <Popover open={open && !disabled} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            "w-full justify-between",
            required && !externalValue && "border-red-300 focus:ring-red-500",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          {externalValue
            ? items.find((item: ComboboxItem) => item.value === externalValue)
                ?.label
            : placeholder}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup>
              {items.map((item: ComboboxItem) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={handleSelect}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      externalValue === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
