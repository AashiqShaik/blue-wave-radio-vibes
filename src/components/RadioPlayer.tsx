
import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

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
    const handlePlay = () => {
      console.log("Radio play event triggered");
      setIsPlaying(true);
    };
    
    const handlePause = () => {
      console.log("Radio pause event triggered");
      setIsPlaying(false);
    };
    
    const handleTrackInfo = (e: any) => {
      console.log("Track info received:", e.detail);
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

  const togglePlayPause = () => {
    console.log("Toggle play/pause clicked, current state:", isPlaying);
    if (window.RadioCoPlayer) {
      if (isPlaying) {
        console.log("Pausing radio player");
        window.RadioCoPlayer.pause();
      } else {
        console.log("Playing radio player");
        window.RadioCoPlayer.play();
      }
    } else {
      console.warn("RadioCoPlayer not available yet");
    }
  };

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

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    console.log("Volume changed to:", newVolume);
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
        
        <div className="flex flex-col gap-4">
          <Button 
            onClick={togglePlayPause}
            className="blue-gradient mx-auto w-16 h-16 rounded-full flex items-center justify-center"
            size="icon"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </Button>
          
          <div className="flex items-center space-x-4">
            <Button
              onClick={toggleMute}
              variant="ghost"
              size="icon"
              className="text-blue-700"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </Button>
            
            <Slider
              defaultValue={[volume]}
              max={100}
              step={1}
              onValueChange={handleVolumeChange}
              className="flex-1"
            />
          </div>
          
          <div className="text-xs text-blue-700 font-medium text-center">
            {isPlaying ? 'On Air' : 'Ready to Play'}
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
