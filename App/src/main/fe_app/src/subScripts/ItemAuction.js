import React, { useEffect,  useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label,Table } from 'reactstrap';
import AppNavbar from './AppNavbar';




const ItemAuction=()=>{
    const emptyFrom={
        'name':'',
        'type':'',
        'price':'',
        'lastOffer':''

    }
    const [item, setItem] = useState({emptyFrom});
    const {id} = useParams();
    const [offer, setOffer] =useState({})
    const [loginned,setLoginned] = useState()
    const [LastOffer, setLastOffer] = useState({})
    const navigate = useNavigate();

    

    useEffect(()=>{
          setLoginned(localStorage.getItem('loginStat'))
            fetch(`api/itemById/${id}`)
            .then(response => response.json())
            .then(data => {
                setItem(data);
                if(sessionStorage.getItem('loginStat') != "true"){
                    return navigate('/userLogin')
                  }
            })
          
    },[id,item]);
   
    const handleChange =(event)=>{
        

        const {name, value} = event.target

        setOffer({...offer, [name]:value})
        
    }

    const handleOffer = (event)=>{
        event.preventDefault();
       
        setLastOffer(offer)
        

        fetch(`/api/updateItem/${id}`,{
            method: 'PUT' ,
            headers : {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({'lastOffer':offer.price})
        });        
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        
        fetch(`/api/updateItem/${id}`,{
            method: 'PUT' ,
            headers : {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(LastOffer)
        });
                
    }

 

    const auction_Item =  
        <tr key={item.id}>
            <td style={{whiteSpace: 'nowrap'}}>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.price}</td>
            <td>{item.lastOffer}</td>
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
                    <Button color='danger' href={'/auction'} >Auction List</Button>
                    <Button color='danger' type='submit' >End Auction</Button>
                </FormGroup>
            </Form>          
        </Container>
    </div>
    );
    
};
export default ItemAuction;