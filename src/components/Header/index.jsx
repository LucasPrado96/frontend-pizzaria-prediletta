import { Container, ContainerLeft, ContainerRight, HeaderLink, LogoutLink, MenuResponsivo, MenuWeb, OptionMenu, HeaderLinkResponsivo } from './styles'
import Logo from '../../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { useUser } from '../../hooks/UserContext'
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CallIcon from '@mui/icons-material/Call';
import { useState } from 'react';


function Header() {

    const { userInfo, Logout } = useUser()
    const [openCloset, setOpenCloset] = useState(false)
    const navigate = useNavigate()

    function logoutToLogin() {
        Logout()
        navigate('/login')
    }

    function openMenu(){
        setOpenCloset(!openCloset)
     
    }

    return (
        <Container>

        
            <MenuResponsivo >

            {openCloset &&  (
                <OptionMenu>
                    <HeaderLinkResponsivo to={'/'}>
                        <HomeIcon/>    Home
                    </HeaderLinkResponsivo>

                    <HeaderLinkResponsivo to={'/products'}>
                         <RestaurantIcon/>    Cardápio
                    </HeaderLinkResponsivo>

                    <HeaderLinkResponsivo>
                     <CallIcon/>  Contato
                    </HeaderLinkResponsivo>

                    <HeaderLinkResponsivo onClick={logoutToLogin}>Sair</HeaderLinkResponsivo>
                </OptionMenu>
                   )}

                <button   onClick={openMenu}>
                    <MenuIcon style={{ color: 'white' }} fontSize='large' />
                </button>

                <p>Olá, <strong>{userInfo.name}</strong></p>

                <HeaderLink to={'/carrinho'}>
                    <ShoppingCartIcon fontSize='medium' />
                </HeaderLink>

            </MenuResponsivo>

            <MenuWeb>
                <ContainerRight>
                    <img src={Logo} alt='logo-img' />

                    <div>
                        <HeaderLink to={'/'}>Home</HeaderLink>
                        <HeaderLink to={'/products'}>Cardápio</HeaderLink>
                        <HeaderLink>Contato</HeaderLink>
                    </div>

                </ContainerRight>


                <ContainerLeft>
                    <PersonIcon style={{ width: '60px' }} />
                    <div className='texts'>

                        <p>Olá, <strong>{userInfo.name}</strong></p>
                        <div className='riscaQueSepara'></div>
                        <LogoutLink onClick={logoutToLogin}>Sair</LogoutLink>
                    </div>



                    <HeaderLink to={'/carrinho'}>
                        <ShoppingCartIcon />
                    </HeaderLink>

                </ContainerLeft>
            </MenuWeb>

        </Container>
    )
}

export default Header