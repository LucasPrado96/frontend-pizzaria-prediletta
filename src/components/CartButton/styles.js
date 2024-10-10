import Styled from "styled-components";

export const ContainerButton = Styled.button`
height: 35px;
width: 330px;
border-radius: 7px;
padding: 5px;
border: none;
color: white;
margin-top: 8px;
background-color: #017f11;


img{
    max-width: 25px;
    max-height: 25px;
    object-fit: contain;
  
   
}

&:hover{
    background-color: #006600;
}

&:active{
    opacity: 0.6;
}

@media (max-width: 1200px){
    width: 100px;
}

@media (max-width: 1024px){
    width: 395px;
}

@media (max-width: 912px){
    width: 305px;
}

@media (max-width: 820px){
    width: 300px;
}

@media (max-width: 768px){
    width: 280px;
}


@media (max-width: 541px){
    width: 390px;
}

@media (max-width: 430px){
    width: 275px;
}

@media (max-width: 414px){
    width: 270px;
}

@media (max-width: 390px){
    width: 255px;
    
}

@media (max-width: 375px){
    width: 225px;
}

@media (max-width: 344px){
    width: 215px;
   
}


`