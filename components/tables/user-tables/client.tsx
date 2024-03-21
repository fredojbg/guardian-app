"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { User } from "@/constants/data";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { NewBoardButton } from "@/app/(dashboard)/_components/new-board-button";
import { NewUserButton } from "@/app/(dashboard)/contacts/_components/new-user-button";
import { UserAddModal } from "@/components/modals/user-add-modal";
import { useAddUserModal } from "@/store/use-add-user-modal";

interface ProductsClientProps {
  orgId: string;
  data: User[];
}

export const UserClient: React.FC<ProductsClientProps> = ({ orgId, data }) => {
  const router = useRouter();
  const datas = useQuery(api.contacts.get, {
    orgId,
  });

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Users (${data.length})`}
          description="Manage users (Client side table functionalities.)"
        />

        <NewUserButton orgId={orgId} />
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
