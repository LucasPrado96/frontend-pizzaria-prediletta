import Styled from 'styled-components'
import bgred from '../../assets/bg1.png'
import { Link } from 'react-router-dom';


export const Container = Styled.div`
width:100%;
min-height: 100vh;
background-image: url('${bgred}');
background-size:cover;
object-fit: contain;
img{
  
    width: 100%;
    height: 280px;
    object-fit: cover; 
    
}

@media (max-width: 375px){
  width:100%;
}





`;
export const Categories = Styled.div`
 display: flex;
 justify-content: center;
 gap: 50px;

 margin-top: 10px;

 @media (max-width: 375px){
  gap: 30px;
  
}

@media (max-width: 412px){
  gap: 25px;
}

@media (max-width: 540px){
 
}


`

export const OptionsProducts  = Styled(Link)`
  font-size: 25px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  text-decoration: ${(props) => props.$isActiveCategory ?  "underline" : "none"};
  line-height: 50px;





  @media (max-width: 540px){
  font-size: 18px;
}

@media (max-width: 414px){
  font-size: 15px;
}

@media (max-width: 430px){
  font-size: 15px;
}


@media (max-width: 375px){
  font-size: 15px;
}

@media (max-width: 370px){
  font-size: 14px;
}


`


export const ContainerProducts  = Styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding: 20px;
gap: 50px;


@media (max-width: 344px){
  padding: 35px;
}

img{
  width: 170px;
  height: 170px;
  border-radius: 10px;

  @media(max-width: 735px){
    width: 100%;
    height: 200px;
    
}
}


.allElements{
  display: flex;
  background-color: rgba(0,0,0, 0.5);
  padding: 20px;
  border-radius: 10px;
  justify-content: center;
  border: 1px solid white;
 
  

  @media(max-width: 735px){
    display: block;
    flex-direction: row;
  }

}

.textsDoContainer{
  width: 100%;
  padding: 10px;
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
 

  
  @media(max-width: 735px){
   width: 100%;
    
    
  }


  strong{
    font-size: 19px;
    
  }

  p{
    font-size: 13px;
    margin-top: 10px;
  }
}
`;
export const Buttom = Styled.button`
height: 35px;
width: 50%;
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


  
@media(max-width: 735px){
   width: 100%;
    
    
  }

`