
import React, { useState } from 'react';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import PlayButton from '@/components/PlayButton';
import VolumeControl from '@/components/VolumeControl';
import TrackInfo from '@/components/TrackInfo';

const RadioPlayer = () => {
  const [currentTrack] = useState({
    title: "HPCL Live",
    artist: "Live Stream"
  });
  
  const {
    isPlaying,
    isMuted,
    volume,
    togglePlayPause,
    toggleMute,
    handleVolumeChange
  } = useAudioPlayer('https://streamer.radio.co/s0066a9a04/listen', 80);

  return (
    <div className="relative">
      <div className="glass p-6 max-w-md mx-auto">
        <TrackInfo title={currentTrack.title} artist={currentTrack.artist} />
        
        <div className="flex flex-col gap-4">
          <PlayButton isPlaying={isPlaying} onTogglePlayPause={togglePlayPause} />
          
          <VolumeControl 
            volume={volume}
            isMuted={isMuted}
            onToggleMute={toggleMute}
            onVolumeChange={handleVolumeChange}
          />
          
          <div className="text-xs text-blue-700 font-medium text-center">
            {isPlaying ? 'On Air' : 'Ready to Play'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;
