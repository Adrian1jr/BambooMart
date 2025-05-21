import React from 'react';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(https://img.heroui.chat/image/fashion?w=1920&h=1080&u=1)`,
          filter: 'brightness(0.85)'
        }}
      />
      
      <div className="hero-gradient absolute inset-0" />
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <motion.div 
          className="max-w-lg text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sustainable Style for Every Season</h1>
          <p className="text-lg mb-8">
            Discover our new collection of eco-friendly clothing made from bamboo and other sustainable materials.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              color="primary" 
              size="lg" 
              className="font-medium"
              as="a" 
              href="#new-arrivals"
            >
              Shop Now
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;