import { ReactNode } from "react";

interface ResourceSectionProps {
  title: string;
  children: ReactNode;
}

export function ResourceSection({ title, children }: ResourceSectionProps) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-heading font-semibold mb-8">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  );
}