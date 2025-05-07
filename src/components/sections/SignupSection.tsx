import React, { useEffect, useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { BeamsBackground } from '../ui/beams-background';

const communities = [
  { id: "tech-founders", name: "Tech Founders & SaaS Entrepreneurs" },
  { id: "entrepreneurs", name: "Entrepreneurs & Business Owners" },
  { id: "authors-speakers", name: "Authors & Public Speakers" },
  { id: "realtors", name: "Realtors & Property Investors" },
  { id: "creatives", name: "Creatives & Media Professionals" },
  { id: "finance", name: "Finance & Investment Pros" },
  { id: "wellness", name: "Health & Wellness Experts" },
];

const SignupSection: React.FC = () => {
  const [optimizedRendering, setOptimizedRendering] = useState(false);

  // Enable optimized rendering when the component is likely to be in view
  useEffect(() => {
    const handleScroll = () => {
      // Only activate full rendering when near the section
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const documentHeight = document.body.scrollHeight;
      
      // Check if we're in the bottom third of the page
      if (scrollPosition > documentHeight - viewportHeight * 1.5) {
        setOptimizedRendering(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openSignupModal = () => {
    const modal = document.getElementById('signup-modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <BeamsBackground intensity={optimizedRendering ? "medium" : "subtle"}>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join the Circle?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Connect with like-minded visionaries, access exclusive resources, and grow your network — all completely free.
            </p>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 md:p-12 shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Start Your Journey Today
              </h3>
              <a 
                href="https://app.mailingboss.com/lists/681b3b93b4049/subscribe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-accent-violet to-accent-teal text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:scale-105 mt-4"
              >
                Join the Circle
              </a>
              <p className="mt-6 text-white/70 text-sm">
                Join over 10,000+ visionaries already building better, together.
              </p>
            </div>
          </div>
        </Container>
      </BeamsBackground>
    </section>
  );
};

export default SignupSection;