import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler,Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import UserLogin from './UserLogin';

const AppNavbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const logOut=()=>{
    sessionStorage.setItem('loginStat', JSON.stringify(false))
  }

  return (
    <Navbar color="dark" dark expand="md">
      <Button tag={Link} color='primary' to="/">Home Page</Button>
      <NavbarToggler onClick={() => { setIsOpen(!isOpen) }}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="justify-content-end" style={{width: "100%"}} navbar>
        <div >
        <Button size='sm' color='danger' onClick={logOut} tag={Link} to={"/userLogin"}> Log Out </Button>
        </div>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default AppNavbar;