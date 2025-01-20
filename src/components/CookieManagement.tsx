import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const CookieManagement = () => {
  const { toast } = useToast();
  const [cookiePreferences, setCookiePreferences] = useState({
    functional: true,
    analytics: false,
    marketing: false
  });

  const handleCookieToggle = (type: keyof typeof cookiePreferences) => {
    setCookiePreferences(prev => {
      const newPreferences = { ...prev, [type]: !prev[type] };
      
      // Here you would typically save the preferences to localStorage or cookies
      localStorage.setItem('cookiePreferences', JSON.stringify(newPreferences));
      
      toast({
        title: "Préférences mises à jour",
        description: `Les cookies ${type} ont été ${newPreferences[type] ? 'activés' : 'désactivés'}.`,
      });
      
      return newPreferences;
    });
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