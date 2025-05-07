import React from 'react';
import Container from '../ui/Container';
import { BeamsBackground } from '../ui/beams-background';

const speakers = [
  { name: 'Grant Cardone', role: 'Entrepreneur & Author' },
  { name: 'Robert Kiyosaki', role: 'Financial Educator' },
  { name: 'Tai Lopez', role: 'Investor & Advisor' },
  { name: 'Lisa Nichols', role: 'Motivational Speaker' },
  { name: 'Les Brown', role: 'Motivational Speaker' },
  { name: 'Gary Vaynerchuk', role: 'Entrepreneur' },
];

const SocialProofSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <BeamsBackground intensity="subtle">
        <Container>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)]">
            <div className="max-w-4xl mx-auto text-center">
              <svg className="w-12 h-12 text-white/80 mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl md:text-2xl text-white/90 italic mb-6">
                "Dr. Stephen's communities have been instrumental in my success. The connections and knowledge I've gained are priceless. If you're serious about growth, you need to be in these rooms."
              </p>
              <div>
                <h4 className="font-bold text-white">Michael Johnson</h4>
                <p className="text-white/70">Tech Founder & 7-Figure Entrepreneur</p>
              </div>
            </div>
          </div>
        </Container>
      </BeamsBackground>
    </section>
  );
};

export default SocialProofSection;