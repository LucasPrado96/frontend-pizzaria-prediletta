import { createBrowserRouter } from "react-router-dom";

import { Login } from "../containers/Login";
import { Home } from "../containers/home";
import { Register } from '../containers/Register'
import { Products} from '../containers/Products'
import { Cart } from "../containers/Cart";
import {Checkout} from '../containers/Checkout'
import {Finished} from '../containers/OrderComplete'
import { AdmScreem } from "../containers/Admin";
import PrivateRoutes from "./privateRoutes";

import paths from "../constants/index";

export const Routes = createBrowserRouter([

    {
        path: '/login',
        element: <Login/>,
    },

    {
        path: '/',
        element:<PrivateRoutes element={<Home/>}/>,
    },

    {
        path: '/register',
        element: <Register/>,
    },

    {
        path: '/products',
        element: <PrivateRoutes element={<Products/>}/>,
    },

    {
        path: '/carrinho',
        element:  <PrivateRoutes element={<Cart/>}/>,
    },

    {
        path: '/checkout',
        element: <PrivateRoutes element={<Checkout/>}/>,
    },
    
    {
        path: '/finalizado',
        element: <PrivateRoutes element={<Finished/>}/>,
    },


    {
        path: paths.Order,
        element: <PrivateRoutes element={<AdmScreem/>} isAdmin={true}/>,
    }, 

    
    {
        path: paths.Products,
        element: <PrivateRoutes element={<AdmScreem/>} isAdmin={true}/>,
    },

    {
        path: paths.NewProduct,
        element: <PrivateRoutes element={<AdmScreem/>} isAdmin={true}/>,
    },

    {
        path: paths.EditProduct,
        element: <PrivateRoutes element={<AdmScreem/>} isAdmin={true}/>,
    }


])