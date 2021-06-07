import React from 'react'
import { GoThreeBars } from 'react-icons/go'
import logoImage from '../../images/CebelarstvoMarin_logotip.jpg'
import { animateScroll as scroll } from 'react-scroll'
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

export const Navbar = ({ toggle }) => {
  const toggleHome = () =>
    scroll.scrollToTop({
      duration: 300,
      smooth: true,
      spy: true,
      exact: 'true',
    })

  return (
    <Nav>
      <NavbarContainer>
        <NavLogoWrapper to="/" onClick={toggleHome}>
          <NavLogoImg src={logoImage} alt="Cebelarstvo marin" />
        </NavLogoWrapper>
        <MobileIcon onClick={toggle}>
          <GoThreeBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="products"
              activeClass="active"
              smooth={true}
              duration={300}
              spy={true}
              exact="true"
              offset={-100}
            >
              Izdelki
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="gallery"
              activeClass="active"
              smooth={true}
              duration={300}
              spy={true}
              exact="true"
              offset={-100}
            >
              Galerija
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="about"
              activeClass="active"
              smooth={true}
              duration={300}
              spy={true}
              exact="true"
              offset={-100}
            >
              O Meni
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="contact"
              activeClass="active"
              smooth={true}
              duration={300}
              spy={true}
              exact="true"
              offset={-100}
            >
              Kontakt
            </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">prijavi se</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  )
}
