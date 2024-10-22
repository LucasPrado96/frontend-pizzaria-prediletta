import { QunatityButton,  ProductImage, EmptyCart, Total, NamePrice, Price, Name } from './styles'
import { Table } from '../index'
import { formatedPrice } from '../../utils/formatPrice'
import { useCart } from '../../hooks/CartContext'





function CartItems() {
    const { cartItems, increaseProduct, decreaseProduct,  } = useCart()

   

    return (

        
        <Table.Root>

            

            <Table.Body>
                {cartItems?.length ? cartItems.map(product => (

                    <Table.Tr key={product.id}>
                         <Table.Td>
                         <ProductImage src={product.url}  alt="image-product"/> 
                         </Table.Td>
                       
                        <Table.Td>
                            <NamePrice>
                                <Name>{product.name}</Name>
                                <Price>{formatedPrice(product.price)}</Price>
                            </NamePrice>
                        </Table.Td>

                        
                        <Table.Td>
                            <QunatityButton>
                                <button onClick={() => decreaseProduct(product.id)}>-</button>
                                {product.quantity}
                                <button onClick={() => increaseProduct(product.id)}>+</button>
                            </QunatityButton>
                        </Table.Td>
                        
                        <Table.Td style={{ fontWeight: 'bold' }}>
                            <Total>
                            {formatedPrice(product.quantity * product.price)}
                            </Total>
                        </Table.Td>


                    </Table.Tr>
                    
                )) : ( <EmptyCart>carrinho vazio</EmptyCart> )} 
                 
                  
                
                </Table.Body>

        </Table.Root>
     
    )

}

export default CartItems