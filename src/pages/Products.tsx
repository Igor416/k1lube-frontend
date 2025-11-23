import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import { useProducts, useWindow } from "../hooks";
import { Image } from "../utils";
import { Link } from "react-router-dom";

export function Products() {
  const products = useProducts()
  const isMobile = useWindow()

  return <>
    <Container>
      <Grid2 container spacing={4}>
        {products.map((product, i) => <Grid2 key={i} size={isMobile ? 6 : 4}>
          <Link to={`/product/${product.slug}`} style={{textDecoration: 'none', color: 'black'}}>
            <Stack gap={2}>
              <Image path={product.photo.path} name={product.photo.name} />
              <Stack sx={{px: isMobile ? 1 : 8}}>
                <Typography variant='h6' textAlign='center'>{product.name}</Typography>
                <Typography textAlign='center' sx={{color: 'rgb(102, 102, 102)'}}>{product.viscosity.join(', ')}</Typography>
              </Stack>
            </Stack>
          </Link>
        </Grid2>)}
      </Grid2>
    </Container>
    <Box></Box>
  </>
}