import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Importando los componentes
import Proyecto from './components/Proyecto/Proyecto';
import Login from './components/Login/Login';
// Importando los módulos de firebase
import appFirebase from "./credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(appFirebase);

function App() {
  // Estado para manejar la información del usuario
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Escuchando los cambios en el estado de autenticación del usuario
    onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        // Si hay un usuario, actualizar el estado con la información del usuario
        setUsuario(usuarioFirebase);
      } else {
        // Si no hay usuario, establecer el estado como null
        setUsuario(null);
      }
    });
  }, []);

  return (
    <div className="trello-master">
      <BrowserRouter>
        <Routes>
          {/* Redireccionando al usuario según su estado de autenticación */}
          <Route path="/" element={usuario ? <Navigate to="/dashboard" /> : <Login />} />
          
          <Route path="/dashboard" element={usuario ? <Proyecto correoUsuario={usuario.email} /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
