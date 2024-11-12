import { Container, Banner, Content, Card} from './styles'
import Logo from '../../assets/logo.png'
import PizzaGif from '../../assets/pizza-delivery.gif'

import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'


export function Finished() {

const location = useLocation()
 const {state} = location;
 const orderId = state?.orderResponse?._id;
 const [statusOrder, setStatusOrder] = useState('')


 

useEffect(() => {
   if(orderId) {
    async function getStatus(){
        const {data} = await api.get(`/orders`)
     const filterId = data.filter(index => index._id === orderId)


        setStatusOrder(filterId[0].status)
    
 console.log(data)
    }
    getStatus()
   }
   
},[orderId])



    return (
        <Container>
            <Banner>
                <img src={Logo} />
            </Banner>

            <Content>
                <Card>
                    <h2>OBRIGADO PELO SEU PEDIDO!</h2>
                    <img src={PizzaGif}/>
                    <p>Seu pedido foi enviado com sucesso, logo entrará em preparação.</p>
                    <p>Acompanhe o status do seu pedido</p>
                    {statusOrder &&  <p className='status'>{statusOrder}</p>}
                  
                </Card>
            </Content>
        </Container>
    )
}

