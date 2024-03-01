"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!orgId) return null;

    mutate({
      title: "untitled",
      orgId: orgId,
    })
      .then((id) => {
        toast.success("Board created");
        // redirect TO BOARD
      })
      .catch((error) => {
        toast.error("Falied to create baord");
      });
  };

  return (
    <button
      disabled={pending || disabled}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
        (pending || disabled) &&
          "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      )}
      onClick={() => onClick()}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-white font-light text-sm">New baord</p>
    </button>
  );
};
