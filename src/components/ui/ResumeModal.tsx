import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';
import { Button } from './Button';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, resumeUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(22,21,18,0.42)] p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="paper-panel relative flex h-[85vh] w-full max-w-4xl flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-[rgba(140,133,118,0.18)] p-4">
              <h2 className="flex items-center gap-2 text-xl">
                <FileText className="text-primary" />
                Resume Preview
              </h2>
              <div className="flex items-center gap-2">
                <a 
                  href={resumeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-[rgba(140,133,118,0.28)] bg-white/75 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-foreground)] transition-colors hover:bg-white"
                  download
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
                <button 
                  onClick={onClose}
                  className="rounded-full p-2 text-[color:var(--color-muted)] transition-colors hover:bg-black/5 hover:text-[color:var(--color-foreground)]"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-hidden bg-[rgba(243,238,228,0.7)] p-4">
              <iframe 
                src={`${resumeUrl}#toolbar=0`}
                className="h-full w-full rounded-[1.25rem] border border-[rgba(140,133,118,0.18)] bg-white"
                title="Resume PDF"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
