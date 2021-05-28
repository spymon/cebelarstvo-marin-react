import React from 'react'
import { HeadingH2 } from '../HeadingH2'
import { ProductContainer, ProductItemsWrapper } from './ProductElements'

export const ProductSection = () => {
  return (
    <ProductContainer id="products">
      <HeadingH2 dark>Izdelki</HeadingH2>

      <ProductItemsWrapper>
        {/*  <ProductCard></ProductCard> */}
      </ProductItemsWrapper>
    </ProductContainer>
  )
}
