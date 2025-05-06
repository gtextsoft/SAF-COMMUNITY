import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const openSignupModal = () => {
    const modal = document.getElementById('signup-modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  };

  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Join Dr. Stephen Akintayo's Circle: Build Better, Together.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 animate-fade-in-delayed">
            A free, curated space for visionaries to connect, share, grow, and win.
          </p>
          <div className="animate-fade-in-more-delayed">
          </div>
          <div className="mt-16 flex flex-col items-center animate-fade-in-most-delayed">
            <p className="text-gray-300 mb-2">Scroll to explore our communities</p>
            <div className="animate-bounce">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 5V19M12 19L5 12M12 19L19 12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;