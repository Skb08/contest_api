import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from "./components/Home";
import Today from "./components/Today";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/today" element={<Today/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
