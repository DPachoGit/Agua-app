import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "./error";
import Register from "./register";
import Login from "./login";
import Logout from "./logout";

const Router = createBrowserRouter([
    {
        path: "/",
        element:<Root />,
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
            }
        ]
    },
]);

export default Router;