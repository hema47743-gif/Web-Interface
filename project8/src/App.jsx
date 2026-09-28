import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";



function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>

      <footer className="main-footer">
        <h3>Hemamalini G</h3>
        <p>
          CSE • Cyber Security • Web Development
        </p>
        <p>
          © 2026 Hemamalini. All rights reserved.
        </p>
      </footer>

    </BrowserRouter>
  );
}

export default App;