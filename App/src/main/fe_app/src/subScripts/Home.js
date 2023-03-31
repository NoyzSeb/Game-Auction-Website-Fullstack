import '../App.css';
import AppNavbar from './AppNavbar';
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
        </Container>
    </div>
  );
}

export default Home;

