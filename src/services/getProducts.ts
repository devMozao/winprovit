import axios from 'axios'

interface ProductRequest {
  total: number
  limit: number
  skip: number
  products: Product[]
}

export interface Product {
  brand: string
  category: string
  description: string
  discountPercentage: number
  id: number
  images: string[]
  price: number
  rating: number
  stack: number
  thumbnail: string
  title: string
}

export const getProducts = async (query: string) => {
  const response = await axios.get<ProductRequest>(
    `https://dummyjson.com/products/search?q=${query}`,
  )
  return response.data
}

export default getProducts
