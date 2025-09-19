import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    // Optional: Add animation/scroll effects
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-4');
        }
      },
      {
        threshold: 0.1
      }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center" ref={heroRef}>
          <div className="flex justify-center mb-10">
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-blue-300 tracking-tight">Intelion</h2>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-700 ease-out opacity-0 translate-y-4">
            <span className="block">Intelligent IT Solutions</span>
            <span className="block text-blue-300">for the Digital Age</span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Intelion helps businesses transform, innovate, and thrive with cutting-edge software solutions and IT services tailored to your unique challenges.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-900 transition">
              Our Services
            </button>
          </div>
          
          <div className="mt-20">
            <p className="text-lg mb-4 text-blue-200">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              {/* Replace with actual client logos */}
              <div className="h-8 w-32 bg-white rounded-md"></div>
              <div className="h-8 w-32 bg-white rounded-md"></div>
              <div className="h-8 w-32 bg-white rounded-md"></div>
              <div className="h-8 w-32 bg-white rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
