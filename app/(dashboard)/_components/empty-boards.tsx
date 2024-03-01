"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";

import { useOrganization } from "@clerk/nextjs";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return null;

    mutate({
      title: "untitled",
      orgId: organization?.id,
    })
      .then((id) => {
        toast.success("Board created");
        router.push(`/board/${id}`);
      })
      .catch((error) => {
        toast.error("Falied to create baord");
      });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="Empty" width={140} height={140} />
      <h2 className="text-2xl font-semibold mt-6">Create yout first board!</h2>
      <p className="text-sm text-muted-foreground mt-2">Get started</p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size={"lg"}>
          Create board
        </Button>
      </div>
    </div>
  );
};
