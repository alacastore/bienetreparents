import { useToast } from "@/hooks/use-toast";

export const useShare = () => {
  const { toast } = useToast();

  const handleShare = async () => {
    try {
      if (navigator.share && navigator.canShare && navigator.canShare({ url: window.location.href })) {
        await navigator.share({
          title: "Blog Bien-Être des Parents",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Lien copié !",
          description: "Vous pouvez maintenant le partager.",
        });
      }
    } catch (error) {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Lien copié !",
        description: "Vous pouvez maintenant le partager.",
      });
    }
  };

  return handleShare;
};