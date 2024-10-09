import Styled from 'styled-components'


export const Container = Styled.div`
background-color: rgba(0,0,0, 0.5);
padding: 19px;
border-radius: 15px;
width: 450px;
display: flex;
flex-direction: column;


p{
    color: white;
}

strong{
    color: white;
}

`

export const Img = Styled.img`

min-width: 150px;
margin-top: 6px;
max-height: 190px;
border-radius: 15px;
`

export const Box1 = Styled.div`
display: flex;
flex-direction:row;



.div-buttom{
    display: flex;
    flex-direction:column;
    padding: 5px;
    margin-left: 20px;
    width: 100%;
    
}

strong{
    margin-top: 5px;
    font-size: 18px ; 
}

`

export const Box2 = Styled.div`
display: flex;
flex-direction:column;
width: 100%;

p{
    font-size: 13px;
    margin-top: 5px;
  
}
`