"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandList,
  CommandInput,
  CommandGroup,
  CommandItem,
} from "cmdk";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { User } from "@/constants/data";
import { useOrganization } from "@clerk/nextjs";

export function InputContactsList() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { organization } = useOrganization();

  const userData: User[] | undefined = useQuery(api.contacts.get, {
    orgId: `${organization?.id}`,
  });

  const users: User[] = userData || [];

  console.log(users);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-[330px] justify-between"
        >
          {value
            ? users.find((framework) => framework.name === value)?.name
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[330px] p-0">
        <Command>
          <CommandInput
            className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            placeholder="Buscar..."
          />
          <CommandEmpty className="py-6 text-center text-sm">
            Cliente não encontrado.
          </CommandEmpty>
          <CommandList className="max-h-[300px] overflow-y-auto overflow-x-hidden">
            <CommandGroup>
              {users.map((framework) => (
                <CommandItem
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground "
                  disabled={false}
                  key={framework.name}
                  value={framework.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
