import styled from 'styled-components'

export const ProductsWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 1100px;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap: 3rem 2rem;
`
