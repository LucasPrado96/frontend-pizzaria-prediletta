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

`;
export const Categories = Styled.div`
 display: flex;
 justify-content: center;
 gap: 50px;
 margin-top: 10px;
`

export const OptionsProducts  = Styled(Link)`
  font-size: 25px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  text-decoration: none;
`


export const ContainerProducts  = Styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
width: 100%;
padding: 50px;
gap: 25px;
justify-items: center;
margin: 50px auto 0; 

@media (max-width: 1024px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

`