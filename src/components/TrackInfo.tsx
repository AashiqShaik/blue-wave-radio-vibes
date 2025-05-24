
import React from 'react';

interface TrackInfoProps {
  title: string;
  artist: string;
}

const TrackInfo = ({ title, artist }: TrackInfoProps) => {
  return (
    <div className="mb-4 text-center">
      <h2 className="text-xl font-bold text-blue-900 tracking-tight truncate">
        {title}
      </h2>
      <p className="text-sm text-blue-700">{artist}</p>
    </div>
  );
};

export default TrackInfo;
