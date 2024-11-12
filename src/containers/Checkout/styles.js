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
grid-template-columns: 1fr 35%;
grid-gap: 50px;
padding: 35px;


.resumofinal{
    display: flex;
    align-items: center;
    flex-direction: column;
}

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


/******* cartresume final */

export const Main = Styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
width: 400px;
background-color: #e6e6e6;
height: 240px;
border-radius: 10px;

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


export const Header = Styled.div`
  

    p{
        color: black;
        font-size: 18px;
        padding: 8px;
        font-weight: 700;
        text-align: center;
    }

`

export const ContainerBottom = Styled.div`
    padding: 10px;
    font-size: 25px;
    margin-top: 50px;
    


    p{

    }

.texts{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

`

export const ContainerTop = Styled.div`
  padding: 10px;

  p{
    margin-top: 2px;
   
  }


.texts{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
}
`
/*////////endereço*////////////

export const Form = Styled.form`
width: 100%;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
background-color: #e6e6e6;
height: 350px;
border-radius: 10px;



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


export const InputContainer = Styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;


p{

}
`;


export const InputLogin = Styled.input`
height: 35px;
width: 80%;
border-radius: 7px;
padding: 8px;
font-size: 16px;
border: none;
margin-top: 20px;

`;



export const H3 = Styled.h3`
text-align:center;
padding: 10px;
`


/*////////metodo de pagamento*////////////


export const Formadepagamento = Styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
width: 100%;
background-color: #e6e6e6;
padding: 10px;
margin-top: 20px;



.payment{
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    padding: 5px;
    margin-bottom: 5px ;
}

.metodopay{
    font-size: 16px;
    font-weight: 500;
   margin-left: 10px;

}

.check{
    margin-right: 8px;
    
}

.options{
    display: grid;
    grid-gap: 15px;
    
 
   
}




@media( max-width: 344px){
    width: 100%;
  
}

@media( max-width: 390px){
    width: 100%;
 
}

@media( max-width: 540px){
    width: 100%;

}

@media( max-width: 768px){
    width: 100%;
   
  
   
}
`