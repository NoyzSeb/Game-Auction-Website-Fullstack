import React,{useEffect, useState} from 'react';
import { Button, Form, Input} from 'reactstrap';
import {  useNavigate } from 'react-router-dom';


const UserLogin =()=>{
    const navigate = useNavigate();
    const [userData, setUserData]=useState({})
    const [loginPut, setloginPut]=useState({})
    const [loginStatus, setloginStatus] = useState()
    
    
    const handleChange =(event)=>{
        const {name, value} = event.target

        setloginPut({...loginPut, [name]:value.trim()})

    }

    useEffect(()=>{
      sessionStorage.setItem('loginStat', JSON.stringify(false))
      sessionStorage.setItem('Role', JSON.stringify(null))

    })
       
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
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
              setUserData(data)
              if(data.logged === true){
                setloginStatus(true);
                sessionStorage.setItem('loginStat', JSON.stringify(true))
                sessionStorage.setItem('Role', data.role)
                navigate("/auction")
               }else if(data.logged === false){
                setloginStatus(false);
                sessionStorage.setItem('loginStat', JSON.stringify(false))
                navigate('/userLogin')
               }else{
                 setloginStatus(false);
                 sessionStorage.setItem('loginStat', JSON.stringify(false))
                 navigate('/userLogin')
               }
            })  
            
    };

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
