import {Container, ContainerOption, LinkOption, Button} from './styles'
import optionsSelect  from './optionListMenu'
import Logo from '../../assets/logo.png'
import LogoutIcon from '@mui/icons-material/Logout';
import {useUser} from '../../hooks/UserContext'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';





function SideMenu({path}) {
  const {Logout} = useUser()
  const navigate = useNavigate()

  function logoutToLogin() {
    Logout()
    navigate('/login')
}

    return (

        
       <Container>
            <p>Área de Administrador</p>
            <img src={Logo} />
        
            {optionsSelect && optionsSelect.map(option => (
                       <ContainerOption key={option.id} $isActive={path === option.link}>
                         <option.icon className='icon'/>
                       <LinkOption to={option.link}>{option.label}</LinkOption>
                     
                   </ContainerOption>
            ))}
           
          <Button onClick={logoutToLogin} >
            <LogoutIcon/>
            Sair
            
            </Button>
       </Container>
     
    )

}

export default SideMenu


SideMenu.propTypes = {
  path: PropTypes.string
}