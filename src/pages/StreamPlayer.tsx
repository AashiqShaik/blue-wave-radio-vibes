
import React, { useEffect } from 'react';
import RadioPlayer from '@/components/RadioPlayer';
import Equalizer from '@/components/Equalizer';
import Header from '@/components/Header';

const Index = () => {
  // Direct stream URL for media players
  const STREAM_URL = 'https://streamer.radio.co/s0066a9a04/listen';
  
  useEffect(() => {
    // Check if this is a direct stream request
    const urlParams = new URLSearchParams(window.location.search);
    const isDirect = urlParams.get('direct') === '1';
    
    if (isDirect) {
      // Redirect to the actual stream URL for media players
      window.location.replace(STREAM_URL);
      return;
    }
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background gradient with subtle pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/20 z-[-1]" 
           style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%230066ff" fill-opacity="0.03" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")'}}></div>
      
      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
        <Header />
        
        {/* Main content area */}
        <main className="flex-1 flex flex-col items-center justify-center">
          <div className="max-w-lg w-full">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-blue-900 mb-2">HAPPY STUDIO</h1>
              <p className="text-blue-700">Streaming the best music 24/7</p>
            </div>
            
            <div className="relative">
              {/* Radio player component */}
              <RadioPlayer />
              
              {/* Equalizer visualization */}
              <div className="mt-8 flex justify-center">
                <Equalizer />
              </div>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="mt-auto pt-8 pb-4 text-center text-sm text-blue-600">
          <p>© 2025 Instore Media. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
