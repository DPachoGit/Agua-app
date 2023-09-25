import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "./error";
import Register from "./register";
import Login from "./login";
import Logout from "./logout";
import Inicio from "./inicio";
import Home from "./home";
import Comenzar from "./comenzar";
import Info from "./info";

const Router = createBrowserRouter([
    {
        path: "/",
       // element:<Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:"/register",
                element: <Register />
            },
            {
                path:"/login",
                element: <Login />
            },
            {
                path:"/logout",
                element: <Logout />
            },
            {
                path:"/inicio",
                element: <Inicio />
            },
            {
                path:"/home",
                element: <Home />
            },
            {
                path:"/comenzar",
                element: <Comenzar />
            },
            {
                path:"/info",
                element: <Info />
            }
        ]
    },
]);

export default Router; 