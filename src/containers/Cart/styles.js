import Styled from 'styled-components'
import bgBanner from '../../assets/bg1.png'


export const Container = Styled.div`
width: 100%;
max-width: 1920px;
height: 100vh;
`

export const Banner = Styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-image: url('${bgBanner}');
padding: 10px;

img{
    width: 110px;
    
}
`


export const Tittle = Styled.h2`
text-align: center;
padding: 10px;
font-size: 28px;
font-weight: 900;
color: #017f11;

@media( max-width: 375px){
    font-size: 20px;

}
`

export const Content = Styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 5px;
padding: 35px;


@media(max-width: 344px){
    width: 100%;
    
    display: flex;
    flex-direction: column;
    
}


@media(max-width: 390px){
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    
}


@media(max-width: 430px){
display: flex;
flex-direction: column;
width: 100%;

}

@media(max-width: 540px){
display: flex;
flex-direction: column;
width: 100%;
}

@media(max-width: 768px){
display: flex;
flex-direction: column;
width: 100%;

}

@media(max-width: 820px){
display: flex;
flex-direction: column;
width: 100%;

}


`