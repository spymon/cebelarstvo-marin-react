import React from 'react'
import {
  CloseIcon,
  IconWrapper,
  SidebarBtnWrapper,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
} from './SidebarElements'

export const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer onClick={toggle} isOpen={isOpen}>
      <IconWrapper onClick={toggle}>
        <CloseIcon />
      </IconWrapper>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="products"
            onClick={toggle}
            smooth={true}
            duration={300}
            spy={true}
            offset={-100}
          >
            Izdelki
          </SidebarLink>
          <SidebarLink
            to="gallery"
            onClick={toggle}
            smooth={true}
            duration={300}
            spy={true}
            offset={-100}
          >
            Galerija
          </SidebarLink>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={300}
            spy={true}
            offset={-100}
          >
            O meni
          </SidebarLink>
          <SidebarLink
            to="contact"
            onClick={toggle}
            smooth={true}
            duration={300}
            spy={true}
            offset={-100}
          >
            Kontakt
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrapper>
          <SidebarRoute to="/signin">Prijavi se</SidebarRoute>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  )
}
