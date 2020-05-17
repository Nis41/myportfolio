import React from "react";
import Logo from "./Logo/Logo";
import NavButton from "./Navigation/MobileNavigation/NavButton";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavButton />
    </div>
  );
};

export default Header;
