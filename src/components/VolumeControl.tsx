
import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface VolumeControlProps {
  volume: number;
  isMuted: boolean;
  onToggleMute: () => void;
  onVolumeChange: (volume: number) => void;
}

const VolumeControl = ({ volume, isMuted, onToggleMute, onVolumeChange }: VolumeControlProps) => {
  const handleVolumeChange = (value: number[]) => {
    onVolumeChange(value[0]);
  };

  return (
    <div className="flex items-center space-x-4">
      <Button
        onClick={onToggleMute}
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
  );
};

export default VolumeControl;
