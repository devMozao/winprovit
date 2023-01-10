import { FC, useState } from 'react'

import { Search } from '@mui/icons-material'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { useQuery } from '@tanstack/react-query'

import ProductComp from '@/components/product'
import getProducts, { Product } from '@/services/getProducts'

const Page: FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')

  const { error } = useQuery({
    queryKey: ['querySearch'],
    queryFn: async () => {
      const result = getProducts(searchQuery)
      return result
    },
    onSuccess: (data) => {
      if (data.products.length > 0) {
        setProducts(data.products)
      }
      data.products
      console.log(data)
    },
    onError: () => {
      console.log('error', error)
    },
    refetchOnWindowFocus: false,
  })

  return (
    <span>
      {error ? (
        'Something went wrong.'
      ) : (
        <>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-search-input">Search...</InputLabel>
            <OutlinedInput
              id="outlined-search-input"
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="Search Icon" edge="end">
                    <Search />
                  </IconButton>
                </InputAdornment>
              }
              label="Search..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </FormControl>

          {products.map((item, index) => {
            return <ProductComp key={index} {...item} />
          })}
        </>
      )}
    </span>
  )
}

export default Page
