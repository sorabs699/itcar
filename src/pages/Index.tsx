import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionMissionValues from "@/components/VisionMissionValues";
import HotelsSection from "@/components/HotelsSection";
import ProceduresSection from "@/components/ProceduresSection";
import CSRSection from "@/components/CSRSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <VisionMissionValues />
    <HotelsSection />
    <ProceduresSection />
    <CSRSection />
    <Footer />
  </div>
);

export default Index;
