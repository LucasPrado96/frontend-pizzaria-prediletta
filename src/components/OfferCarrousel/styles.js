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

export const ContainerItens = Styled.div`
background-color: rgba(0, 0, 0, 0.5);
border-radius: 15px;
height: 150px;
width: 380px;
display: flex;
flex-direction: row;


img{
    width: 180px;
    border-radius: 15px;
    max-width: 180px;
    max-height: 100px;
    object-fit: cover;
    display: flex;
    align-items: center;
    padding: 8px;
}



p{
color: white;
font-size: 15px;
border-radius: 10px;
}

`
