"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { useAddUserModal } from "@/store/use-add-user-modal";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewUserButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { onOpen } = useAddUserModal();

  return (
    <Button
      className={cn("text-xs md:text-sm", disabled && "cursor-not-allowed")}
      onClick={() => onOpen(orgId)}
    >
      <Plus className="mr-2 h-4 w-4" /> Adicionar novo
    </Button>
  );
};
