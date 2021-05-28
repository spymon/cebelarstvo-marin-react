import React from 'react'
import {
  ProductBtn,
  ProductCardContainer,
  ProductDescriptionWrapper,
  ProductImg,
  ProductImgWrapper,
  ProductMass,
  ProductName,
} from './ProductCardElements'

import img from '../../images/izdelek-2.png'

export const ProductCard = () => {
  return (
    <ProductCardContainer>
      <ProductImgWrapper>
        <ProductImg src={img} />
      </ProductImgWrapper>
      <ProductDescriptionWrapper>
        <ProductName>Cvetlični Med</ProductName>
        <ProductMass>količina: 900g</ProductMass>
        <ProductBtn>Dodaj v košarico</ProductBtn>
      </ProductDescriptionWrapper>
    </ProductCardContainer>
  )
}
