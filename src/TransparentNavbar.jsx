import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "/src/assets/Screenshot_20241211-112603 (1)-DXrHoUe9.png"
const TransparentNavbar = () => {
  return (
    <Navbar expand="lg" style={{ position: "absolute", width: "100%", zIndex: "10" }}>
      <Navbar.Brand href="#home" style={{ color: "white", marginLeft: "20px" }}>
    <img src={logo} alt="" width={200}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" style={{ marginRight: "20px" }}>
          <Nav.Link href="#about" style={{ color: "white" }}>About</Nav.Link>
          <Nav.Link href="#services" style={{ color: "white" }}>Services</Nav.Link>
          <Nav.Link href="#contact" style={{ color: "white" }}>Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TransparentNavbar;
