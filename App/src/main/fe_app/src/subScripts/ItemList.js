import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

const ItemList =() =>{
    const[items, setItems] = useState([]);
    const[loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);

        fetch(`api/itemList`)
        .then(response => response.json())
        .then(data=>{
            setItems(data);
            setLoading(false)
        })
    },[])

   const remove = async (id) =>{
       await fetch(`api/deleteItem/${id}`,{
          method: "DELETE",
          headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
          }
       }).then(()=>{
        
        let updatedItems =[...items].filter(i=> i.id !==id);
        setItems(updatedItems);
       });
   }
   if(loading){
    return <p>Loading...</p>
   }

   const itemList = items.map(item =>{
      const products_price = `${item.price +" Coin"||''}`
      const products_type = `${item.id||''}`
      return <tr key={item.id}>
        <td style={{whiteSpace: 'nowrap'}}>{item.name}</td>
        <td>{products_type}</td>
        <td>{products_price}</td>
        <td>
          <ButtonGroup>
            <Button size='sm' color='primary' tag={Link} to={"/items/"+ item.id}>Edit</Button>
            <Button size='sm' color='danger' onClick={()=>remove(item.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
   });

   return (
      <div>
        <AppNavbar/>
          <Container fluid>
            <div className='floeat-end'>
              <Button color='success' tag={Link} to="/items/new">Add Item</Button>
            </div>
            <h3>My Item Showcase</h3>
            <Table className='mt-4'>
              <thead>
                <tr>
                  <th width='20%'>Name</th>
                  <th width='20%'>Genre</th>
                  <th width='20%'>Price</th>
                  <th width="10%">Actions</th>                  
                </tr>
              </thead>
              <tbody>
                {itemList}
              </tbody>
            </Table>
          </Container>        
      </div>
   );

};
export default ItemList;