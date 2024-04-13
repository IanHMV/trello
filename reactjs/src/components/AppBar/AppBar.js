import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import appFirebase from "../../credenciales";
import './AppBar.scss';

import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);

const AppBar = () => {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            {/* <a className="navbar-brand" href="#">Mi Aplicación</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    {location.pathname === "/dashboard" && (
                        <li className="nav-item">
                            <button className="btn btn-primary" onClick={() => signOut(auth)}> Logout </button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default AppBar;
