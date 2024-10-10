import Styled from 'styled-components'


export const Container = Styled.div`
background-color: rgba(0,0,0, 0.5);
padding: 20px;
border-radius: 15px;
width: 400px;
display: flex;
flex-direction: column;
height: 400px;



p{
    color: white;
    font-size: 13px;
}

strong{
    color: white;
}

@media (max-width: 1200px){
    width: 310px;
}

@media (max-width: 1024px){
    width: 450px;
   
}

@media (max-width: 970px){
    width: 360px;
}

@media (max-width: 785px){
    width: 330px;
}

@media (max-width: 541px){
    width: 448px;
}

@media (max-width: 430px){
    width: 335px;
    min-height: 430px;
  
}

@media (max-width: 414px){
    width: 330px;
}

@media (max-width: 390px){
    width: 310px;
    min-height: 380px;
}


@media (max-width: 375px){
    width: 280px;
    min-height: 350px;
}

@media (max-width: 344px){
    width: 270px;
    height: 430px;
}


`

export const Img = Styled.img`

max-width: 350px;
margin-top: 6px;
max-height: 190px;
border-radius: 10px;


@media (max-width: 1024px){
    max-width: 410px;
    height: 400px;
}

@media (max-width: 541px){
    min-width: 100px;
}


@media (max-width: 430px){
   
    max-width: 290px;
  
}
`

export const Box1 = Styled.div`
display: flex;
flex-direction:column;



.div-buttom{
    display: flex;
    flex-direction:column;
    padding: 5px;
    margin-left: 5px;
    width: 100%;
    justify-content: space-between;
}



p{
    font-size: 20px;

    @media (max-width: 430px){
        font-size: 22px;
  
}

    
}

strong{
    margin-top: 5px;
    font-size: 26px ; 

    @media (max-width: 430px){
        font-size: 25px;
  
    }

}




`

export const Box2 = Styled.div`
display: flex;
flex-direction:column;
width: 100%;
margin-top: 18px;

@media (max-width: 1024px){
        margin-top: 15px;
   
}



p{
    font-size: 15px;
    padding-left: 10px;
  
  

}


`