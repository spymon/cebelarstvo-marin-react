import styled from 'styled-components'

export const ContentWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: ${({ oneColumn }) => (oneColumn ? '1fr' : '1fr 1fr')};
  gap: 3rem;
  max-width: 1100px;

  @media screen and (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`
