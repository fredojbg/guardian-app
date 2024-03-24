"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import queryString from "query-string";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";

import { Input } from "@/components/ui/input";

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    // const url = queryString.stringifyUrl(
    //   {
    //     url: "/",
    //     query: {
    //       search: debouncedValue,
    //     },
    //   },
    //   {
    //     skipNull: true,
    //     skipEmptyString: true,
    //   }
    // );
    // router.push(url);
  }, [debouncedValue]);

  return (
    <div className="w-full relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
