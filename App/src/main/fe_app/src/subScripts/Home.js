import '../App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <div className='mb-2'>
        <Button  href="/items"> Manage Item Showcase </Button>
        </div>
        <div className='mb-2'>
        <Button  href="/auction"> Auction List </Button>
        </div>
        <div className='mb-2'>
        <Button  href="/userLogin"> Login Page </Button>
        </div>
        <div className='mb-2'>
        <Button  href="/userCreate"> Create User </Button>
        </div>
      </Container>
    </div>
  );
}

export default Home;

