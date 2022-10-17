import React, { useEffect } from 'react'
import { Container } from '../Container'
import { HeadingH2 } from '../HeadingH2'
import { ProductCard } from '../ProductCard'
import { ProductsWrapper } from './ProductElements'
import { LoadingBox } from '../LoadingBox'
import { MessageBox } from '../MessageBox'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../redux/Product/product.actions'

export const ProductSection = () => {
  const productList = useSelector(state => state.productList)
  const { products, loading, error } = productList
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <Container id="products">
      <HeadingH2 dark>Izdelki</HeadingH2>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox error>{error}</MessageBox>
      ) : (
        <ProductsWrapper>
          {products &&
            products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
        </ProductsWrapper>
      )}
    </Container>
  )
}
