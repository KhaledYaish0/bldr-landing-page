import { cn } from "@/lib/utils";
import bldrLogo from "@/assets/bldr-logo.svg";

const sizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
} as const;

interface BldrLogoProps {
  className?: string;
  size?: keyof typeof sizes;
}

/** BLDR brand mark — shared by header, footer, and favicon source asset. */
export function BldrLogo({ className, size = "sm" }: BldrLogoProps) {
  return (
    <img
      src={bldrLogo}
      alt=""
      width={32}
      height={32}
      className={cn(sizes[size], "shrink-0 object-contain", className)}
      aria-hidden
    />
  );
}
