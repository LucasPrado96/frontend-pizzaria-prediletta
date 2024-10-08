import { createBrowserRouter } from "react-router-dom";

import { Login } from "../containers/Login";
import { Home } from "../containers/home";
import { Register } from '../containers/Register'


export const Routes = createBrowserRouter([

    {
        path: '/login',
        element: <Login/>,
    },

    {
        path: '/',
        element: <Home/>,
    },

    {
        path: '/register',
        element: <Register/>
    }



])