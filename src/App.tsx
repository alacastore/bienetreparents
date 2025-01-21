import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPost4 from "./pages/BlogPost4";
import BlogPost5 from "./pages/BlogPost5";
import BlogPost6 from "./pages/BlogPost6";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CookiePolicy from "./pages/CookiePolicy";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { StrictMode } from "react";

const queryClient = new QueryClient();

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <div className="min-h-screen flex flex-col">
              <Toaster />
              <Sonner />
              <Navbar />
              <main className="flex-1 pt-16">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/a-propos" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/5-techniques-stress-parental" element={<BlogPost1 />} />
                  <Route path="/blog/trouver-temps-pour-soi" element={<BlogPost2 />} />
                  <Route path="/blog/equilibrer-vie-pro-familiale" element={<BlogPost3 />} />
                  <Route path="/blog/exercices-relaxation-parents" element={<BlogPost4 />} />
                  <Route path="/blog/routine-matinale-parents" element={<BlogPost5 />} />
                  <Route path="/blog/routine-familiale-apaisante" element={<BlogPost6 />} />
                  <Route path="/ressources" element={<Resources />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/mentions-legales" element={<Legal />} />
                  <Route path="/politique-de-confidentialite" element={<Privacy />} />
                  <Route path="/conditions-generales" element={<Terms />} />
                  <Route path="/gestion-cookies" element={<CookiePolicy />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </TooltipProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;