import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background Layer 1 - Fastest */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary-blue/30 to-primary-turquoise/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-br from-primary-turquoise/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </motion.div>

      {/* Background Layer 2 - Medium */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-blue/10 to-primary-turquoise/10 rounded-full blur-3xl animate-spin-slow" />
      </motion.div>

      {/* Background Layer 3 - Slowest */}
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0 opacity-40"
      >
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-bounce-slow" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-br from-primary-gradient/20 to-primary-blue/20 rounded-full blur-2xl animate-pulse" />
      </motion.div>
    </div>
  );
};
