// React
import React from "react";

// Images
// import Logo from "assets/images/logo.png";
const Logo = require("../../assets/images/logo.png");

const Header = () => {
  return (
    <header className="">
      {/* Logo */}
      <img src={Logo} alt="Logo of PriceAll" />
      Header
    </header>
  );
};

export default Header;
