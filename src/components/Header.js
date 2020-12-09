import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <>
                    <Link className="mr-1" to="/">React CRUD Context and BootSctrap (Home) </Link> {' '}</>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="d-flex align-items-center">
                            <Link to="/add">Add Cat</Link>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/LamNguyenFE">Lam's GitHub</NavLink>
                        </NavItem>
                    </Nav>
                    {/* <NavbarText>Simple Text</NavbarText> */}
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;