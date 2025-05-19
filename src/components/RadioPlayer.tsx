
import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);
  const [currentTrack, setCurrentTrack] = useState({
    title: "Instore Media",
    artist: "Live Stream"
  });
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Effect to create the audio element and set up audio
  useEffect(() => {
    // Create the audio element with autoplay attribute
    const audio = document.createElement('audio');
    audio.src = 'https://streamer.radio.co/s0066a9a04/listen';
    audio.autoplay = true; // Set autoplay attribute
    audio.preload = 'metadata';
    audioRef.current = audio;
    
    // Set initial volume
    audio.volume = volume / 100;
    
    // Listen for play events
    audio.addEventListener('play', () => {
      console.log("Audio started playing");
      setIsPlaying(true);
    });
    
    // Listen for errors
    audio.addEventListener('error', (e) => {
      console.error("Audio error:", e);
      setIsPlaying(false);
    });
    
    // Clean up on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, []);
  
  // Event listeners for the audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const handlePlay = () => {
      console.log("Audio play event triggered");
      setIsPlaying(true);
    };
    
    const handlePause = () => {
      console.log("Audio pause event triggered");
      setIsPlaying(false);
    };
    
    const handleError = (e: Event) => {
      console.error("Audio error:", e);
      setIsPlaying(false);
    };
    
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);
    
    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlayPause = () => {
    console.log("Toggle play/pause clicked, current state:", isPlaying);
    const audio = audioRef.current;
    
    if (!audio) return;
    
    if (isPlaying) {
      console.log("Pausing audio");
      audio.pause();
    } else {
      console.log("Playing audio");
      audio.play().catch(err => {
        console.error("Error playing audio:", err);
      });
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isMuted) {
      audio.volume = volume / 100;
    } else {
      audio.volume = 0;
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    console.log("Volume changed to:", newVolume);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    
    const audio = audioRef.current;
    if (audio) {
      audio.volume = newVolume / 100;
    }
  };

  return (
    <div className="relative">
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
