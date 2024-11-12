import {LinkMenu, MenuStatus, Container} from './styles'
import { api } from '../../../services/api'
// eslint-disable-next-line no-unused-vars
import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';

import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from './row';
import status from './optionsStatus'




export function Orders() {
const [orders, setOrders] = useState([])
const [rows, setRow] = useState([])
const [filteredStatus, setFilteredStatus] = useState([])
const [activeStatus, setActiveStatus] = useState(1)


  useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('/orders')
        
            setOrders(data)
            
            
        }
        
        loadOrders()
    }, [])

    function filterStatus(status){
      const filtered = orders.filter(filter => filter.status === status.value);
      setFilteredStatus(filtered)
      setActiveStatus(status.id)
    }

   

    function createData(order) {
        return {
        name: order.user.name,
        phone: order.user.phone,
        orderId: order._id,
        date: order.createdAt,
        status: order.status,
        products: order.products,
        borda: order.products.borda,
        address: order.address,
        ValorTotal: order.TotalValue,
        };
      }

        useEffect(() =>{
            const newRow = filteredStatus.map(ord => createData(ord))
            setRow(newRow)
           
        },[filteredStatus])
       
       
        useEffect(() =>{
          const statusIndex = status.findIndex(sts => sts.id === activeStatus )
         const newFilter = orders.filter(ordfilter => ordfilter.status === status[statusIndex].value)
         setFilteredStatus(newFilter)
      },[orders])


    return (  
    
      <Container>
      <MenuStatus>
            {status && status.map(stts =>
             <LinkMenu 
                  onClick={() => {filterStatus(stts)}} key={stts.id} $isActive={activeStatus === stts.id}>
              {stts.label}
            </LinkMenu> )}
      </MenuStatus>
      
        <TableContainer component={Paper}>    
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell/>
            <TableCell></TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Status</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.orderId} row={row}  setOrders={setOrders} orders={orders}/>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
   
    </Container>  
    )
}