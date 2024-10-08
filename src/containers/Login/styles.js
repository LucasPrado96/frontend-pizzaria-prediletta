import Styled from 'styled-components'
import bg1 from '../../assets/bg1.png'
import BgLogin from '../../assets/wallpaper.png'



export const Container = Styled.div`
display: flex;
height: 100vh;   
width: 100vw;
`;

export const Wallpaper = Styled.div`
height: 100%;   
width: 100%;
background-image: url('${BgLogin}');
background-size:cover;
display: flex;
align-items: center;
justify-content: center;

img{
    width: 400px;
    @media (max-width: 860px){
        width: 300px;
    }
}



@media (max-width: 700px){
    display: none;
}

`;

export const LoginScreen = Styled.div`
background-image: url('${bg1}');
background-size: cover;
height: 100%;   
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;


h3{
    color: white;
    font-size: 15px;


    @media (max-width: 700px){
   font-size: 15px;
}

@media (max-width: 700px){
   font-size: 15px;
}

}

.paragrafoFinal{
    color: white;
    font-size: 15px;
   
}

a{
    cursor: pointer;
    text-decoration: none;
    color: white;
    &:hover{
        text-decoration: underline;
    }
}

img{
    width: 150px;
    display: none;
    margin-bottom: 35px;

    
    @media (max-width: 700px){
        display: flex;
    }
}
`;

export const Form = Styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
width: 100%;

`;


export const InputContainer = Styled.div`
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;

p{
    color: white;
   font-size: 13px;
   line-height: 20px;
   height: 15px;
}

`

export const InputLogin = Styled.input`
height: 45px;
width: 350px;
border-radius: 7px;
padding: 8px;
font-size: 18px;
border: none;

@media (max-width: 360px){
   width: 90%;
}
`;

export const H1text = Styled.h1`
color: white;
font-family: "Kanit", sans-serif;
font-size: 30px;
font-weight: 800;
padding: 8px;



span{
    color: #017f11;
    text-shadow: -1px -1px 0  #000;
}

@media (max-width: 1068px){
   font-size: 25px;
}

@media (max-width: 896px){
   font-size: 22px;
}

@media (max-width: 700px){
   font-size: 20px;

}

@media (max-width: 360px){
   font-size: 19px;

}

@media (max-width: 344px){
   font-size: 18px;

}

`;

export const LabelForm = Styled.label`
font-size: 13px;
color: white;
margin-top: 19px

`;

