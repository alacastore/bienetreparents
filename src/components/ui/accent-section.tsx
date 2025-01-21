import { cn } from "@/lib/utils";

interface AccentSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function AccentSection({ children, className }: AccentSectionProps) {
  return (
    <section className={cn("bg-accent rounded-lg p-8", className)}>
      {children}
    </section>
  );
}