import { FC } from 'react';
import EnhancedHeroSection from '../Components/Enhanced-hero-section';
import WhyChooseUs from '../Components/Why-choose-us';
import ServicesPreview from '../Components/Services-preview';
import TechStack from '../Components/Tech-Stack';
import Testimonials from '../Components/Testimonials';
import FAQSection from '../Components/FAQ-section';
import CTASection from '../Components/CTA-Section';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <EnhancedHeroSection />
      <WhyChooseUs />
      <ServicesPreview />
      <TechStack />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Home;
