import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label,Table,ButtonGroup } from 'reactstrap';
import AppNavbar from './AppNavbar';




const ItemAuction=()=>{
   
    const offerFrom = {
        name:'',
        type:'',
        price: ''
    };
       
    const [item, setItem] = useState(offerFrom);
    const navigate = useNavigate();
    const {id} = useParams();
    const[loading, setLoading] = useState(false);

    
    useEffect(()=>{
        setLoading(true);

        fetch(`api/itemById/${id}`)
        .then(response => response.json())    //didnt work, change item info geting progress to "const method" from useEffect
        .then(data=>{
            setItem(data);
            setLoading(false)
        })
    },[])

    
    
    const handleChange =(event)=>{
        const {name, value} = event.target
     
        setItem({...item, [name]:value})
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        
        await fetch(`/api/updateItem/${id}`,{
            method: 'PUT' ,
            headers : {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        setItem(offerFrom);
        
    }
    if(loading){
        return <p>Loading...</p>
       }
    
    const auction_Item = () =>{
        const products_price = `${item.price +" Coin"||''}`
        const products_type = `${item.type||''}`
        return <tr key={item.id}>
            <td style={{whiteSpace: 'nowrap'}}>{item.name}</td>
            <td>{products_type}</td>
            <td>{products_price}</td>
        </tr>
    }

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
        </Container>

    </div>

    )
    
};
export default ItemAuction;