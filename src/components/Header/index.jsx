import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar className="navbar-dark bg-dark">
      <NavbarBrand href="/">GitHub Trending</NavbarBrand>
    </Navbar>
  );
}
