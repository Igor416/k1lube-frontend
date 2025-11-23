import { Container, Stack, Typography } from "@mui/material";
import { Image } from "../../../utils";

export function Packages() {
  return <Container>
    <Stack gap={4}>
      <Typography variant='h4' textAlign='center' sx={{fontWeight: 'bold'}}>K1 Lube - Типы упаковки</Typography>
      <Image path='photos/' name='packages' />
    </Stack>
  </Container>
}