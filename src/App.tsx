import React, { useEffect, lazy, Suspense } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
// Lazy load components that are not needed for initial render
const CommunitiesSection = lazy(() => import('./components/sections/CommunitiesSection'));
const SocialProofSection = lazy(() => import('./components/sections/SocialProofSection'));
const SignupSection = lazy(() => import('./components/sections/SignupSection'));
const Footer = lazy(() => import('./components/layout/Footer'));
const SignupModal = lazy(() => import('./components/sections/SignupModal'));

// Loading fallback component with minimal visual impact
const SectionLoader = () => (
  <div className="w-full h-64 flex items-center justify-center">
    <div className="w-8 h-8 border-t-2 border-white/50 rounded-full animate-spin"></div>
  </div>
);

function App() {
  const controls = useAnimation();

  useEffect(() => {
    // Start the animation after the component mounts
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    });
    
    // Prefetch components after initial render is complete
    const timer = setTimeout(() => {
      import('./components/sections/CommunitiesSection');
      import('./components/sections/SocialProofSection');
    }, 1000);
    
    return () => clearTimeout(timer);
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
        <Suspense fallback={<SectionLoader />}>
          <CommunitiesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <SocialProofSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <SignupSection />
        </Suspense>
      </main>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
      <Suspense fallback={<div />}>
        <SignupModal />
      </Suspense>
    </motion.div>
  );
}

export default App;