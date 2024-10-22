import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const CartContext = createContext({})

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])


    function putItemToCart(product) {
        const cartIndex = cartItems.findIndex((prod) => prod.id === product.id);

        let itemWillComing = []

        if (cartIndex >= 0) {
            itemWillComing = cartItems;
            itemWillComing[cartIndex].quantity = itemWillComing[cartIndex].quantity + 1
            setCartItems(itemWillComing)
        } else {
            product.quantity = 1
            itemWillComing = [...cartItems, product]
            setCartItems(itemWillComing)
        }
        updateLocalStorage(itemWillComing)
    };


    function deleteProductInCart(productId) {
        const itemToRemove = cartItems.filter(prod => prod.id !== productId)
        setCartItems(itemToRemove)
        updateLocalStorage(itemToRemove)
    }




    function increaseProduct(productId) {
        const newItem = cartItems.map((prod) => {
            return prod.id === productId ? { ...prod, quantity: prod.quantity + 1 } : prod;
        })
        setCartItems(newItem)
        updateLocalStorage(newItem)
    }

    function decreaseProduct(productId) {
        const cartIndex = cartItems.findIndex((prod) => prod.id === productId);

        if (cartItems[cartIndex].quantity > 1) {
            const newItem = cartItems.map((prod) => {
                return prod.id === productId ? { ...prod, quantity: prod.quantity - 1 } : prod
            })
            setCartItems(newItem)
            updateLocalStorage(newItem)
        } else {
            deleteProductInCart(productId)
        }

    }


    function updateLocalStorage(products) {
         localStorage.setItem('userCartData', JSON.stringify(products))
       
    }

    useEffect(() => {
        const userCartData =  localStorage.getItem('userCartData')

        if(userCartData){
            setCartItems(JSON.parse(userCartData)) 
        }
    }, [])



    function clearCart() {
        setCartItems([])
        updateLocalStorage([])
    }



    return (
        <CartContext.Provider value={{
            cartItems,
            putItemToCart,
            increaseProduct,
            decreaseProduct,
            deleteProductInCart,
            clearCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('useCart must be used with CartContext')
    } return context
}


CartProvider.propTypes = {
    children: PropTypes.node
}