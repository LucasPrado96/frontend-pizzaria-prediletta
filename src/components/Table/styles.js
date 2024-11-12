import Styled from 'styled-components'


export const Root = Styled.table`
width: 100%;
background-color: #e6e6e6;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 10px;
border-collapse: collapse;
height: 50px;

@media(max-width: 344px){
    width: 100%;
}

@media( max-width: 390px){
    width: 100%;
    
}

@media(max-width: 539px){
    width: 100%;
}

@media( max-width: 430px){
    width: 100%;
}



@media( max-width: 768px){
    width: 100%;
   
}



`;

export const Header = Styled.thead`


`

export const Tr = Styled.tr`
height: 120px;


`

export const Body = Styled.tbody`

width: 100%;


`

export const Td = Styled.td`
font-size: 14px;
padding: 8px;
line-height: 115%;
font-weight: 500;
border-bottom: 1px solid grey;



@media( max-width: 344px){
    font-size: 10px;
}

@media( max-width: 390px){
    font-size: 11px;
}

@media( max-width: 430px){
    font-size: 11px;
}

@media( max-width: 540px){
    font-size: 11px;
}


@media( max-width: 768px){
    font-size: 15px;
}
`

export const Th = Styled.th`
       
       
       
       
        &:last-child{
            border-top-right-radius:  10px;
        }

        &:first-child{
            border-top-left-radius:  10px;
        }
        
`;
