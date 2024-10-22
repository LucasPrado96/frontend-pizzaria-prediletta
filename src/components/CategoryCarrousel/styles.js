import Styled from "styled-components";
import Bg from '../../assets/bg1.png'
import {Link} from 'react-router-dom'


export const Container = Styled.div`
background: url('${Bg}');
width: 100%;
padding: 25px;
height: 100%;


.class-item{
    padding: 20px;
}


`



export const ContainerItens = Styled(Link)`
width: 100%;
height: 160px;
background: url('${(props) => props.image}');
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border: 2px solid black;
background-size: cover;
background-position: center ;
padding: 10px;
border-radius: 15px;
display: flex;
align-items: center;
cursor: pointer;
text-decoration: none;


p{
color: white;
font-size: 26px;
font-weight: 700;
background-color:  rgba(0, 0, 0, 0.7);
padding: 5px;
border-radius: 10px;
margin-top: 80px;

&:hover{
    background-color:  rgba(0, 0, 0, 0.8);
}
}

`
