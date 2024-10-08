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

export const FormLogin = Styled.div`
background-image: url('${bg1}');
height: 100%;   
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;



h3{
    color: white;
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



`;


export const Form = Styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
width: 100%;
`

export const InputContainer = Styled.div`
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;

.inputPhone{
    height: 35px;
width: 350px;
border-radius: 7px;
padding: 8px;
font-size: 18px;
border: none;

@media (max-width: 360px){
   width: 90%;
}
}

p{
    color: white;
    line-height: 10px;
    height: 10px;
    font-size: 12px;
    margin-top: 8px;
}
`;

export const InputLogin = Styled.input`
height: 35px;
width: 350px;
border-radius: 7px;
padding: 8px;
font-size: 16px;
border: none;




@media (max-width: 360px){
   width: 90%;
}
`;

export const H1text = Styled.h1`
color: white;
font-family: "Kanit", sans-serif;
font-size: 25px;
font-weight: 700;
padding: 5px;

`;

export const LabelForm = Styled.label`
font-size: 15px;
color: white;
margin-top: 9px

`;

