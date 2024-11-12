// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'
import  Header  from "../components/Header";
import paths from "../constants";


function PrivateRoutes({element, isAdmin}){

    const user = localStorage.getItem('prediletta:UserData')

    if(!user){
        return <Navigate to={'/login'} replace/>
    }

  

    if(isAdmin && !JSON.parse(user).admin){
        return <Navigate to={'/'} replace/>
    } else {
        <Navigate to={paths.Order} replace/>
    }

  
   

    return(

        <>
        {!isAdmin && <Header/>}
        {element}
        </>
    )
}

export default PrivateRoutes


PrivateRoutes.propTypes = {
    element: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    isAdmin: PropTypes.bool
   
}