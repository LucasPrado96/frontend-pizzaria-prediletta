import Styled from 'styled-components'
import ReactSelect from 'react-select'


export const Container = Styled.div`
width: 100%;

display: flex;

align-items: center;
justify-content: center;
flex-direction: column;

h2{
    font-size: 20px;
    margin-top: 10px;
    font-family: "Kanit", sans-serif;
}

`
export const Form = Styled.form`
margin-top: 10px;
width: 420px;
height: 560px;
display: flex;

flex-direction: column;
align-items: center;
justify-content: center;
background-color: #3c3d3d;
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
gap: 2px;

textarea{
    width: 80%;
    height: 70px;
    padding: 8px;
    margin-top: 10px;
}

p{

}


.offer{
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
}
`

export const Label = Styled.p`
color: white;
font-size: 13px;
padding: 3px;
`

export const Erros = Styled.p`
color: white;
font-size: 12px;
line-height: 10px;
height: 15px;
margin-top: 5px;

`

export const InputText = Styled.input`
width: 80%;
height: 30px;
padding: 8px;
border-radius: 2px;
border: none;
margin-top: 5px;

&:first-child{
    margin-top: 30px;

}
`


export const InputImg = Styled.input`

`


export const InputOffer = Styled.input`
cursor: pointer;
margin-left: 6px ;

`
export const SelectStyled = Styled(ReactSelect)`
width: 80%;
margin-top: 20px;
`

export const LabelUpLoad = Styled.label`
width: 80%;
border: 1px dashed grey;
height: 100px;
overflow: hidden;

cursor: pointer;
color: white;
font-size: 12px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 25px;

&:hover{
    border: 1px dashed white;
}

input{
    opacity: 0;
    width: 1px;
}
`