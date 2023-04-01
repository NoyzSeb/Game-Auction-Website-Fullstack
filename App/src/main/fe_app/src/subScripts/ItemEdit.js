import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

const ItemEdit=()=>{
    const emptyFrom = {
        name:'',
        type:'',
        price: ''
    };

    const [item, setItem] = useState(emptyFrom);
    const navigate = useNavigate();
    const {id} = useParams();
    
    
    useEffect(()=>{
        if(sessionStorage.getItem('Role')==='ADMIN'){
            fetch(`api/updateItem/${id}`)
            .then(response => response.json())
            .then(data => setItem(data))
            
        }else{
            navigate('/auction')
        }
    },[id,setItem]);

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
        setItem(emptyFrom);
        navigate('/items')
    }
    
    return(<div>
        <AppNavbar/>
        <Container fluid>
            <Form onSubmit ={handleSubmit}>
                <FormGroup>
                    <Label for='name'>Name</Label>
                    <Input type='text' name='name' id='name' value={item.name || ''}
                        onChange={handleChange} autoComplete='name'/>
                </FormGroup>
                <FormGroup>
                    <Label for='type'>Type</Label>
                    <Input type='text' name='type' id='type' value={item.type ||''}
                        onChange={handleChange} autoComplete='type'/>
                </FormGroup>
                <div className='row'>
                    <FormGroup className='col-md-4 mb-3'>
                        <Label for ='price'>Price</Label>
                        <Input type='text' name='price' id='price' value={item.price ||''}
                            onChange={handleChange} autoComplete='price'/>
                    </FormGroup>
                </div>
                <FormGroup>
                    <Button color='primary' type='submit'>Save</Button>{' '}
                    <Button color='secondary' tag={Link} to='/items'>Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
    </div>
    )

};
export default ItemEdit;