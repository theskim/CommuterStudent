import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, AboutUs, Events, JoinUs, Tips, NavBar } from './components/imports';

function App() {
  return (
    <Router>      
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/join-us" element={<JoinUs/>} />
        <Route path="/tips" element={<Tips/>} />
      </Routes>
    </Router>
  );
}

export default App;
