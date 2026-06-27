import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  href, 
  className, 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full border font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
  
  const variants = {
    primary: "border-primary bg-primary text-[color:var(--color-accent)] hover:bg-secondary hover:border-secondary",
    secondary: "border-secondary bg-secondary text-white hover:opacity-95",
    outline: "border-[rgba(140,133,118,0.35)] bg-white/60 text-[color:var(--color-foreground)] hover:bg-white",
    ghost: "border-transparent bg-transparent text-[color:var(--color-muted)] hover:bg-black/5 hover:text-[color:var(--color-foreground)]"
  };
  
  const sizes = {
    sm: "h-10 px-4 text-xs tracking-[0.14em] uppercase",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-sm tracking-[0.16em] uppercase"
  };

  const motionProps = {
    whileHover: { y: -1 },
    whileTap: { scale: 0.99 }
  };

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a 
        href={href} 
        className={combinedClassName}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button 
      className={combinedClassName}
      {...props}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
};
