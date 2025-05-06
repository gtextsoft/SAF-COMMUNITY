import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import CommunitiesSection from './components/sections/CommunitiesSection';
import SocialProofSection from './components/sections/SocialProofSection';
import SignupSection from './components/sections/SignupSection';
import Footer from './components/layout/Footer';
import SignupModal from './components/sections/SignupModal';

function App() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="min-h-screen flex flex-col"
    >
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CommunitiesSection />
        <SocialProofSection />
        <SignupSection />
      </main>
      <Footer />
      <SignupModal />
    </motion.div>
  );
}

export default App;