import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "/src/assets/Screenshot_20241211-112603 (1)-DXrHoUe9.png"
const TransparentNavbar = () => {
  return (
    <Navbar expand="lg" style={{ position: "absolute", width: "100%", zIndex: "10" }}>
      <Navbar.Brand href="#home" style={{ color: "white", marginLeft: "20px" }}>
    <img src={logo} alt="" width={200}/>
      </Navbar.Brand>
      
    </Navbar>
  );
};

export default TransparentNavbar;
