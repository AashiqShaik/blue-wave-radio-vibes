
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (item: string) => {
    if (item === 'Home') {
      navigate('/');
    } else {
      // Navigate to home page and scroll to section
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(item.toLowerCase());
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="w-full py-4 md:py-6 glass mb-6 md:mb-8">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/db980d3d-016d-4b29-97ac-1b6c748c17be.png" 
              alt="Instore Media" 
              className="h-12 md:h-14 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity" 
              onClick={handleLogoClick}
            />
          </div>
          
          <nav className="hidden md:flex items-center">
            <ul className="flex gap-4 lg:gap-6">
              {["Home", "About", "Contact"].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => handleNavigation(item)}
                    className="text-blue-700 hover:text-blue-900 transition-colors text-sm lg:text-base font-medium"
                  >
                    {item}
                  </button>
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
