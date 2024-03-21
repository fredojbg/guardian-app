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

import { NewUserButton } from "@/app/(dashboard)/contacts/_components/new-user-button";

interface ProductsClientProps {
  orgId: string;
  data: User[];
}

export const UserClient: React.FC<ProductsClientProps> = ({ orgId }) => {
  const userData: User[] | undefined = useQuery(api.contacts.get, {
    orgId,
  });

  const users: User[] = userData || [];

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading title={`Clientes (${users?.length})`} description="" />

        <NewUserButton orgId={orgId} />
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={users} />
    </>
  );
};
