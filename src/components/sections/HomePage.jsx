import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

const HomePage = () => {
  return (
    <div className="pt-16 mx-0"> {/* Remove any margin */}
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;