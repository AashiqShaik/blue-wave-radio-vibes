
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Equalizer = ({ className }: { className?: string }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Listen for play/pause events from the Radio.co player
    const handlePlay = () => setIsAnimating(true);
    const handlePause = () => setIsAnimating(false);
    
    window.addEventListener('radio.play', handlePlay);
    window.addEventListener('radio.pause', handlePause);
    
    // Default to animating
    setIsAnimating(true);
    
    return () => {
      window.removeEventListener('radio.play', handlePlay);
      window.removeEventListener('radio.pause', handlePause);
    };
  }, []);
  
  // Create array of 5 bars
  const bars = Array(5).fill(0);
  
  return (
    <div className={cn("flex items-end justify-center h-16 gap-1", className)}>
      {bars.map((_, i) => (
        <div 
          key={i}
          className={cn(
            "w-1.5 bg-blue-500 rounded-t-sm transition-all",
            isAnimating ? "animate-pulse" : "opacity-30"
          )}
          style={{
            height: isAnimating ? `${20 + Math.random() * 60}%` : '20%',
            animationDelay: `${i * 0.1}s`,
            animationDuration: `${0.7 + Math.random() * 0.6}s`
          }}
        />
      ))}
    </div>
  );
};

export default Equalizer;
