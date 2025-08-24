
import React from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header className="w-full py-4 md:py-6 glass mb-6 md:mb-8">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/db980d3d-016d-4b29-97ac-1b6c748c17be.png" alt="Instore Media" className="h-12 md:h-14 w-auto object-contain" />
          </div>
          
          <nav className="hidden md:flex items-center">
            <ul className="flex gap-4 lg:gap-6">
              {["Home", "About", "Schedule", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-blue-700 hover:text-blue-900 transition-colors text-sm lg:text-base font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile menu placeholder */}
          <div className="md:hidden">
            <button className="text-blue-700 hover:text-blue-900 transition-colors text-sm font-medium">
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
