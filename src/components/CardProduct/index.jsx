import PropTypes from "prop-types";
import { Container, Img, Box1, Box2 } from "./styles";
import { CartButtom } from "../CartButton";
import { formatedPrice } from '../../utils/formatPrice'

export function CardProduct({ product }) {


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
                   
                    <CartButtom></CartButtom>
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