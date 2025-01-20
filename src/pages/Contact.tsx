import { Helmet } from "react-helmet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, Send, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse e-mail valide.",
  }),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    form.reset();
  }

  return (
    <>
      <Helmet>
        <title>Contact - Bien-Être des Parents | Contactez-Nous</title>
        <meta
          name="description"
          content="Besoin d'aide ou de conseils ? Contactez l'équipe de Bien-Être des Parents via notre formulaire ou par e-mail. Nous sommes là pour vous."
        />
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-center mb-8">
          Nous Contacter
        </h1>

        <p className="text-lg text-center mb-12 text-gray-600">
          Une question ? Un besoin spécifique ? Nous sommes là pour vous accompagner.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="votre@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Votre message..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  <Send className="mr-2" />
                  Envoyer votre message
                </Button>
              </form>
            </Form>
          </div>

          <div className="space-y-8">
            <div className="bg-accent rounded-lg p-6">
              <h2 className="text-xl font-heading font-semibold mb-4">
                Contactez-nous directement
              </h2>
              <div className="flex items-center space-x-2 text-primary">
                <Mail className="h-5 w-5" />
                <a href="mailto:contact@bienetreparents.fr" className="hover:underline">
                  contact@bienetreparents.fr
                </a>
              </div>
            </div>

            <div className="bg-accent rounded-lg p-6">
              <h2 className="text-xl font-heading font-semibold mb-4">
                Suivez-nous
              </h2>
              <p className="text-gray-600 mb-4">
                Rejoignez-nous sur nos réseaux sociaux pour plus de conseils et astuces.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;