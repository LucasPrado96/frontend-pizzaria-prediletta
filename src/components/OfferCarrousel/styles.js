import Styled from "styled-components";
import Bg from '../../assets/bg1.png'



export const Container = Styled.div`
background: url('${Bg}');
background-size: cover ;
background-position: center;
background-repeat: no-repeat;
width: 100%;
min-height: 100vh; 
padding: 25px;
overflow: hidden;


.class-item{
    padding: 20px;
    
    
}
`



export const TextOffers = Styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
p{
  
}
`

export const Title = Styled.h2`
color: white;
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
font-size: 35px;
`


