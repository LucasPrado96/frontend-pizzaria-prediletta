import PropTypes from "prop-types";
import { Container, Img, Box1, Box2 } from "./styles";
import { CartButtom } from "../CartButton";


export function CardProduct({ product }) {


    return (

        <Container>

            <Box1>
                
                <div className="div-da-img">
                    <Img src={product.url} alt={product.name} />
                </div>

                <div className="div-buttom">
                    <p>{product.name}</p>
                    <strong>{product.price}</strong>
                    <CartButtom></CartButtom>
                </div>

             
            </Box1>

            <Box2>

                <p>description description, description, description</p>
            </Box2>

        </Container>
    )
}


CardProduct.propTypes = {
    product: PropTypes.object
}