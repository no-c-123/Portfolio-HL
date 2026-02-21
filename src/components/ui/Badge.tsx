import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'outline', 
  className 
}) => {
  const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent bg-primary text-white hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-white hover:bg-secondary/80",
    outline: "text-gray-300 border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20",
    ghost: "border-transparent bg-transparent hover:bg-white/10 text-gray-400 hover:text-white"
  };

  return (
    <motion.div 
      className={cn(baseStyles, variants[variant], className)}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.div>
  );
};
