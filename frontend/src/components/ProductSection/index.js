import React from 'react'
import { HeadingH2 } from '../HeadingH2'
import { ProductCard } from '../ProductCard'
import { ProductContainer, ProductsWrapper } from './ProductElements'

export const ProductSection = () => {
  return (
    <ProductContainer id="products">
      <HeadingH2 dark>Izdelki</HeadingH2>
      <ProductsWrapper>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsWrapper>
    </ProductContainer>
  )
}
