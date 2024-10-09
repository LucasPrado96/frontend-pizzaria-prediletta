import Styled from "styled-components";
import Bg from '../../assets/bg1.png'



export const Container = Styled.div`
background: url('${Bg}');
width: 100%;
height: 100%;



.class-item{
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content:center ;

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
`


