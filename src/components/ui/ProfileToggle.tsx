import React from 'react';
import { useStore } from '@nanostores/react';
import { profileStore, setProfile } from '../../stores/profileStore';
import { motion } from 'framer-motion';
import { Code, Layers } from 'lucide-react';

export const ProfileToggle: React.FC = () => {
  const profile = useStore(profileStore);

  return (
    <div className="flex items-center p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
      <button
        onClick={() => setProfile('frontend')}
        className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
          profile === 'frontend' ? 'text-white' : 'text-gray-400 hover:text-white'
        }`}
      >
        {profile === 'frontend' && (
          <motion.div
            layoutId="activeProfile"
            className="absolute inset-0 bg-primary/20 rounded-full border border-primary/30"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-2">
          <Code size={14} />
          Frontend
        </span>
      </button>

      <button
        onClick={() => setProfile('fullstack')}
        className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
          profile === 'fullstack' ? 'text-white' : 'text-gray-400 hover:text-white'
        }`}
      >
        {profile === 'fullstack' && (
          <motion.div
            layoutId="activeProfile"
            className="absolute inset-0 bg-secondary/20 rounded-full border border-secondary/30"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-2">
          <Layers size={14} />
          Fullstack
        </span>
      </button>
    </div>
  );
};
