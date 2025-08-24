
import React from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between glass mb-8">
      <div className="flex items-center gap-2">
        <img src="/lovable-uploads/6ef6640b-5cb7-46ac-bea6-c70609aaf0f4.png" alt="Instore Media" className="w-20 h-20" />
      </div>
      
      <nav className="flex items-center">
        <ul className="flex gap-6">
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
      </nav>
    </header>
  );
};

export default Header;
