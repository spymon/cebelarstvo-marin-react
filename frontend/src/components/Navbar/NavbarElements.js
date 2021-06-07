import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: #fff;
  height: 100px;
  margin-top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-bottom: 3px solid #f7d433;
  padding: 0 2rem;
  box-shadow: 0 3px 10px rgba(51, 51, 51, 0.2);
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`

// react router link
export const NavLogoWrapper = styled(LinkR)`
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 100px;
`

export const NavLogoImg = styled.img`
  max-width: 100%;
  padding: 0;
  vertical-align: middle;
  display: inline-block;
  height: 90px;
  user-select: none;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    color: #35363a;
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding: 0;

  @media Screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
`

// react scroll link
export const NavLinks = styled(LinkS)`
  color: #35363a;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: capitalize;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.1s ease-in-out;
  border-radius: 2px;

  &.active {
    border-bottom: 3px solid #f7d433;
    transition: all 0.1s ease-in-out;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 3.125em;
  background: #f7d433;
  white-space: nowrap;
  padding: 0.625em 1.375em;
  color: #35363a;
  font-size: 1rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 3px 10px rgba(51, 51, 51, 0.2);
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #35363a;
    color: #f7d433;
  }
`
