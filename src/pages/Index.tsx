import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ElevateSection from "@/components/ElevateSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CreativesSection from "@/components/CreativesSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
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
      <ScrollToTop />
    </div>
  );
};

export default Index;
