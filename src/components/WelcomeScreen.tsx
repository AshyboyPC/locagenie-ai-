import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AppleHelloEnglishEffect } from './AppleHelloEffect';

const WelcomeScreen = () => {
  const [showWebsite, setShowWebsite] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWebsite(true);
    }, 6000); // Show website after 6 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: showWebsite ? 0 : 1 }}
      transition={{ duration: 1 }}
      className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none ${showWebsite ? 'opacity-0' : 'opacity-100'}`}
      style={{
        background: 'radial-gradient(circle at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.95) 100%)',
        backdropFilter: 'blur(20px)'
      }}
    >
      <div className="text-center">
        <AppleHelloEnglishEffect speed={1.5} />
        <p className="mt-4 text-2xl font-semibold">
          <span className="bg-gradient-to-r from-red-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Welcome to LocaGenie
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
