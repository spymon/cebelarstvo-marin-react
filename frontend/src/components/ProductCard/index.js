import React from 'react'
import {
  ProductBtn,
  ProductCardContainer,
  ProductDescription,
  ProductDescriptionWrapper,
  ProductImg,
  ProductImgWrapper,
  ProductMass,
  ProductName,
  ProductPrice,
} from './ProductCardElements'

import img from '../../images/izdelek-2.png'

export const ProductCard = ({
  product: { _id, name, description, price, weight },
}) => {
  console.log()
  return (
    <ProductCardContainer>
      <ProductImgWrapper>
        <ProductImg src={img} />
      </ProductImgWrapper>
      <ProductDescriptionWrapper>
        <ProductName>{name}</ProductName>
        <ProductMass>količina: {weight}g</ProductMass>
        <ProductPrice>{price.toFixed(2).replace('.', ',')} €</ProductPrice>
        <ProductBtn>Dodaj v košarico</ProductBtn>
      </ProductDescriptionWrapper>
    </ProductCardContainer>
  )
}
