import './Header.css'
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Ten Tables</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wrapper">
                    <Link to="/add">Add Menu</Link>
                    <Link to="/update">Update Menu</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </Nav>
            </Navbar>
        </div>
    )
}