import Styled from 'styled-components'
import ReactSelect from 'react-select'


export const Container = Styled.div`
margin-right: 40px;
width: 100%;
padding: 30px;

`


export const ImgOrder = Styled.img`
width: 100px;
border-radius: 5px;


`

export const StyledReactSelect = Styled(ReactSelect)`
width: 150px;


.css-13cymwt-control{
    cursor: pointer; 
}
`

export const MenuStatus = Styled.div`
display: flex;
justify-content: center; 
gap: 35px;


padding: 5px;
align-items: center;
`

export const LinkMenu = Styled.a`
text-align: center;
font-size: 20px;
margin-bottom: 15px;
cursor: pointer;
text-decoration: ${props => props.$isActive ? 'underline': 'none' };
font-weight: ${props => props.$isActive ? 'bold' : '400'};



`