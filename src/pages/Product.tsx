import { Box, Container, Divider, Grid2, Stack, Typography } from "@mui/material";
import { useProduct, useWindow } from "../hooks";
import { ChevronLeft, Download } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Image, Document } from "../utils";
import { useMemo } from "react";

export function Product() {
  const product = useProduct()
  const isMobile = useWindow()

  const blocks = useMemo(() => {
    if (product) {
      const blocks = [{ title: 'Описание', item: <Typography variant='h6'>{product.desc}</Typography> }]
      if (product.viscosity.length) {
        blocks.push({ title: 'Вязкость', item: <Grid2 container spacing={2} sx={{width: '100%'}}>
          {product.viscosity.map((item, i) => <Grid2 key={i} size={isMobile ? 6 : 3}>
            <Box sx={{px: 4, py: 1, backgroundColor: 'black', color: 'white'}}>
              <Typography>{item}</Typography>
            </Box>
          </Grid2>)}
        </Grid2>})
      }
      if (product.catalog) {
        blocks.push({ title: 'Скачать каталог', item: <Document name={product.catalog}>
          <Stack direction='row' gap={4} sx={{px: 4, py: 2, backgroundColor: 'rgb(77, 110, 137)'}}>
            <Typography color='white'>Скачать PDF</Typography>
            <Download sx={{color: 'white'}} />
          </Stack>
        </Document>})
      }
      if (product.applications) {
        blocks.push({ title: 'Применение', item: <Typography>
          <span dangerouslySetInnerHTML={{__html: product.applications.replaceAll('\n', '<br />')}}></span>
        </Typography>})
      }
      if (product.standards) {
        blocks.push({ title: 'Стандарты производительности', item: <Typography>
          <span dangerouslySetInnerHTML={{__html: product.standards.replaceAll('\n', '<br />')}}></span>
        </Typography>})
      }
      if (product.benefits.length) {
        blocks.push({ title: 'Преимущества для клиентов', item: <Stack gap={2}>
          {product.benefits.map((benefit, i) => <Stack>
            <Typography variant='h6'>{benefit.title}</Typography>
            <Typography>{benefit.text}</Typography>
          </Stack>)}
        </Stack>})
      }
      if (product.uniqueFeatures) {
        blocks.push({ title: 'Уникальные возможности', item: <Typography>
          <span dangerouslySetInnerHTML={{__html: product.uniqueFeatures.replaceAll('\n', '<br />')}}></span>
        </Typography>})
      }
      return blocks
    }
  }, [isMobile, product])

  return <>
    {product && <Container>
      <Stack gap={8}>
        <Link to={`/products/${product.category.name}`} style={{color: 'black', textDecoration: 'none'}}>
          <Stack gap={1} direction='row' sx={{alignItems: 'center'}}>
            <ChevronLeft />
            <Typography variant='h6' sx={{fontWeight: 'bold'}}>{product.category.label}</Typography>
          </Stack>
        </Link>
        <Stack sx={{alignItems: 'center'}}>
          <Image path={product.photo.path} name={product.photo.name} sx={{border: '1px solid rgb(219, 219, 219)', width: '50%'}} />
        </Stack>
        <Stack gap={2}>
          <Typography variant='h4' sx={{fontWeight: 'bold'}}>{product.name}</Typography>
          <Typography variant='h6'>{product.shortDesc}</Typography>
        </Stack>
        <Divider />
        {blocks?.map((block, i) => <Stack key={i} gap={2} sx={{alignItems: 'flex-start'}}>
          <Typography variant='h5' sx={{fontWeight: 'bold'}}>{block.title}</Typography>
          {block.item}
        </Stack>)}
      </Stack>
    </Container>}
    <Box></Box>
  </>
}