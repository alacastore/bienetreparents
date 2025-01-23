import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface GuideDownloadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GuideDownloadDialog({ open, onOpenChange }: GuideDownloadDialogProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error: dbError } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);

      if (dbError && dbError.code !== '23505') {
        throw dbError;
      }

      const { error: functionError, data } = await supabase.functions.invoke('send-guide', {
        body: { to: email }
      });

      if (functionError) {
        throw functionError;
      }

      // Check if there's an error in the response data
      if (data?.error) {
        toast({
          title: "Erreur d'envoi",
          description: data.error,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Guide envoyé !",
        description: "Vérifiez votre boîte mail pour télécharger votre guide. Si vous ne le trouvez pas, pensez à vérifier vos spams.",
      });

      onOpenChange(false);
      setEmail("");
    } catch (error: any) {
      console.error('Error:', error);
      
      // Handle specific error cases
      if (error.message?.includes('domain is not verified')) {
        toast({
          title: "Configuration requise",
          description: "Le domaine d'envoi n'est pas encore vérifié. Veuillez patienter pendant que nous finalisons la configuration.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Une erreur est survenue",
        description: "Impossible de traiter votre demande pour le moment.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Téléchargez votre guide gratuit</DialogTitle>
          <DialogDescription>
            Entrez votre email pour recevoir le guide "7 Jours pour une Parentalité Sereine" et nos conseils hebdomadaires.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleDownload} className="space-y-4">
          <Input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Traitement en cours..." : "Télécharger le guide"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}