import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ElevateSection from "@/components/ElevateSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CreativesSection from "@/components/CreativesSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Extract section from pathname (e.g., /contact -> contact)
    const path = location.pathname.slice(1);
    
    if (path && path !== "/" && path !== "") {
      // Scroll to section
      const element = document.getElementById(path);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ElevateSection />
      <AboutSection />
      <ServicesSection />
      <CreativesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
