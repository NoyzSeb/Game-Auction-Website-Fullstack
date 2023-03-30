import React, { useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label,Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link, useNavigate,createSearchParams } from 'react-router-dom';


const UserLogin =()=>{
    const navigate = useNavigate();
    const [userData, setUserData]=useState({})
    const[loading, setLoading] = useState(false);
    const [loginPut, setloginPut]=useState({})
    const [loginStatus, setloginStatus] = useState()
    
    
    const handleChange =(event)=>{
        const {name, value} = event.target

        setloginPut({...loginPut, [name]:value.trim()})

    }
       
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
      setUserData({
        'name':loginPut.name,
        'password':loginPut.password
    })
    
      setLoading(true);
            fetch(`api/userLogin`,{
                method: 'PUT',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginPut)               
            })
            .then(response => response.json())
            .then(data => {
               if(data==true){
                setloginStatus(true);
                navigate("/auction")
               }else{
                setloginStatus(false);
                navigate('/userLogin')
               }
                 
                setLoading(false)
            })       
    };
         
    function returnLoginStatus (loginStatus) {
      return loginStatus
    }
    

    return (
     <div>
          <div className="Auth-form-container">
      <Form className="Auth-form" onSubmit={handleChange}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login Page</h3>
        
          <div className="form-group mt-3">
            <label>Nickname</label>
            <Input type='text' name='name' id='name' value={ loginPut.name||''}
                            onChange={handleChange} autoComplete='name'/>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <Input type='text' name='password' id='password' value={ loginPut.password||''}
                            onChange={handleChange} autoComplete='password'/>
          </div>
          <div className="gap-1 mt-3">
            <Button color='primary' onClick={handleSubmit}>Login</Button> 
          </div>
          <p className="forgot-password text-right mt-2">
            <Button href="http://localhost:3000/userCreate">Create New User</Button>
          </p>
        </div>
      </Form>
    </div> 
    </div>
    );
}

export default UserLogin;