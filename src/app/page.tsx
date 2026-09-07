import TopNavbar from "../components/TopNavbar";
import SecondaryNavbar from "../components/SecondaryNavbar";
import HeroSection from "../components/HeroSection";
import LearningManagementSection from "../components/LearningManagementSection";
import TrainingProgramsSection from "../components/TrainingProgramsSection";
import ManagementDevelopmentSection from "../components/ManagementDevelopmentSection";
import TransformationHubSection from "../components/TransformationHubSection";
import TrainingConsultantSection from "../components/TrainingConsultantSection";
import ConsultationBanner from "../components/ConsultationBanner";
import TestimonialsSection from "../components/TestimonialsSection";
import ReadyToJoinSection from "../components/ReadyToJoinSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <TopNavbar />
      <SecondaryNavbar />

      <main>
        <HeroSection />
        <LearningManagementSection />
        <TrainingProgramsSection />
        <ManagementDevelopmentSection />
        <TransformationHubSection />
        <TrainingConsultantSection />
        <ConsultationBanner />
        <TestimonialsSection />
        <ReadyToJoinSection />
      </main>
      <Footer />
    </>
  );
}
