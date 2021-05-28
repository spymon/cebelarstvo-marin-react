import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  box-shadow: 1px 3px 10px 0px rgba(51, 51, 51, 0.2);
  border-radius: 5px;
  overflow: hidden;
`

export const ProductImgWrapper = styled.div`
  min-height: 12rem;
  width: 100%;
`

export const ProductImg = styled.img`
  display: inline-block;
  width: 100%;
  max-width: 100%;
`

export const ProductDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #35363a;
  padding: 10px;
`

export const ProductName = styled.h3`
  color: #35363a;
  font-size: 1.5rem;
  text-transform: capitalize;
`

export const ProductMass = styled.p`
  padding: 0.5rem 0 1.5rem;
  color: #777;
`

export const ProductBtn = styled.button`
  background-color: #f7d433;
  font-family: 'Prompt', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px 20px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: 1px 3px 10px 0px rgba(51, 51, 51, 0.2);
  cursor: pointer;
  transition: transform 50ms ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`
