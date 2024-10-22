import { Container, Banner, Tittle, Content} from './styles'
import Logo from '../../assets/logo.png'
import CartItems from '../../components/CartItems'
import CartResume from '../../components/CartResume'



export function Cart() {


    return (
        <Container>
            <Banner>
                <img src={Logo} />
            </Banner>


            <Tittle>
                Checkout - Pedido
            </Tittle>

            <Content>
                <CartItems/>
                <CartResume/>
            </Content>

        </Container>
    )
}

