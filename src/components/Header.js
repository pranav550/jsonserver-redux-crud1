import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddDetails from "./AddDetails";
import Home from "./Home";
import UpdateDetails from "./UpdateDetails";
function Header() {
  return (
    <BrowserRouter>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/addDetail">
              Add Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addDetail" element={<AddDetails />} />
        <Route path="/edit/:id" element={<UpdateDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Header;
