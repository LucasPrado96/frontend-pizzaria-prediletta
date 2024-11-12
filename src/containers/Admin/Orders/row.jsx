import { ImgOrder, StyledReactSelect} from './styles'

import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import formatDate from '../../../utils/formatDate';
import status from './optionsStatus'
import {api} from '../../../services/api'






export function Row({row, setOrders, orders}) {
  
    const [open, setOpen] = React.useState(false);

  
      async function setNewStatus(id, status){
          try{
            await api.put(`/orders/${id}`, {status})
            const newOrders = orders.map(ord => {
              return ord._id === id ? {...ord, status} : ord
            })
            setOrders(newOrders)
          } catch(err){
            console.error(err)
          }
      }
  


  
    return (
       
   <React.Fragment>
   
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
         
        </TableCell>
        <TableCell >{row.name}</TableCell>
        <TableCell >{row.phone}</TableCell>
        <TableCell >{formatDate(row.date)}</TableCell>
            <TableCell >
              <StyledReactSelect 
                  options={status}
                  placeholder='status'
                  menuPortalTarget={document.body}
                  defaultValue={status.find(options => options.value === row.status) || null}
                  onChange={newStatus => {
                    setNewStatus(row.orderId, newStatus.value)
                  }}
              
              
              />
            
          </TableCell>
       
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div" style={{fontSize: '12px', fontWeight: '400'}}>
                Pedido - {row.orderId}
              </Typography>
              <Typography variant="h6" gutterBottom component="div" style={{fontSize: '15px'}}>
                Endereço - {row.address.rua} - {row.address.bairro} - {row.address.numero} 
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Produto</TableCell>
                    <TableCell >Borda</TableCell>
                    <TableCell ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((productRow) => (
                    <TableRow key={productRow.id}>
                      <TableCell component="th" scope="row">
                      {Number(productRow.quantity)}
                      </TableCell>
                      <TableCell>{productRow.name}</TableCell>
                      <TableCell >{productRow.borda}</TableCell>
                      <TableCell >
                       <ImgOrder src={productRow.url} alt='img-produto' />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>


        </TableRow>
  
    </React.Fragment>

       
    )
}


Row.propTypes = {
  setOrders: PropTypes.func,
  orders: PropTypes.array, 
      row: PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      orderId: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      address: PropTypes.object.isRequired,
      products: PropTypes.arrayOf(
        PropTypes.shape({
          quantity: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          borda: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }),
      ).isRequired,

      
    }).isRequired,
    
    // Address: PropTypes.objectOf(
    //    PropTypes.shape({
    //     rua: PropTypes.string.isRequired,
    //     bairro: PropTypes.string.isRequired,
    //     numero: PropTypes.string.isRequired,
    //     cep: PropTypes.string.isRequired,
    //     cidade: PropTypes.string.isRequired,
    //    })
    //   ),
  };