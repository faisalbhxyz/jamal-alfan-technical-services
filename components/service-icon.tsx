import type { Service } from "@/lib/types";
import {
  Bath,
  Brush,
  Cable,
  Layers,
  Sofa,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<Service["icon"], LucideIcon> = {
  electrical: Cable,
  painting: Brush,
  interior: Sofa,
  gypsum: Layers,
  bathroom: Bath,
  plumbing: Wrench,
};

interface ServiceIconProps {
  name: Service["icon"];
  className?: string;
}

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = ICONS[name];
  return <Icon className={className} strokeWidth={1.6} aria-hidden="true" />;
}
