import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white dark:bg-gray-800 text-black dark:text-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] dark:border-b-gray-700">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <div className="flex items-center">
          <button 
            onClick={toggleDarkMode} 
            className="mr-4 bg-[#6469ff] px-4 py-2 rounded-md text-white font-inter font-medium"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <Link to="/create-post">
            <button className="bg-[#6469ff] px-4 py-2 rounded-md text-white font-inter font-medium">Create Post</button>
          </Link>
        </div>
      </header>
      <main className="sm:p-8 px-8 py-8 w-full bg-[#f9fafe] dark:bg-gray-900 text-black dark:text-white min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
