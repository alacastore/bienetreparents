import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  to: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to } = await req.json() as EmailRequest;
    console.log("Sending guide to:", to);

    const guideUrl = "https://ojmwznedyfosvcbrgixx.supabase.co/storage/v1/object/public/guides/7-jours-parentalite-sereine.pdf";
    
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Bien-être des Parents <onboarding@resend.dev>",
        to: [to],
        subject: "Votre guide : 7 jours pour une parentalité sereine",
        html: `
          <h1>Votre guide est prêt !</h1>
          <p>Bonjour,</p>
          <p>Merci de votre inscription ! Voici votre guide "7 jours pour une parentalité sereine".</p>
          <p>Vous pouvez le télécharger en cliquant sur ce lien : <a href="${guideUrl}">Télécharger le guide</a></p>
          <p>Bonne lecture !</p>
          <p>L'équipe Bien-être des Parents</p>
        `,
      }),
    });

    const responseData = await res.json();
    console.log("Resend API response:", responseData);

    if (!res.ok) {
      const error = responseData;
      console.error("Resend API error:", error);
      
      if (error.statusCode === 403 && error.message?.includes('domain is not verified')) {
        return new Response(
          JSON.stringify({ 
            error: "Le domaine d'envoi n'est pas vérifié. Veuillez vérifier votre domaine sur resend.com/domains"
          }), {
            status: 403,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      throw new Error(`Failed to send email: ${JSON.stringify(error)}`);
    }

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error in send-guide function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

serve(handler);