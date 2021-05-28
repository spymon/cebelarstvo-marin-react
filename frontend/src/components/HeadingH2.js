import styled from 'styled-components'

export const HeadingH2 = styled.h2`
  position: relative;
  display: block;
  color: ${({ dark }) => (dark ? '#35363a' : '#fff')};
  font-size: 2.5rem;
  text-transform: capitalize;
  letter-spacing: 3px;
  margin: 4rem 0;
  padding: 0.5rem 3rem;

  &:before {
    background-color: #f7d433;
    position: absolute;
    content: '';
    width: 40%;
    height: 4px;
    top: 0;
    left: 0;
  }

  &:after {
    background-color: #f7d433;
    position: absolute;
    content: '';
    width: 40%;
    height: 4px;
    bottom: 0;
    right: 0;
  }
`
