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
    console.log("Sending checklist to:", to);

    const checklistUrl = "https://ojmwznedyfosvcbrgixx.supabase.co/storage/v1/object/public/guides/checklist-routine-matinale.pdf";
    
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Bien-être des Parents <contact@bienetreparents.fr>",
        to: [to],
        subject: "Votre checklist : Routine matinale pour parents occupés",
        html: `
          <h1>Votre checklist est prête !</h1>
          <p>Bonjour,</p>
          <p>Merci de votre inscription ! Voici votre checklist "Routine matinale pour parents occupés".</p>
          <p>Vous pouvez la télécharger en cliquant sur ce lien : <a href="${checklistUrl}">Télécharger la checklist</a></p>
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
      return new Response(JSON.stringify({ error: "Failed to send email: " + JSON.stringify(error) }), {
        status: res.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error in send-checklist function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

serve(handler);