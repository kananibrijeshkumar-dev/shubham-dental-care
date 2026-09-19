import React from 'react';
import { motion } from 'framer-motion';

// Minimal, Geometric, Rounded Icon System
export const SmileGraphic = ({ className = "" }) => (
  <svg className={className} width="200" height="100" viewBox="0 0 200 100" fill="none">
    <motion.path 
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      d="M 20 50 C 60 90, 140 90, 180 50" 
      stroke="var(--accent-secondary)" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />
  </svg>
);

export const IconImplant = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 10v2a5 5 0 0 0 10 0v-2" />
    <path d="M9 14v4c0 1.1-.9 2-2 2H5" />
    <path d="M15 14v4c0 1.1.9 2 2 2h2" />
    <line x1="12" y1="2" x2="12" y2="10" />
    <line x1="9" y1="6" x2="15" y2="6" />
    <circle cx="12" cy="18" r="1.5" />
  </svg>
);
// Additional custom icons will be added here
