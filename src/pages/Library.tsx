import { Box, Container, Stack, Typography } from "@mui/material";
import { Image, Document } from "../utils";
import { Download } from "@mui/icons-material";
import { useWindow } from "../hooks";

export function Library() {
  const isMobile = useWindow()

  const data = [
    {
      title: 'K1 Lube Каталог',
      href: 'K1 Lube Catalog.pdf'
    },
    {
      title: 'K1 Lube Брошура',
      href: 'K1 Lube Brochure.pdf'
    },
  ]
  
  return <>
    <Container>
      <Stack direction={isMobile ? 'column' : 'row'} gap={isMobile ? 0 : 4} sx={{justifyContent: 'center'}}>
        {data.map((item, i) => <Stack sx={{p: isMobile ? 8 : 0}} key={i}>
          <Image path='photos/' name='library1' />
          <Typography variant='h6' textAlign='center' sx={{fontWeight: 'bold'}}>{item.title}</Typography>
          <Document name={item.href}>
            <Stack direction='row' gap={4} sx={{px: 4, py: 2, backgroundColor: 'rgb(50, 65, 88)'}}>
              <Typography color='white'>Скачать PDF</Typography>
              <Download sx={{color: 'white'}} />
            </Stack>
          </Document>
        </Stack>)}
      </Stack>
    </Container>
    <Box></Box>
  </>
}