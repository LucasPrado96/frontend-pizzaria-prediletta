import { Container,  Content, ContainerMenu,} from './styles'

import { Orders } from './Orders'
import { ListProducts } from './ListProducts'
import { NewProduct}  from './NewProduct'
import { EditProducts } from './EditProduct'

import SideMenu from '../../components/sideMenu/index'
import paths from '../../constants';
import { useLocation } from 'react-router-dom';


export function AdmScreem() {
const location = useLocation()


    return (
        <Container>
         
           
             
        


           <ContainerMenu>
                <SideMenu path={location.pathname}/>
                    
                <Content>
                    {location.pathname === paths.Order && <Orders/> }
                    {location.pathname === paths.Products && <ListProducts/>}
                    {location.pathname === paths.NewProduct && <NewProduct/>}
                    {location.pathname === paths.EditProduct && <EditProducts/>}
                </Content>

           </ContainerMenu>

        </Container>
    )
}