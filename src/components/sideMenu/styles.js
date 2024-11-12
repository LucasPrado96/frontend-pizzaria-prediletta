import { Link } from 'react-router-dom'
import Styled from 'styled-components'



export const Container = Styled.div`
background-color: #3c3d3d;
width: 300px;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

p{
    color: white;
    font-weight: 600;
    padding: 10px;
    margin-top: 10px;
}

`

export const ContainerOption = Styled.div`
display: flex;
gap: 5px;
justify-content: start;
margin-top: 30px;
background-color: ${props => props.$isActive ? '#5d5e5e' : 'transparent'};
padding: 15px;
cursor: pointer;
width: 85%;
border-radius: 5px;
align-items: center;

.icon{
fill: white;
}
`


export const LinkOption = Styled(Link)`
color: white;
text-decoration: none; 
font-size: 15px;
font-weight: 600;

`

export const Button = Styled.button`
width: 85%;
margin-top: 180px;
display: flex;
border-radius: 5px;
align-items: center;
cursor: pointer;
border: none;
justify-content: center;
padding: 5px;
transition: 200ms;
font-weight: 600;

&:hover{

    background-color: #017f11;
    color: white;
}

&:active{

    opacity: 0.6;
}
`