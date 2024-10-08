import Styled from 'styled-components'


export const ContainerButton = Styled.button`

height: 50px;
width: 350px;
border-radius: 7px;
padding: 8px;
font-size: 18px;
border: none;
color: white;
margin: 30px;
font-family: "Kanit", sans-serif;
font-size: 22px;
font-weight: 600;
background-color: #017f11;

&:hover{
    background-color: #006600;
}

&:active{
    opacity: 0.6;
}


@media (max-width: 360px){
   width: 80%;
}
`