import Styled from "styled-components";
import CircleIcon from '@mui/icons-material/Circle';

export const Container = Styled.div`
width: 100%;
height: 100%;



img{
    background-size: cover;
    width: 100%;
    height: 320px;
    object-fit: cover;
}
`


export const Banner = Styled.div`
position: relative;

`

export const StyledCircle = Styled(CircleIcon)`
color: ${props => props.$isOpen ? 'green' : 'red'};

`

export const Status = Styled.div`
display: flex;
gap: 10px;
align-items: center;
color: white;
font-weight: 500;
position: absolute; 
top: 50%;
left: 50%;
transform: translate(-50%, -160%); 
padding: 10px;
border-radius: 10px;
height: auto;
background-color: rgba(0, 0, 0, 0.6);

`

export const Logo = Styled.img`
max-width: 200px;
max-height: 200px;
z-index: 99999;

position: absolute; 
top: 50%;
left: 50%;
transform: translate(-50%, -150%); 
width: 80%; 
height: auto;
`

export const Content = Styled.div`

background-size: cover ;
width: 100%;
height: 100%;
`