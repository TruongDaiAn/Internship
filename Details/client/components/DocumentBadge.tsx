import { cn } from "@/lib/utils";

interface DocumentBadgeProps {
  type: "hoso" | "tailieu";
  className?: string;
}

export default function DocumentBadge({ type, className }: DocumentBadgeProps) {
  const variants = {
    hoso: {
      bg: "bg-cyan",
      text: "Hồ sơ",
    },
    tailieu: {
      bg: "bg-purple",
      text: "Tài liệu",
    },
  };

  const variant = variants[type];

  return (
    <div className={cn(
      "flex h-6 items-center justify-center gap-2.5 rounded px-1 py-0.5 text-xs font-medium text-white",
      variant.bg,
      className
    )}>
      {variant.text}
    </div>
  );
}
