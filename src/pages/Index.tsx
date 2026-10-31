import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import NearMissSection from "@/components/NearMissSection";
import ComplianceSection from "@/components/ComplianceSection";
import ProximitySection from "@/components/ProximitySection";
import IndustrialFutureSection from "@/components/IndustrialFutureSection";
import EvidenceSection from "@/components/EvidenceSection";
import HomeHowItWorks from "@/components/HomeHowItWorks";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ProductHighlights from "@/components/ProductHighlights";
import IndustryApplications from "@/components/IndustryApplications";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      <StatsSection />
      <HomeHowItWorks />
      <CaseStudiesSection />
      <ProductHighlights />
      <IndustryApplications />
      <TestimonialsSection />
      <FAQSection />
      <NearMissSection />
      <ComplianceSection />
      <ProximitySection />
      <IndustrialFutureSection />
      <EvidenceSection />
      <Footer />
    </div>
  );
};

export default Index;
