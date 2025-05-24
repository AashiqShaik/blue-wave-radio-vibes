
import React from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PlayButtonProps {
  isPlaying: boolean;
  onTogglePlayPause: () => void;
}

const PlayButton = ({ isPlaying, onTogglePlayPause }: PlayButtonProps) => {
  return (
    <Button 
      onClick={onTogglePlayPause}
      className="blue-gradient mx-auto w-16 h-16 rounded-full flex items-center justify-center"
      size="icon"
    >
      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
    </Button>
  );
};

export default PlayButton;
