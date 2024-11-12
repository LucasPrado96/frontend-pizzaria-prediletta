import { Container, Banner, Tittle, Content, Header, ContainerTop, ContainerBottom, Main, Form, InputContainer, InputLogin,  H3, Formadepagamento } from './styles'
import Logo from '../../assets/logo.png'


import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'
import { formatedPrice } from '../../utils/formatPrice'
import {Button} from '../../components/Button'
import { useState } from 'react'
import { useCart } from '../../hooks/CartContext'


export function Checkout() {
    const location = useLocation()
    const { cartItems, somaTotal, borda, bordaValor } = location.state || {};
    const {clearCart} = useCart()
    const navigate = useNavigate()
  
    const [paymentMethod, setPaymentMethod] = useState('')
    const [address, setAddress] = useState({
            rua: '',
            bairro: '',
            numero: '',
            cep: '',
            cidade: '',
     
    });

    const TotalOrder = somaTotal + bordaValor + 5;
 


    function getAddress(e){
    const {value, name } = e.target;
    setAddress(prevState => ({
        ...prevState,
        [name]: value
    }));
    }


    function getMethodPay(e){
        const {value, checked} = e.target;

        if(checked){
            if(value === 'pix'){
                setPaymentMethod('pix')
            } else if(value === 'crédito'){
                setPaymentMethod('crédito') 
            }else if(value === 'débito'){
                setPaymentMethod('débito') 
            } else {
                setPaymentMethod('dinheiro') 
            }
        }
    }


    async function SubmitOrder(){
      
        const Order = {
            products: cartItems,
            TotalOrder,
            borda,
            paymentMethod,
            address,
            
        }
 
      
        try {
                const { status, data } = await api.post('/orders', Order,
                    {
                        validateStatus: () => true,
                    },
                    
                )
                const orderResponse = data
                if (status === 201 || status === 200) {
                    toast.success('Seu pedido foi Enviado com sucesso')
                    navigate('/finalizado', {
                        state: {orderResponse}
                    })
                    console.log(orderResponse)
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
            <Banner>
                <img src={Logo} />
            </Banner>


            <Tittle>
                Checkout - Pagamento
            </Tittle>

            <Content>

                <div className='Form-E-Pagamento'>
                    <Form>
                    <H3>Endereço para a entrega</H3>
                    <InputContainer>
                        <InputLogin type='text' 
                        name='rua'
                        value={address.rua}
                        onChange={getAddress}
                        placeholder='Digite o nome da sua rua'
                        />
                    </InputContainer>

                    <InputContainer>
                        <InputLogin type='text' 
                        name='bairro'
                        value={address.bairro}
                        onChange={getAddress}
                        placeholder='Digite o nome do seu bairro'/>
                    </InputContainer>

                    <InputContainer>
                        <InputLogin type='text' 
                        name='numero'
                        value={address.numero}
                        onChange={getAddress}
                        placeholder='Digite o número da sua casa'/>
                    </InputContainer>

                    <InputContainer>
                        <InputLogin type='text' 
                        name='cep'
                        value={address.cep}
                        onChange={getAddress}
                        placeholder='Digite o seu CEP'/>
                    </InputContainer>

                    <InputContainer>
                        <InputLogin type='text' 
                       name='cidade'
                       value={address.cidade}
                       onChange={getAddress}
                        placeholder='Digite o nome da sua cidade'/>
                    </InputContainer>

                    </Form>
                    
                    <Formadepagamento>
                    <p className='payment'>Forma de pagamento</p>

                    <div className='options'>

                            <label className='metodopay'>
                            <input onChange={getMethodPay} className='check' type='checkbox' value='pix' 
                            checked={paymentMethod === 'pix'} 
                            />
                                Pix
                            </label>

                        
                            <label className='metodopay'>
                            <input onChange={getMethodPay}  className='check' type='checkbox' value='crédito'
                             checked={paymentMethod === 'crédito'} 
                            />
                                Cartão de Crédito
                            </label>

                        
                            <label className='metodopay'>
                            <input onChange={getMethodPay}  className='check' type='checkbox' value='débito'
                             checked={paymentMethod === 'débito'} 
                           />
                                Cartão de Débito
                            </label>

                        
                            <label className='metodopay'>
                            <input onChange={getMethodPay}  className='check' type='checkbox' value='dinheiro' 
                            checked={paymentMethod === 'dinheiro'} 
                            />
                                Dinheiro
                            </label>
                    
                    </div>
                    </Formadepagamento>
                </div>

                <div className='resumofinal'>
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
                                <strong>{formatedPrice(TotalOrder)}</strong>
                            </div>

                        </ContainerBottom>
                    </Main>
                    <Button onClick={SubmitOrder}>Finalizar Pedido</Button>
                </div>
            </Content>

        </Container>
    )
}

