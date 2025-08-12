import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import CurriculumSection from "@/components/CurriculumSection";
import TechnologySection from "@/components/TechnologySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <CurriculumSection />
      <TechnologySection />
      <Footer />
    </div>
  );
};

export default Index;
