import React, { useState } from 'react';
import '../css/navigation.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

// import useLocation from 'react-router-dom';
const NavBar = (activeKey) => {
  const [key, setKey] = useState(activeKey);

  const handleSelect = (key) => {
    setKey(key);
  };

  return (
    <div className="nav-border">
      <Navbar collapseOnSelect expand="lg" bg="" variant="light">
        <Container>
          <Navbar.Brand href="/">Math Magicians</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* This keeps brand and links apart */}
            </Nav>
            <Nav activeKey={key}>
              <LinkContainer to="/">
                <Nav.Link eventKey="/" id="/" onSelect={handleSelect} data-testid="home">Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="calculator">
                <Nav.Link eventKey="calculator" id="calculator" onSelect={handleSelect} data-testid="quotes">Calculator</Nav.Link>
              </LinkContainer>

              <LinkContainer to="quotes">
                <Nav.Link eventKey="quotes" id="quotes" onSelect={handleSelect} data-testid="quotes">Quotes</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
