import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Programmes from "./pages/Programmes";
import Testimonials from "./pages/Testimonials";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import Mission from "./pages/Mission";
import AdmissionStatus from "./pages/AdmissionStatus";
import NotFound from "./pages/NotFound";

// Admin imports
import { AdminLayout } from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminStudents from "./pages/admin/AdminStudents";
import AdminTestimonials from "./pages/admin/AdminTestimonials";
import AdminPartners from "./pages/admin/AdminPartners";
import AdminProgrammes from "./pages/admin/AdminProgrammes";

const queryClient = new QueryClient();
const App = () => <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/admission-status" element={<AdmissionStatus />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="students" element={<AdminStudents />} />
            <Route path="testimonials" element={<AdminTestimonials />} />
            <Route path="partners" element={<AdminPartners />} />
            <Route path="programmes" element={<AdminProgrammes />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;
export default App;