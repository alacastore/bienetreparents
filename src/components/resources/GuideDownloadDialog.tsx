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

      const { error: functionError } = await supabase.functions.invoke('send-guide', {
        body: { to: email }
      });

      if (functionError) {
        if (functionError.message.includes('alacastore@gmail.com')) {
          toast({
            title: "Mode test",
            description: "Pendant la phase de test, seuls les emails vers alacastore@gmail.com sont autorisés. Pour envoyer à d'autres adresses, veuillez vérifier un domaine sur resend.com/domains",
            variant: "destructive",
          });
          return;
        }
        throw functionError;
      }

      toast({
        title: "Guide envoyé !",
        description: "Vérifiez votre boîte mail pour télécharger votre guide. Si vous ne le trouvez pas, pensez à vérifier vos spams.",
      });

      onOpenChange(false);
      setEmail("");
    } catch (error) {
      console.error('Error:', error);
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