
import { useRef, useState, useEffect } from 'react';

export const useAudioPlayer = (streamUrl: string, initialVolume: number = 80) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(initialVolume);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Effect to create the audio element and set up audio
  useEffect(() => {
    // Create the audio element
    const audio = new Audio();
    audio.src = streamUrl;
    audio.crossOrigin = 'anonymous';
    audio.preload = 'auto';
    audioRef.current = audio;
    
    // Set initial volume
    audio.volume = volume / 100;
    
    // Listen for events
    const handlePlay = () => {
      console.log("Audio started playing");
      setIsPlaying(true);
    };
    
    const handlePause = () => {
      console.log("Audio paused");
      setIsPlaying(false);
    };
    
    const handleError = (e: Event) => {
      console.error("Audio error:", e);
      setIsPlaying(false);
    };
    
    const handleCanPlay = () => {
      console.log("Audio can play - attempting to start");
      audio.play().catch(err => {
        console.error("Play failed:", err);
        setIsPlaying(false);
      });
    };
    
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);
    audio.addEventListener('canplay', handleCanPlay);
    
    // Force load and play
    audio.load();
    
    // Also try immediate play
    setTimeout(() => {
      console.log("Attempting immediate play");
      audio.play().then(() => {
        console.log("Immediate play successful");
      }).catch(err => {
        console.error("Immediate play failed:", err);
      });
    }, 100);
    
    // Clean up on unmount
    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplay', handleCanPlay);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, [streamUrl]);
  
  // Handle play state changes for equalizer
  useEffect(() => {
    if (isPlaying) {
      window.dispatchEvent(new Event('radio.play'));
    } else {
      window.dispatchEvent(new Event('radio.pause'));
    }
  }, [isPlaying]);

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

  const handleVolumeChange = (newVolume: number) => {
    console.log("Volume changed to:", newVolume);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    
    const audio = audioRef.current;
    if (audio) {
      audio.volume = newVolume / 100;
    }
  };

  return {
    isPlaying,
    isMuted,
    volume,
    togglePlayPause,
    toggleMute,
    handleVolumeChange
  };
};
