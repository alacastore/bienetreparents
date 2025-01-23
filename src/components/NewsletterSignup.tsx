import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface NewsletterSignupProps {
  onSuccess?: () => void;
}

export function NewsletterSignup({ onSuccess }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showThankYouDialog, setShowThankYouDialog] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique violation error code
          toast({
            title: "Vous êtes déjà inscrit !",
            description: "Cette adresse email est déjà enregistrée dans notre newsletter.",
          });
        } else {
          throw error;
        }
      } else {
        if (onSuccess) {
          onSuccess();
        }
        setEmail("");
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Une erreur est survenue",
        description: "Impossible de vous inscrire pour le moment. Veuillez réessayer plus tard.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Inscription..." : "S'inscrire"}
        </Button>
      </form>
    </div>
  );
}