import { Link } from 'react-router-dom';
import { Container, Nav, NavDropdown,Navbar } from 'react-bootstrap';
import { useAuth } from '../hooks/useAuth';

const NavbarComp = () => {
    const {user} = useAuth();
    return ( 
        <>
            <Navbar bg="primary" variant="dark">
            <Container >
            <Navbar.Brand href="/"><h2>Football Connect</h2></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    {!user && <Nav.Link href="/login">Login</Nav.Link>}
                    {user && <Nav.Link href="/profile">{user.email}</Nav.Link>}
                </Nav>
            </Container>
            </Navbar>
        </>
        
     );
}
 
export default NavbarComp;