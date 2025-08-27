import React, { useEffect } from 'react';

const DirectStream = () => {
  useEffect(() => {
    // Immediately redirect to the actual stream URL
    window.location.replace('https://streamer.radio.co/s0066a9a04/listen');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-blue-700/20">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-blue-700">Redirecting to stream...</p>
      </div>
    </div>
  );
};

export default DirectStream;