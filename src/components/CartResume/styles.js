import Styled from 'styled-components'



export const Container = Styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items:center;
gap: 20px;


@media( max-width: 344px){
    width: 100%;
    padding: 19px;
}

@media( max-width: 390px){
    width: 100%;
    padding: 19px;
}

@media( max-width: 540px){
    width: 100%;
    margin-left: 0px;
}

@media( max-width: 768px){
    width: 100%;
   
    margin-top: 20px;
   
}


`

export const ExtraContainer = Styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
width: 400px;
background-color: #e6e6e6;
padding: 10px;


.uWantExtra{
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    padding: 2px;
}

.nameExtra{
    font-size: 15px;
    font-weight: 500;
    text-align: center;
}

.check{
    width: 20px;
    margin: 3px;
}

.options{
    display: flex;
    align-items:center;
    justify-content: center;
    gap: 1px;
    margin-top: 5px;
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
        font-size: 15px;
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