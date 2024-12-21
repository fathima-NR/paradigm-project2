import React from "react";

const Logo = ({ logoSrc }) => (
  <div style={{ position: "absolute", top: "20px", left: "20px" }}>
    <img src={logoSrc} alt="Logo" style={{ width: "100px" }} />
  </div>
);

export default Logo;
