"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedSoundwave() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // We want to create ~10 lines that pinch in the center (x=500) and flare out on the sides.
  const lines = Array.from({ length: 12 });

  return (
    <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center overflow-hidden">
      <svg 
        className="w-[120%] h-full opacity-70 mix-blend-screen" 
        viewBox="0 0 1000 400" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="15%" stopColor="rgba(255,255,255,1)" />
            <stop offset="50%" stopColor="rgba(34,197,94,0.8)" /> {/* Golf green center focus */}
            <stop offset="85%" stopColor="rgba(255,255,255,1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {lines.map((_, i) => {
          // Calculate extreme amplitudes for the outsides and tight amplitudes for the center pinch
          // We use Framer Motion to morph between two mirrored paths
          
          const spread = (i - 5.5) * 8; // distance from center line
          const maxAmplitude = spread * 3; // flare on the left/right
          const minAmplitude = spread * 0.2; // pinch in the exact center

          // Path A: Sine wave cresting up
          const pathA = `M 0 ${200 + maxAmplitude} 
                         C 250 ${200 - maxAmplitude*1.5}, 400 ${200 + minAmplitude}, 500 ${200 + minAmplitude} 
                         C 600 ${200 + minAmplitude}, 750 ${200 + maxAmplitude*1.5}, 1000 ${200 - maxAmplitude}`;
                         
          // Path B: Sine wave cresting down (inverts the wave)
          const pathB = `M 0 ${200 - maxAmplitude} 
                         C 250 ${200 + maxAmplitude*1.5}, 400 ${200 - minAmplitude}, 500 ${200 - minAmplitude} 
                         C 600 ${200 - minAmplitude}, 750 ${200 - maxAmplitude*1.5}, 1000 ${200 + maxAmplitude}`;

          return (
            <motion.path
              key={i}
              d={pathA}
              animate={{ d: [pathA, pathB, pathA] }}
              transition={{
                duration: 6 + (i % 3), // slight phase variations
                ease: "easeInOut",
                repeat: Infinity,
                delay: i * 0.1
              }}
              stroke="url(#wave-gradient)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    </div>
  );
}
