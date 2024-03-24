"use client";
// import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/user-tables/client";
import { users } from "@/constants/data";
import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "../dashboard/_components/empty-org";
import { UserAddModal } from "@/components/modals/user-add-modal";

const breadcrumbItems = [{ title: "User", link: "/dashboard/user" }];
export default function Contacts() {
  const { organization } = useOrganization();

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        {/* <BreadCrumb items={breadcrumbItems} /> */}
        {!organization ? (
          <EmptyOrg />
        ) : (
          <>
            <UserClient orgId={organization.id} data={users} />
          </>
        )}
      </div>
    </>
  );
}
