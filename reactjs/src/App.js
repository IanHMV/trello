import Proyecto from "./components/Proyecto/Proyecto";
import Login from "./components/Login/Login";
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="trello-master">
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Proyecto />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
