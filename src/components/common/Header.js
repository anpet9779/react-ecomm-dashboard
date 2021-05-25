import './Header.css'
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
export default function Header() {
    const history = useHistory();
    function logout() {
        localStorage.removeItem('et');
        history.push('./login');
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Ten Tables</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wrapper">
                    {
                        localStorage.getItem('et') ?
                            <>
                                <Link to="/add">Add Menu</Link>
                                <Link to="/update">Update Menu</Link>
                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                    }
                </Nav>
                {
                    localStorage.getItem('et') ?
                        <Nav>
                            <NavDropdown title="John Doe">
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                                <NavDropdown.Item>Settings</NavDropdown.Item>
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        : null
                }
            </Navbar>
        </div>
    )
}