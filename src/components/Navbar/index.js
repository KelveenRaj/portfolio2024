import React, { useState } from "react";
import { Nav, Logo, Links, Hamburger } from "./views";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Nav>
      <Logo>Kelveen Raj</Logo>
      <Links open={isMobileMenuOpen}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </Links>
      <Hamburger onClick={toggleMobileMenu}>☰</Hamburger>
    </Nav>
  );
};

export default Navbar;
