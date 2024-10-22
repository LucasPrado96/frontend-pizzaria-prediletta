import { Container, Header, ContainerTop, ContainerBottom, Main, ExtraContainer } from './styles'
import {Button} from '../Button'
import { formatedPrice } from '../../utils/formatPrice'
import { useCart } from '../../hooks/CartContext'
import {api} from '../../services/api'
import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'
import { useState } from 'react'




function CartResume() {

const { cartItems, clearCart } = useCart()
const [borda, setBorda] = useState('')
const [bordaValor, setBordaValor] = useState(0)



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

async function submitOrder(){
  const products = cartItems.map(prod => {
    return {
        id: prod.id, 
        quantity: prod.quantity, 
        borda,
        } 
  })

  try {
    const { status } = await api.post('/orders', {products},
        {
            validateStatus: () => true,
        },

    )
    if (status === 201 || status === 200) {
        toast.success('Seu pedido foi Enviado com sucesso')
        clearCart()
    } else if (status === 400) {
        toast.error('Algo deu errado, tente novamente')
        
    } else {
        throw new Error();
    }
 
// eslint-disable-next-line no-unused-vars
} catch (err) {
    toast.error('Falha no pedido')
  
}


    
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
            
            <Button onClick={submitOrder}>Continuar</Button>
        </Container>
    )
}

export default CartResume