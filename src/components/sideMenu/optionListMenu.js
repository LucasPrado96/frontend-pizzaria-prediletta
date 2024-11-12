import paths from '../../constants/index'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const optionsSelect = [

    {
        id:  1,
        label:'Pedidos',
        link: paths.Order,
        icon: ShoppingBagIcon
   
    },

    {
        id:  2,
        label:'Listar Produtos',
        link:  paths.Products,
        icon:  InventoryIcon,    
    },

    {
        id:  3,
        label:'Adicionar Produto',
        link:  paths.NewProduct,
        icon:  AddShoppingCartIcon,    
    },
  
]

export default optionsSelect