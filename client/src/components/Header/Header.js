import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
        Authors (Core)
        </Link>
        <Nav className="me-auto">
          <Link className="nav-link" to="/">Authors</Link>
          <Link className="nav-link" to="/new">New Author</Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Header