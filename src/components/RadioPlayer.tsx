
import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);
  const [currentTrack, setCurrentTrack] = useState({
    title: "Loading...",
    artist: "Please wait"
  });
  const playerContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create the script element for the Radio.co player
    const script = document.createElement('script');
    script.src = "https://embed.radio.co/player/242436a.js";
    script.async = true;
    
    // Append the script to the player container
    if (playerContainerRef.current) {
      playerContainerRef.current.appendChild(script);
    }
    
    // Clean up function to remove the script when component unmounts
    return () => {
      if (playerContainerRef.current) {
        const scriptElement = playerContainerRef.current.querySelector('script');
        if (scriptElement) {
          playerContainerRef.current.removeChild(scriptElement);
        }
      }
    };
  }, []);

  // Listen for custom events from Radio.co player
  useEffect(() => {
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTrackInfo = (e: any) => {
      if (e.detail) {
        setCurrentTrack({
          title: e.detail.title || "Unknown Track",
          artist: e.detail.artist || "Unknown Artist"
        });
      }
    };

    window.addEventListener('radio.play', handlePlay);
    window.addEventListener('radio.pause', handlePause);
    window.addEventListener('radio.track-info', handleTrackInfo);

    return () => {
      window.removeEventListener('radio.play', handlePlay);
      window.removeEventListener('radio.pause', handlePause);
      window.removeEventListener('radio.track-info', handleTrackInfo);
    };
  }, []);

  const toggleMute = () => {
    if (window.RadioCoPlayer) {
      if (isMuted) {
        window.RadioCoPlayer.setVolume(volume / 100);
      } else {
        window.RadioCoPlayer.setVolume(0);
      }
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    
    if (window.RadioCoPlayer) {
      window.RadioCoPlayer.setVolume(newVolume / 100);
    }
  };

  return (
    <div className="relative">
      {/* Hidden player container */}
      <div ref={playerContainerRef} className="hidden"></div>
      
      {/* Custom player UI */}
      <div className="glass p-6 max-w-md mx-auto">
        <div className="mb-4 text-center">
          <h2 className="text-xl font-bold text-blue-900 tracking-tight truncate">
            {currentTrack.title}
          </h2>
          <p className="text-sm text-blue-700">{currentTrack.artist}</p>
        </div>
        
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleMute}
              className="p-2 rounded-full blue-gradient text-white hover:opacity-90 transition-opacity"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-2 accent-blue-500"
            />
          </div>
          
          <div className="text-xs text-blue-700 font-medium">
            {isPlaying ? 'On Air' : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;

// TypeScript global window interface extension
declare global {
  interface Window {
    RadioCoPlayer?: {
      play: () => void;
      pause: () => void;
      setVolume: (volume: number) => void;
    };
  }
}
