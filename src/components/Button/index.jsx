/* eslint-disable no-unused-vars */
import React from 'react'
import { ContainerButton } from './styles'
import PropTypes from 'prop-types'


export function Button({ children, ...props }) {

    return (
        <ContainerButton  {...props}>{children}</ContainerButton>
       
    )
   
}

Button.propTypes = {
    children: PropTypes.string,
}