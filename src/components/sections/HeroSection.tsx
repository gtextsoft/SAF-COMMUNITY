import React from 'react';
import { BeamsBackground } from '../ui/beams-background';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-screen">
      <BeamsBackground intensity="medium">
        <div className="flex flex-col items-center justify-center text-center px-4 py-24 md:py-32 min-h-screen">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Join Dr. Stephen Akintayo's Circle: 
            <br />
            Build Better, Together.
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A free, curated space for visionaries to connect, share, grow, and win.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="#communities" 
              className="inline-block bg-gradient-to-r from-accent-violet to-accent-teal text-white font-bold py-4 px-8 rounded-lg hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all duration-300 shadow-lg hover:scale-105 text-lg"
            >
              Explore Communities
            </a>
          </motion.div>
        </div>
      </BeamsBackground>
    </section>
  );
};

export default HeroSection;