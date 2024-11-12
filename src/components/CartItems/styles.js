import Styled from 'styled-components'



export const QunatityButton = Styled.div`

display: flex;
align-items: center;
justify-content: center;
gap: 8px;


button{
    background-color: white;
    border-radius: 80px;
    padding: 5px;
    font-weight: bold;
    font-size: 13px;
    width: 25px;
    border: none;
    

    &:hover{
        opacity: 0.6;
    }


}

`



export const ProductImage = Styled.img`
    max-width: 100px;
    width: 100px;
    height: 120px;
    object-fit: cover;
    min-width: 50px;
    border-radius: 8px;
    max-height: 100px;

    @media(max-width: 344px){
        width: 70px;
}

    @media(max-width: 375px){
        width: 80px;
}

@media(max-width: 414px){
    width: 80px;
}

    
`

export const EmptyCart = Styled.p`
font-size: 25px;
font-weight: bold;
text-align: center;
margin-top: 10px;

`;

export const Total = Styled.div`
width: 60px;
font-size: 15px;

@media( max-width: 344px){
    font-size: 11px;
    width: 46px;
}

@media( max-width: 390px){
    font-size: 12px;
}

@media( max-width: 414px){
    font-size: 12px;
}

`

export const NamePrice = Styled.div`
display: flex;
flex-direction: column;
gap: 2px;

`


export const Price = Styled.div`

font-size: 15px;

@media( max-width: 344px){
    font-size: 11px;
}



@media( max-width: 390px){
    font-size: 11px;
}

@media( max-width: 430px){
    font-size: 11px;
}

`


export const Name = Styled.div`

font-size: 16px;

@media( max-width: 344px){
    font-size: 11px;
}

@media( max-width: 390px){
    font-size: 12px;
}

@media( max-width: 430px){
    font-size: 11px;
}

`