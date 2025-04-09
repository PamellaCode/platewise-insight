import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "@/lib/auth";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/HowItWorks";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Subscription from "./pages/Subscription";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Estimations from "./pages/Estimations";
import EstimationDetail from "./pages/EstimationDetail";
import Statistics from "./pages/Statistics";
import History from "./pages/History";
import AssistantAI from "./pages/AssistantAI";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NewsAndTrends from "./pages/NewsAndTrends";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <BrowserRouter>
          <AuthProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news-and-trends" element={<NewsAndTrends />} />
              <Route
                path="/dashboard"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/history"
                element={
                  <RequireAuth>
                    <History />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/assistant-ai"
                element={
                  <RequireAuth>
                    <AssistantAI />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/subscription"
                element={
                  <RequireAuth>
                    <Subscription />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/profile"
                element={
                  <RequireAuth>
                    <Profile />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/settings"
                element={
                  <RequireAuth>
                    <Settings />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/estimations"
                element={
                  <RequireAuth>
                    <Estimations />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/estimations/:id"
                element={
                  <RequireAuth>
                    <EstimationDetail />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/stats"
                element={
                  <RequireAuth>
                    <Statistics />
                  </RequireAuth>
                }
              />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
