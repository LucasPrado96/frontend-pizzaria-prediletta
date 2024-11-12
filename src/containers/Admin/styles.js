import Styled from 'styled-components'
import bgBanner from '../../assets/bg1.png'


export const Container = Styled.div`
width: 100%;
max-width: 1920px;
height: 100%;
background-color: #e6e6e6;

img{
    width: 90px;
    margin-top: 10px;
}
`

export const Banner = Styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-image: url('${bgBanner}');
padding: 10px;

img{
    width: 80px;
    
}
`


export const Tittle = Styled.h2`
text-align: center;
padding: 10px;
font-size: 20px;
font-weight: 900;
color: white;

@media( max-width: 375px){
    font-size: 20px;

}
`

export const Content = Styled.div`


width: 100%;
justify-content: space-between;



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

export const ContainerMenu = Styled.div`
display: flex;

width: 100%;
justify-content: space-between;
`