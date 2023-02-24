//3import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container"
import React, { useState } from 'react';


function Navigation(props) {

  const [isAbout, setIsAbout] = useState(true);

  const handleNavbarSelect = (eventKey) => {
    if(eventKey==="About"){
      setIsAbout(true);
    }else{
      setIsAbout(false);
    }
    props.setPage(eventKey);
  };
 
  return (

      <Container fluid className="navigation">
        <Navbar collapseOnSelect defaultActiveKey={"About"} expand="lg" onSelect={handleNavbarSelect} variant="dark" className="nav" activeKey={props.currentPage}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link active={isAbout} eventKey="About">About Me</Nav.Link>
              <Nav.Link eventKey="Portfolio">Portfolio</Nav.Link>
              <Nav.Link eventKey="Contact">Contact</Nav.Link>
              <Nav.Link eventKey="Resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
  );
}

export default Navigation;
