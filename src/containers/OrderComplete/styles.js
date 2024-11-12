import Styled from 'styled-components'
import bgBanner from '../../assets/bg1.png'


export const Container = Styled.div`
width: 100%;
max-width: 1920px;
height: 100vh;
background-color: #f7f7f7;


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


export const Content = Styled.div`
display: flex;
align-items: center;
justify-content: center; 
margin-top: 50px;
padding: 20px;


@media( max-width: 344px){
    width: 100%;
  
}

@media( max-width: 390px){
    width: 100%;
    margin-top: 20px;
}

@media( max-width: 430px){
    width: 100%;
    margin-top: 20px;
}

@media( max-width: 540px){
    width: 100%;
    margin-top: 100px;
}


@media( max-width: 768px){
    width: 100%;
    margin-top: 20px;
}

@media(max-width: 820px){
    width: 100%;
    margin-top: 20px;

}

`
export const Card = Styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
width: 550px;
background-color: #ffff;
height: 400px;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;




h2{
    color: #101211;
    text-align: center;
    margin-top: 10px;
}


p{
    color: #101211;
    text-align: center;
    margin-top: 10px;
    width: 90%;
}

img{
    width: 150px;

}

.status{
    color: #017f11;
    font-weight: 700;
    font-size: 24px;
    padding: 15px;
}
`