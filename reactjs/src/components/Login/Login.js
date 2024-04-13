/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import img from '../img/imgLogin.png'
import img2 from '../img/img.png'
import appFirebase from '../../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './Login.scss'

const auth = getAuth(appFirebase);

const Login = () =>{

    const [registrando, setRegistrando] = useState(false);

    const funcionAutenticacion = async(e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contrasena = e.target.password.value;
        console.log(correo);

        try {
            if (registrando) {
                try {
                    await createUserWithEmailAndPassword(auth, correo, contrasena);
                } catch (error) {
                    alert("Asegurarse que la contrasena tenga mas de 8 caracteres");
                }
            } else {
                await signInWithEmailAndPassword(auth, correo, contrasena);
            }
        } catch (error) {
            alert("El correo o la contrasena son incorrectas ");
        }
    }

    return(
        <div className="container">
            <div className="row">
                {/* columna mas pequena para el formulario */}
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img src={img2} alt="" className="estilo-profile"/>
                            <form onSubmit={funcionAutenticacion}>
                                <input type="text" id="email" placeholder="Ingresar email" className="cajatexto"/>
                                <input type="password" id="password" placeholder="Ingresar contrasena" className="cajatexto"/>
                                <button className="btnform">{registrando ? "Registrate" : "Iniciar Sesion"}</button>
                            </form>
                            <h4 className="texto">{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}<button className="btnswitch" onClick={() => setRegistrando(!registrando)}>{registrando ? "Inicia Sesion" : "Registrate"}</button></h4>
                        </div>
                    </div>
                </div>

                {/* Columna mas grande */}
                <div className="col-md-8">
                    <img src={img} alt="" className="tamano-imagen" />
                </div>
            </div>
        </div>
    );
}

export default Login;