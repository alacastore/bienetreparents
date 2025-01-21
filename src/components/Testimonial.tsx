import { FeatureCard } from "@/components/ui/feature-card";

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  avatar: string;
}

export function Testimonial({ content, name, role }: TestimonialProps) {
  return (
    <FeatureCard
      title={name}
      description={content}
      className="relative"
    />
  );
}