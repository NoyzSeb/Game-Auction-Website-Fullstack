import React, { useEffect, useReducer, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label,Table,ButtonGroup } from 'reactstrap';
import AppNavbar from './AppNavbar';




const ItemAuction=()=>{
   
    const [item, setItem] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();
    const[loading, setLoading] = useState(false);
    const [offer, setOffer] =useState({})
    const[LastOffer, setLastOffer] = useState({})
    
    
    useEffect(()=>{
        setLoading(true);
            fetch(`api/itemById/${id}`)
            .then(response => response.json())
            .then(data => {
                setItem(data);
                setLoading(false)
            })  
        
    },[id,setItem]);
    
    
    
    const handleChange =(event)=>{
        const {name, value} = event.target

        setOffer({...offer, [name]:value})
    }

    const handleOffer = (event)=>{
        event.preventDefault();

        setLastOffer(offer)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
       
        setItem({
            'name':item.name,
            'type':item.type,
            'price': LastOffer.price
           })
         fetch(`/api/updateItem/${id}`,{
            method: 'PUT' ,
            headers : {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(LastOffer)
        });
        
    }
    if(loading){
        return <p>Loading...</p>
       }
    
    const auction_Item = 
        <tr key={item.id}>
            <td style={{whiteSpace: 'nowrap'}}>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.price}</td>
            <td>{LastOffer.price}</td>
        </tr>
    
    
        
    return(
    <div>
         <AppNavbar/>
         <Container fluid>
            <h3>Auction</h3>
            <Table className='mt-1'>
              <thead>
                <tr>
                  <th width='20%'>Name</th>
                  <th width='20%'>Type</th>
                  <th width='20%'>Begin Price</th>
                  <th width='20%'>Last Offer</th>
                  
                  </tr>
              </thead>
              <tbody>
                {auction_Item}
              </tbody>
              </Table>
              <Form onSubmit ={handleSubmit}>
                    <FormGroup className='col-md-4 mb-3'>
                        <Label for ='price'>Price</Label>
                        <Input type='text' name='price' id='price' value={ offer.price||''}
                            onChange={handleChange} autoComplete='price'/>
                    </FormGroup>
                <FormGroup>
                    <Button color='primary' onClick={handleOffer}>Offer</Button>
                    <Button color='danger' type='submit' >End Auction</Button>
                </FormGroup>
            </Form>          
        </Container>
    </div>
    );
    
};
export default ItemAuction;