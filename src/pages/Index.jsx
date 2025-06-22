import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase';
import CertificationSection from '../components/CertificationSection';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <ProductShowcase />
        <CertificationSection />
        <ContactSection />
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Index;