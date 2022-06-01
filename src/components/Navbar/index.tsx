import { Container, Navbar as NavbarComponent } from 'react-bootstrap';
import './style.css'

const Navbar= () => {
    return (
        <NavbarComponent expand = 'lg'>
            <Container fluid style={{padding: '0 10rem', justifyContent: 'center'}}>
                <NavbarComponent.Brand>CRUD-GAMA</NavbarComponent.Brand>
            </Container>
        </NavbarComponent>
    )
}

export default Navbar;