import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

const NavBar = (props) => {
    return(
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="/users/">React-Redux-App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/users/">Home</Nav.Link>
                <NavDropdown title="Actions" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/users/create">Create</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#!" onClick = { () => {props.exit(() => {
                            props.history.replace('/');
                        })}}>
                        Logut
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;