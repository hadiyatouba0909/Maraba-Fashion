import React from "react";
import { Menu, Sun, Moon, ShoppingCart } from 'lucide-react';

const ScrollingText = () => {
  return (
    <div className="overflow-hidden relative w-96">
      <div className="animate-scroll whitespace-nowrap">
        Bienvenue chez Maraba Fashion
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

const Navbar = ({ toggleSidebar, toggleTheme, isDarkMode }) => {
  return (
    <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-pink-800'} p-4 flex justify-between items-center text-white shadow-lg`}>
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-pink-700 rounded-lg transition-colors duration-200"
        >
          <Menu size={24} />
        </button>
        <div className="ml-20 text-xl">
          <ScrollingText />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 hover:bg-pink-700 rounded-lg transition-colors duration-200"
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <div className="relative">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs px-2">
            2
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;