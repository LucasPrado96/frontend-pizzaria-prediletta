import { useState } from 'react'
import { Container, EditStyledIcon, DeleteForeverIconStyled} from './styles'
import { useEffect } from 'react'
import { api } from '../../../services/api'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { formatedPrice } from '../../../utils/formatPrice';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';
import paths from '../../../constants/index'


export function ListProducts() {
const [products, setProducts] = useState([])
const navigate = useNavigate()

useEffect(()=>{
    async function getProducts(){
        const {data} = await api.get('products')
        setProducts(data)  
    }
 
    getProducts()
    
},[])

function isOffer(offer){

    if(offer){
        return <CheckCircleIcon style={{ color: 'green'}}/>
    } return < CancelIcon style={{ color: 'red'}}/>

}

function editProduct(product){
  navigate(paths.EditProduct, { state: {product}})
}

async function deleteProduct(prodToDelete){
    const confirmDelte = window.confirm('Tem certeza que deseja excluir esse produto?')

    if(!confirmDelte) return;

    try{
      await api.delete(`/products/${prodToDelete}`)
      alert('Produto deletado com sucesso');
      setProducts(prevsProduct => prevsProduct.filter(product => product.id !== prodToDelete))
    } catch(err){
      console.error('erro', err)
      alert('Erro ao deletar o produto')
    }

}

 
    return (
        <Container>
             <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell  style={{fontWeight: '600'}}>Produto</TableCell>
            <TableCell style={{fontWeight: '600'}}>Preço</TableCell>
            <TableCell align='center' style={{fontWeight: '600'}}>Imagem do Produto</TableCell>
            <TableCell align='center' style={{fontWeight: '600'}}>Oferta</TableCell>
            <TableCell  align='center' style={{fontWeight: '600'}}>Editar</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell >{formatedPrice(product.price)}</TableCell>
              <TableCell align='center' ><img src={product.url}/></TableCell>
              <TableCell align='center' >{isOffer(product.offer)}</TableCell>
              <TableCell align='center'>
                <EditStyledIcon onClick={() => editProduct(product)}/>
              </TableCell>

              <TableCell align='center'>
                < DeleteForeverIconStyled onClick={() => deleteProduct(product.id)}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
           
        </Container>
    )
}

