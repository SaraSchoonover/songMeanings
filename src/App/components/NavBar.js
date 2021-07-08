import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
// import { signOutUser } from '../../helpers/auth';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // const authenticated = () => (
  //   <div>
  // <NavItem>
  //   <Link className="nav-link" id="that" to="/add-countries">Add Countries</Link>
  //   <Link className="nav-link" id="that" to="/add-states">Add States</Link>
  // </NavItem>
  // </div>
  // );
  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/">Visit Me</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
    <Link className="nav-link" id="that" to="/countries">Countries</Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" id="who" to="/usStates">US States</Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" id="that" to="/add-countries">Add Countries</Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" id="that" to="/add-states">Add States</Link>
  </NavItem>
          <NavItem>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any
};

export default NavBar;
