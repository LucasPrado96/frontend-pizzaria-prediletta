import Styled from "styled-components";
import Bg from '../../assets/bg1.png'


export const Container = Styled.div`
background: url('${Bg}');
width: 100%;
padding: 20px;

.class-item{
    padding: 20px;
}
`



export const ContainerItens = Styled.div`
width: 100%;
height: 200px;
background: url('${(props) => props.image}');
border: 2px solid black;
background-size: cover;
background-position: center ;
padding: 10px;
border-radius: 15px;
display: flex;
align-items: center;
cursor: pointer;


p{
color: white;
font-size: 23px;
font-weight: 700;
background-color:  rgba(0, 0, 0, 0.7);
padding: 5px;
border-radius: 10px;
margin-top: 120px;

&:hover{
    background-color:  rgba(0, 0, 0, 0.8);
}
}

`
