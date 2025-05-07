import React, { useEffect, useState } from 'react';
import { BeamsBackground } from '../ui/beams-background';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  // Delay animations to improve initial load performance
  useEffect(() => {
    // Set a small timeout to allow initial page render to complete
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen">
      <BeamsBackground intensity="subtle">
        <div className="flex flex-col items-center justify-center text-center px-4 py-24 md:py-32 min-h-screen">
          {isMounted ? (
            <>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Join Dr. Stephen Akintayo's Circle: 
                <br />
                Build Better, Together.
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                A free, curated space for visionaries to connect, share, grow, and win.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <a 
                  href="#communities" 
                  className="inline-block bg-gradient-to-r from-accent-violet to-accent-teal text-white font-bold py-4 px-8 rounded-lg hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all duration-300 shadow-lg hover:scale-105 text-lg"
                >
                  Explore Communities
                </a>
              </motion.div>
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join Dr. Stephen Akintayo's Circle: 
                <br />
                Build Better, Together.
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10">
                A free, curated space for visionaries to connect, share, grow, and win.
              </p>
              <div>
                <a 
                  href="#communities" 
                  className="inline-block bg-gradient-to-r from-accent-violet to-accent-teal text-white font-bold py-4 px-8 rounded-lg shadow-lg text-lg"
                >
                  Explore Communities
                </a>
              </div>
            </>
          )}
        </div>
      </BeamsBackground>
    </section>
  );
};

export default HeroSection;