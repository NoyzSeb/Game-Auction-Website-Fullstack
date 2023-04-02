import '../App.css';
import React, {  useEffect, useState } from 'react';
import AppNavbar from './AppNavbar';
import { Button, Container } from 'reactstrap';
import {  useNavigate} from 'react-router-dom';


const Home = () => {
  const [show, setShow] = useState();
  const navigate = useNavigate();

  useEffect(()=>{
    if(sessionStorage.getItem('loginStat') != "true"){
      return navigate('/userLogin')
    }
    EndAuction()
  })

  const EndAuction=()=>{
    if(sessionStorage.getItem("Role")==="ADMIN"){
        setShow(false)
    }else{
        setShow(true)
    }
  }
  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <div className='mb-2'>
        <Button hidden={show} href="/items"> Manage Item Showcase (Admin Only) </Button>
        </div>
        <div className='mb-2'>
        <Button  href="/auction"> Auction List </Button>
        </div>
        </Container>
    </div>
  );
}

export default Home;

