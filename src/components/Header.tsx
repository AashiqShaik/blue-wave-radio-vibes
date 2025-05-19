
import React from 'react';
import { cn } from '@/lib/utils';
import { Radio } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between glass mb-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full glow"></div>
        </div>
        <h1 className="text-xl font-bold text-blue-900">Instore Media</h1>
      </div>
      
      <nav className="flex items-center">
        <ul className="hidden md:flex gap-6 mr-6">
          {["Home", "About", "Schedule", "Contact"].map((item) => (
            <li key={item}>
              <a 
                href="#" 
                className="text-blue-700 hover:text-blue-900 transition-colors text-sm font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        
        <a 
          href="https://streamer.radio.co/s0066a9a04/listen" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          <Radio size={16} />
          <span className="font-medium text-sm">HPCL Live</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
