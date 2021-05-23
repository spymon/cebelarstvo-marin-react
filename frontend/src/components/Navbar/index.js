import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './NavbarElements'

export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">LOGO</NavLogo>
          <h1>Hey</h1>
        </NavbarContainer>
      </Nav>
    </>
  )
}
