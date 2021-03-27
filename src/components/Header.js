import React from 'react';
import { Navbar, Nav } from 'react-bootstrap/';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Logo from './Logo';


const Header = ({ shopCount }) => {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
            <Nav className="ml-auto">
                <Badge color="secondary" badgeContent={shopCount} role="cart-count" name="count">
                    <ShoppingCartIcon />{" "}
                </Badge>
            </Nav>
        </Navbar>
    )
}

export default Header;