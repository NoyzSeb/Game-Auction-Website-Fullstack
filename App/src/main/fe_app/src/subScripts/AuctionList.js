import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table} from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link,  useNavigate} from 'react-router-dom';



const AuctionList =() =>{
  
    const[items, setItems] = useState([]);
    const navigate = useNavigate();
    const [loginned,setLoginned] = useState()
    
    useEffect(()=>{
          fetch(`api/itemList`)
          .then(response => response.json())
          .then(data=>{
            setItems(data);
            if(sessionStorage.getItem('loginStat') != "true"){
              return navigate('/userLogin')
            }
          })
          
    },[items,setItems])
   
    
   
    const itemList = items.map(item =>{
      const products_price = `${item.price +" Coin"||''}`
      const products_type = `${item.type||''}`
      const products_lastOffer=`${item.lastOffer+" Coin"||''}`
      return <tr key={item.id}>
        <td style={{whiteSpace: 'nowrap'}}>{item.name}</td>
        <td>{products_type}</td>
        <td>{products_price}</td>
        <td>{products_lastOffer}</td>

        <td>
          <div className='end'>
          <ButtonGroup>
            <Button size='sm' color='primary' tag={Link} to={"/"+ item.id}> Begin Auction</Button>
          </ButtonGroup>
          </div>       
        </td>
      </tr>
   });

   return (
      <div>
        <AppNavbar/>
          <Container fluid>
            <h3>Auction List</h3>
            <Table className='mt-1'>
              <thead>
                <tr>
                  <th width='20%'>Name</th>
                  <th width='20%'>Type</th>
                  <th width='20%'>Price</th>
                  <th width='20%'>Last Offer</th>
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

export default AuctionList;