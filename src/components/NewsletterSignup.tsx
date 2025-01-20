import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter signup
    toast({
      title: "Inscription réussie !",
      description: "Vous recevrez bientôt nos conseils hebdomadaires.",
    });
    setEmail("");
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-heading font-semibold mb-4">
        Ne manquez pas nos conseils hebdomadaires
      </h2>
      <p className="text-gray-600 mb-6">
        Inscrivez-vous à notre newsletter et recevez chaque semaine des astuces exclusives
        pour simplifier votre vie de parent.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
        <Input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit">S'inscrire</Button>
      </form>
    </div>
  );
}