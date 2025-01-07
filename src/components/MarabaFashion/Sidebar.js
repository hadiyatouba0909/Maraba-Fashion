// src/components/MarabaFashion/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { Home, List, LogOut } from "lucide-react";

const Sidebar = ({ isSidebarOpen, isDarkMode }) => {
  return (
    <div
      className={`${
        isSidebarOpen ? "w-64" : "w-20"
      } ${isDarkMode ? 'bg-gray-800' : 'bg-pink-800'} 
      text-white h-screen flex flex-col transition-all duration-300`}
    >
      <div className="flex items-center justify-center py-4">
        <img
          src="/assets/images/ramatoulaye.webp" // Chemin corrigé
          alt="Logo"
          className={`rounded-full ${
            isSidebarOpen ? "w-16 h-16" : "w-10 h-10"
          } transition-all duration-300`}
        />
      </div>

      <nav className="mt-8">
        <Link
          to="/maraba-fashion"
          className="flex items-center px-6 py-3 text-white hover:bg-pink-700 rounded-xl"
        >
          <Home className="w-5 h-5 mr-3" />
          {isSidebarOpen && <span>Accueil</span>}
        </Link>

        <Link
          to="/categories"
          className="flex items-center px-6 py-3 text-white hover:bg-pink-700 rounded-xl"
        >
          <List className="w-5 h-5 mr-3" />
          {isSidebarOpen && <span>Catégories</span>}
        </Link>

        <Link
          to="/products"
          className="flex items-center px-6 py-3 text-white hover:bg-pink-700 rounded-xl"
        >
          <List className="w-5 h-5 mr-3" />
          {isSidebarOpen && <span>Liste des produits</span>}
        </Link>

        <Link
          to="/login"
          className="flex items-center px-6 py-3 text-white hover:bg-red-500 rounded-xl mt-auto"
        >
          <LogOut className="w-5 h-5 mr-3" />
          {isSidebarOpen && <span>Déconnexion</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
