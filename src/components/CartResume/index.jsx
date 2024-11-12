import { Container, Header, ContainerTop, ContainerBottom, Main, ExtraContainer } from './styles'
import {Button} from '../Button'
import { formatedPrice } from '../../utils/formatPrice'
import { useCart } from '../../hooks/CartContext'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'




function CartResume() {

const { cartItems } = useCart()
const [borda, setBorda] = useState('')
const [bordaValor, setBordaValor] = useState(0)

const navigate = useNavigate()


const somaTotal = cartItems.map((itens) => {
   return itens.quantity * itens.price
   
}).reduce((acc, currentValue) =>{
    return acc + currentValue
}, 0);


function handleExtraChecked(e){
    const {value, checked} = e.target;
   
    if(checked){
        setBorda(value);

            if(value === 'Catupiry'){
                setBordaValor(5)
            } else if( value === 'Cheddar') {
                setBordaValor(5)
            } 
        } else {
            setBorda('')
            setBordaValor(0)
        } 
}

function goToCheckOut(){
 
    navigate( '/checkout', {   
        state: {cartItems, somaTotal, borda, bordaValor }
    })
  


}

    return (
        <Container>
                <ExtraContainer>
                    <p className='uWantExtra'>Deseja borda recheada por R$: 5,00?</p>

                    <div className='options'>
                        <input  className='check' type='checkbox' 
                        name='Catupiry' 
                        value='Catupiry'
                        checked={borda === 'Catupiry'} 
                        onChange={handleExtraChecked}></input>

                     <label className='nameExtra'>Catupiry</label>
                  

                   
                        <input className='check' type='checkbox' 
                        name='Cheddar' 
                        value='Cheddar'
                        checked={borda === 'Cheddar'}
                        onChange={handleExtraChecked}></input>

                       <label className='nameExtra'> Cheddar </label>
                     </div>
                </ExtraContainer>
            <Main>
            <Header>
                <p>Resumo do Pedido</p>
            </Header>

            <ContainerTop>
               <div className='texts'>
                    <p>Itens</p>
                    <strong>{formatedPrice(somaTotal)}</strong>
                </div> 

                <div className='texts'>
                    <p>Acréscimo Borda </p>
                    <strong>{formatedPrice(bordaValor)}</strong>
                </div> 

                <div className='texts'>
                    <p>Taxa de entrega </p>
                    <strong>{formatedPrice(5)}</strong>
                </div> 
               
                
            </ContainerTop>

            <ContainerBottom>

                <div className='texts'>
                    <strong>Total</strong>
                    <strong>{formatedPrice(somaTotal + bordaValor + 5)}</strong>
                </div> 
               
            </ContainerBottom>

            </Main>  
            
            <Button onClick={goToCheckOut}>Continuar</Button>
        </Container>
    )
}

export default CartResume