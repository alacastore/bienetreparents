import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const CookieManagement = () => {
  const { toast } = useToast();
  const [cookiePreferences, setCookiePreferences] = useState({
    functional: true,
    analytics: false,
    marketing: false
  });

  // Charger les préférences depuis Supabase au démarrage
  useEffect(() => {
    const loadPreferences = async () => {
      try {
        const { data, error } = await supabase
          .from('cookie_preferences')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (error) {
          console.error('Erreur lors du chargement des préférences:', error);
          // Utiliser les préférences du localStorage comme fallback
          const storedPrefs = localStorage.getItem('cookiePreferences');
          if (storedPrefs) {
            setCookiePreferences(JSON.parse(storedPrefs));
          }
          return;
        }

        if (data) {
          setCookiePreferences({
            functional: data.functional,
            analytics: data.analytics,
            marketing: data.marketing
          });
        }
      } catch (error) {
        console.error('Erreur lors du chargement des préférences:', error);
      }
    };

    loadPreferences();
  }, []);

  const handleCookieToggle = async (type: keyof typeof cookiePreferences) => {
    const newPreferences = { ...cookiePreferences, [type]: !cookiePreferences[type] };
    
    try {
      // Sauvegarder dans Supabase
      const { error } = await supabase
        .from('cookie_preferences')
        .insert([{
          functional: newPreferences.functional,
          analytics: newPreferences.analytics,
          marketing: newPreferences.marketing
        }]);

      if (error) {
        console.error('Erreur lors de la sauvegarde des préférences:', error);
        toast({
          title: "Erreur",
          description: "Impossible de sauvegarder vos préférences. Veuillez réessayer.",
          variant: "destructive",
        });
        return;
      }

      // Mettre à jour le state et le localStorage
      setCookiePreferences(newPreferences);
      localStorage.setItem('cookiePreferences', JSON.stringify(newPreferences));
      
      // Appliquer réellement les préférences de cookies
      if (type === 'analytics') {
        if (newPreferences.analytics) {
          // Activer Google Analytics ou autre outil d'analyse
          console.log('Analytics activé');
        } else {
          // Désactiver Google Analytics
          console.log('Analytics désactivé');
        }
      } else if (type === 'marketing') {
        if (newPreferences.marketing) {
          // Activer les cookies marketing
          console.log('Cookies marketing activés');
        } else {
          // Désactiver les cookies marketing
          console.log('Cookies marketing désactivés');
        }
      }

      toast({
        title: "Préférences mises à jour",
        description: `Les cookies ${type} ont été ${newPreferences[type] ? 'activés' : 'désactivés'}.`,
      });
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des préférences:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la mise à jour des préférences.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between space-x-4">
        <div>
          <Label htmlFor="functional" className="text-base font-semibold">Cookies Fonctionnels</Label>
          <p className="text-sm text-gray-600">Nécessaires au bon fonctionnement du site. Ne peuvent pas être désactivés.</p>
        </div>
        <Switch
          id="functional"
          checked={cookiePreferences.functional}
          disabled={true}
        />
      </div>

      <div className="flex items-center justify-between space-x-4">
        <div>
          <Label htmlFor="analytics" className="text-base font-semibold">Cookies Analytiques</Label>
          <p className="text-sm text-gray-600">Permettent de mesurer l'audience et d'analyser l'utilisation du site.</p>
        </div>
        <Switch
          id="analytics"
          checked={cookiePreferences.analytics}
          onCheckedChange={() => handleCookieToggle('analytics')}
        />
      </div>

      <div className="flex items-center justify-between space-x-4">
        <div>
          <Label htmlFor="marketing" className="text-base font-semibold">Cookies Marketing</Label>
          <p className="text-sm text-gray-600">Utilisés pour la publicité ciblée et le marketing.</p>
        </div>
        <Switch
          id="marketing"
          checked={cookiePreferences.marketing}
          onCheckedChange={() => handleCookieToggle('marketing')}
        />
      </div>
    </div>
  );
};

export default CookieManagement;