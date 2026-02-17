import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CustomCursor from "./utils/CursorAnimation";

export default function App() {
  return (
    <div className="font-sora scroll-smooth overflow-x-hidden">
      <CustomCursor />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}
