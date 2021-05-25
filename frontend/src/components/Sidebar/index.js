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
          <SidebarLink to="products" onClick={toggle}>
            Izdelki
          </SidebarLink>
          <SidebarLink to="gallery" onClick={toggle}>
            Galerija
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            O meni
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
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
