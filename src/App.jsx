import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { logo } from "./assets";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link to="/createPost">
          <button className="bg-[#6469ff] px-4 py-2 rounded-md text-white font-inter font-medium">
            Create Post
          </button>
        </Link>
      </header>
      <main className="sm:p-8 px-8 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
