import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ProgramsSection from '@/components/ProgramsSection';
import CareerSection from '@/components/CareerSection';
import TrainersSection from '@/components/TrainersSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseSection />
        <ProgramsSection />
        <CareerSection />
        <TrainersSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
