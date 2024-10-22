import { UserProvider } from "./UserContext"
import PropTypes from 'prop-types'
import { CartProvider } from "./CartContext"

function AppProvider({ children }) {

    return (
        <UserProvider>
            <CartProvider>{children}</CartProvider>
        </UserProvider>
    )

}

AppProvider.propTypes = {
    children: PropTypes.node
}

export default AppProvider