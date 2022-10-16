import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  place-items: center;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`

export const IconWrapper = styled.div`
  position: absolute;
  top: 2.3rem;
  right: 1.9rem;
  background: transition;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
`

export const CloseIcon = styled(FaTimes)`
  color: #35363a;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #f7d433;
    transition: color 0.2s ease-in-out;
  }
`

export const SidebarWrapper = styled.div`
  color: #35363a;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;
  padding: 0;
  list-style-type: none;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  text-decoration: none;
  text-transform: capitalize;
  list-style: none;
  transition: color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #f7d433;
    transition: color 0.2s ease-in-out;
  }
`

export const SidebarBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
  border-radius: 3.125em;
  background: #f7d433;
  white-space: nowrap;
  padding: 0.625em 1.375em;
  color: #35363a;
  font-size: 1rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #35363a;
    color: #f7d433;
  }
`
