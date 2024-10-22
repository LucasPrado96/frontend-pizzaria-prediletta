import PropTypes from "prop-types";
import { Container, Img, Box1, Box2 } from "./styles";
import { CartButtom } from "../CartButton";
import { formatedPrice } from '../../utils/formatPrice'
import { useCart } from "../../hooks/CartContext";

export function CardProduct({ product }) {
    const {putItemToCart} = useCart()

    return (

        <Container>

            <Box1>
                
                <div className="div-da-img">
                    <Img src={product.url} alt={product.name} />
                </div>

                <div className="div-buttom">
                    <div>
                        <p>{product.name}</p>
                        <strong>{formatedPrice(product.price)}</strong>
                    </div>
                   
                    <CartButtom onClick={() => putItemToCart(product)}></CartButtom>
                </div>

             
            </Box1>

            <Box2>

                <p>{product.description}</p>
            </Box2>

        </Container>
    )
}


CardProduct.propTypes = {
    product: PropTypes.object
}