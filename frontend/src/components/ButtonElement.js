import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 3.125rem;
  background: ${({ primary }) => (primary ? '#f7d433' : '#35363a')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '0.875rem  3rem' : '0.75rem 1.875rem')};
  color: ${({ primary }) => (primary ? '#35363a' : '#fff')};
  font-size: ${({ fontbig }) => (fontbig ? '1.125rem' : '1rem')};
  text-transform: uppercase;
  letter-spacing: 1px;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    letter-spacing: 1.8px;
    background: ${({ primary }) => (primary ? '#35363a' : '#f7d433')};
    color: ${({ primary }) => (primary ? '#f7d433' : '#35363a')};
  }
`
