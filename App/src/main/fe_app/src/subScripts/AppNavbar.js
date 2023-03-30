import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler,Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import UserLogin from './UserLogin';

const AppNavbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">Press Toggler For Pages</NavbarBrand>
      <NavbarToggler onClick={() => { setIsOpen(!isOpen) }}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="justify-content-end" style={{width: "100%"}} navbar>
        <div className='col-1'>
        <Button size='sm' color='danger' tag={Link} to={"/userLogin"}> Log Out </Button>
        </div>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default AppNavbar;