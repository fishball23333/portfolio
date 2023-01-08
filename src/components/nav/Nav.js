import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const MyNav = () => {
  return (
    <Navbar className="bg-dark navbar-dark" expand="md">
      <Container className = "ms-auto mx-0">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="./about">About</Nav.Link>
            <Nav.Link href="./Experience">Experience</Nav.Link>            
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default MyNav;


