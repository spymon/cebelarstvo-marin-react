import React from 'react'
import { GoThreeBars } from 'react-icons/go'
import logoImage from '../../images/CebelarstvoMarin_logotip.jpg'
import {
  Nav,
  NavbarContainer,
  NavLogoWrapper,
  NavLogoImg,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'

export const Navbar = ({ isopen, toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoWrapper to="/">
            <NavLogoImg src={logoImage} alt="Cebelarstvo marin" />
          </NavLogoWrapper>
          <MobileIcon onClick={toggle}>
            <GoThreeBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="products">Izdelki</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="gallery">Galerija</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">O Meni</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Kontakt</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">prijavi se</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}
