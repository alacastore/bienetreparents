import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function SectionTitle({ children, className, centered = false }: SectionTitleProps) {
  return (
    <h2 
      className={cn(
        "text-3xl font-heading font-semibold mb-8",
        centered && "text-center",
        className
      )}
    >
      {children}
    </h2>
  );
}