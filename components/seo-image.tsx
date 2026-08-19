import Image from "next/image";
import type { ImageProps } from "next/image";

type SeoImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  title?: string;
};

export function SeoImage({
  alt,
  title,
  priority = false,
  ...props
}: SeoImageProps) {
  return (
    <Image
      alt={alt}
      title={title ?? alt}
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      {...props}
    />
  );
}
