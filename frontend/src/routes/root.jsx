import { Outlet,Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoggedInContext from "../context/loggedInContext";

import '../styles/Navbar.scss';


const Root = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect( () => {
        console.log("isLoggedIn",isLoggedIn)
    },[isLoggedIn]);
    
    return (
        <LoggedInContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        <header>
            <nav>
                
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    {!isLoggedIn ?
                    <>
                        <li><Link to="/register">Registrarse</Link></li>
                        <li><Link to="/login">Iniciar sesión</Link></li>
                    </>
                    :
                    <li><Link to="/logout">Cerrar sesión</Link></li>
                    }
                </ul>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        </LoggedInContext.Provider>
    );
};

export default Root;