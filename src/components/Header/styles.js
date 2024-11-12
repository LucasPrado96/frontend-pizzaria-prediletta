import { Link } from 'react-router-dom';
import Styled from 'styled-components'


export const Container = Styled.div`
background-color:  #1F1F1F;
width: 100%;
height: 70px;
display: flex;
justify-content: space-evenly;


`;





export const ContainerRight = Styled.div`
width: 100%;
display: flex;
align-items: center;
padding: 30px;
margin-left: 20px;

a{
    color: white;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none; 


    &:hover{
        text-decoration: underline; 
    }
}

img{
   width: 50px;
   height: 50px;
}

`

export const ContainerLeft = Styled.div`
display: flex;
align-items: center;
margin-right: 50px;
color: white;

.riscaQueSepara{
    height: 30px;
    width: 1px;
    background-color: white;
    margin: 0 15px;
}

.texts{
    font-size: 13px;
    display: flex;
    margin-right: 30px;
}


`

export const HeaderLink = Styled(Link)`

    cursor: pointer;
    text-decoration: none; 
    color: white;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none; 
    
    &:hover{
        text-decoration: underline; 
    }

`

export const LogoutLink = Styled(Link)`

cursor: pointer;
    text-decoration: none; 
    color: white;
    margin-left: 5px;
    cursor: pointer;
   
    
    &:hover{
        text-decoration: underline; 
    }


`

export const MenuWeb = Styled.div`
width: 100%;
display: flex;
align-items: center;

@media (max-width: 620px){
display: none;
}

`
   
export const MenuResponsivo = Styled.div`
width: 100%;
display: none;
align-items: center;
justify-content: space-between;
padding: 25px;

button{
    background-color: transparent;
    border:none;
}

p{
   color: white;
}

@media (max-width: 620px){
display: flex;
}
`

export const OptionMenu = Styled.div`
display: flex;
flex-direction: column;
height: 250px;
width: 200px;
position: absolute;
top: 70px;
left: -1px;
align-items: center;
background-color: #333333;
border-radius: 5px;




`

export const HeaderLinkResponsivo = Styled(Link)`
    border: 1px solid #737373;
    width: 100%;
    height: 70px;
    cursor: pointer;
    text-decoration: none; 
    color: white;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;



    &:hover{
        background-color:  #737373;
    }

    &:active{
        background-color:  #737373;
    }

`