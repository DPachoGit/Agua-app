import { Outlet, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import LoggedInContext from "../context/loggedInContext";

//Este componente root si usa el contexto directamente si se usa como componente padre, en caso contrario no sirve por ahora la lectura del contexto logeedin
// en los componentes hijo, se usa para ver el inicio de secion mediante loggedin del local storage que se carga al iniciar secio y se pierde al cerrar o pasar el tiempo estipulado de la sesion

const Root = () => {
   // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);

    useEffect(() => {
        console.log("isLoggedIn", isLoggedIn)
    }, [isLoggedIn]);

    return (
        <>
            <header>
                <nav>

                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/register">Registrarse</Link></li>
                        <li><Link to="/login">Iniciar sesión</Link></li>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/logout">Cerrar sesión</Link></li>
                        <li><Link to="/inicio">Inicio</Link></li>
                        {!isLoggedIn ?
                            <>
                                <h1>no tienes sesion iniciada ROOT</h1>
                            </>
                            :
                            <>
                            <li><Link to="/logout">Cerrar sesión</Link></li>
                            <h1>hola </h1>
                            </>
                        }
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Root;