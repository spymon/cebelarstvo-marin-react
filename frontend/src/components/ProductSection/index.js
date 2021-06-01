import React from 'react'
import { Container } from '../Container'
import { HeadingH2 } from '../HeadingH2'
import { ProductCard } from '../ProductCard'
import { ProductsWrapper } from './ProductElements'

export const ProductSection = () => {
  return (
    <Container id="products">
      <HeadingH2 dark>Izdelki</HeadingH2>
      <ProductsWrapper>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsWrapper>
    </Container>
  )
}
