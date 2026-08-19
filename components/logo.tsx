import { SeoImage } from "@/components/seo-image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  compact?: boolean;
  onDark?: boolean;
  priority?: boolean;
}

export function Logo({
  className,
  compact = false,
  onDark = false,
  priority = false,
}: LogoProps) {
  return (
    <SeoImage
      src={onDark ? "/images/logo-on-dark.png" : "/images/logo.png"}
      alt="Jamal Alfan Technical Services Co. — Dubai, UAE"
      width={1693}
      height={593}
      priority={priority}
      sizes="220px"
      className={cn(
        "w-auto object-contain",
        compact ? "h-11 sm:h-12" : "h-14 sm:h-16",
        className,
      )}
    />
  );
}
