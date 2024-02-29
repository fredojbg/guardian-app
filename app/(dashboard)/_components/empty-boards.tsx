import { Button } from "@/components/ui/button";
import Image from "next/image";

export const EmptyBoards = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="Empty" width={140} height={140} />
      <h2 className="text-2xl font-semibold mt-6">Create yout first board!</h2>
      <p className="text-sm text-muted-foreground mt-2">Get started</p>
      <div className="mt-6">
        <Button size={"lg"}>Create board</Button>
      </div>
    </div>
  );
};
