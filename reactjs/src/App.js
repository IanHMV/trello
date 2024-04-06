import Proyecto from "./components/Proyecto/Proyecto";
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="trello-master">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Proyecto />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
