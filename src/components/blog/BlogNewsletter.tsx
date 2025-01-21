import { NewsletterSignup } from "@/components/NewsletterSignup";

interface BlogNewsletterProps {
  title: string;
  description: string;
}

export function BlogNewsletter({ title, description }: BlogNewsletterProps) {
  return (
    <div className="my-12 p-8 bg-accent rounded-lg">
      <h3 className="text-2xl font-heading font-semibold mb-4">{title}</h3>
      <p className="mb-6">{description}</p>
      <NewsletterSignup />
    </div>
  );
}