import {ContainerButton } from './styles'
import VectorCart from '../../assets/Vector.png'

export function CartButtom({...props}){


    return(
        <ContainerButton {...props}><img src={VectorCart}/></ContainerButton>
    )
}