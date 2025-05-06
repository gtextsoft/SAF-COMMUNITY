import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

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
  const openSignupModal = () => {
    const modal = document.getElementById('signup-modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Circle?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Connect with like-minded visionaries, access exclusive resources, and grow your network — all completely free.
          </p>
          
          <div className="bg-gradient-to-r from-primary-800 to-secondary-800 rounded-xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">
              Start Your Journey Today
            </h3>
            <p className="mt-4 text-gray-300 text-sm">
              Join over 10,000+ visionaries already building better, together.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignupSection;