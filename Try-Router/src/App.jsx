import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./components/NotFound";
import Contact from "./Pages/Contact";
import NavBar from "./components/NavBar";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    
    <BrowserRouter>
     <NavBar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:name" element={<Home/> }/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
        <Route
          path="/dashboard"
          element={<Dashboard/>
          }
          
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
