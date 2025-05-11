
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MagicInterface from "./pages/MagicInterface";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leagues" element={<Index />} />
          <Route path="/matches" element={<Index />} />
          <Route path="/analysis" element={<Index />} />
          <Route path="/patterns" element={<Index />} />
          <Route path="/league-analytics" element={<Index />} />
          <Route path="/league-management" element={<Index />} />
          <Route path="/integrations" element={<Index />} />
          <Route path="/predictions" element={<Index />} />
          <Route path="/settings" element={<Index />} />
          <Route path="/magic-interface" element={<MagicInterface />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
