"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal, Trash2Icon, X } from "lucide-react";

interface CellActionProps {
  paymentId: any;
}

export const CellAction: React.FC<CellActionProps> = ({ paymentId }) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(paymentId)}
          >
            <Trash2Icon className="mr-2 h-4 w-4" />
            Cancelar
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Ver cliente</DropdownMenuItem>
          <DropdownMenuItem>Ver detalhes do pagamento</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
