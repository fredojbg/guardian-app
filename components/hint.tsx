import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export interface HintProps {
  label: string;
  children: React.ReactNode;
  slide?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  alignOffset?: number;
}

export const Hint = ({
  label,
  children,
  slide = "top",
  align = "center",
  sideOffset = 4,
  alignOffset = 0,
}: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          side={slide}
          align={align}
          className="text-white bg-black border-black"
        >
          <p className="font-semibold capitalize">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
