// src/components/Layout/MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';  // Ajout de l'import Outlet
import Navbar from '../MarabaFashion/Navbar';
import Sidebar from '../MarabaFashion/Sidebar';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`flex h-screen ${isDarkMode ? "dark bg-gray-900" : "bg-gray-100"}`}>
      <Sidebar isSidebarOpen={isSidebarOpen} isDarkMode={isDarkMode} />
      <div className="flex-1 flex flex-col">
        <Navbar
          toggleSidebar={toggleSidebar}
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
        />
        <main className="flex-1 overflow-auto">
          <Outlet /> {/* Ajout de l'Outlet ici */}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;