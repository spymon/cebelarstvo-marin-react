import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container } from '../Container'
import { HeadingH2 } from '../HeadingH2'
import { ProductCard } from '../ProductCard'
import { ProductsWrapper } from './ProductElements'
import { LoadingBox } from '../LoadingBox'
import { MessageBox } from '../MessageBox'

import axios from 'axios'

export const ProductSection = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get('/api/products')
        setLoading(false)
        setProducts(data)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }

      setLoading(false)
    }
    fetchData()
  }, [])

  console.table(products)

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
