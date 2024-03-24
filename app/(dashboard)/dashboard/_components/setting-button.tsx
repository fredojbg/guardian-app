import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import Link from "next/link";

export const SettingButton = () => {
  return (
    <Link href={"/settings"}>
      <Button variant="default">
        <Settings className="h-4 w-4" />
      </Button>
    </Link>
  );
};
