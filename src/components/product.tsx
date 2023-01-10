import { FC } from 'react'

import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import { Product } from '@/services/getProducts'

const ProductComp: FC<Product> = ({ brand, title, price, thumbnail, description }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={thumbnail} title="green iguana" />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ${price}
          </Typography>
        </Box>
        <Typography gutterBottom variant="body1" component="div">
          {brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Box display="flex" justifyContent="center" alignItems="center">
        <CardActions>
          <Button variant="contained">Add to cart</Button>
        </CardActions>
      </Box>
    </Card>
  )
}

export default ProductComp
