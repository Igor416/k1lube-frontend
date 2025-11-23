import { Box, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function Footer() {
  return <Box sx={{backgroundColor: 'rgb(47, 46, 46)', color: 'white'}}>
    <Container sx={{py: 4}}>
      <Stack gap={4}>
        <Stack>
          <Typography>Г.МОСКВА, 117133, МОСКВА УЛ. АКАДЕМИКА ВАРГИ Д.8 К.1</Typography>
          <Typography>Телефон: +79773326333 / +79011853888 | Email: oil@k1lube.ru / сlass.oil@yandex.com</Typography>
        </Stack>
        <Typography variant='body2' color='#A0A09F'>
          Вся информация размещенная pдесь взята с сайта <Link to='https://k1lube.com' style={{color: 'white', textDecoration: 'none'}}>k1Lube.com</Link> и компания ООО Класс Ойл не несет ответственности за возможные неточности которые могли возникнуть в результате неправильного перевода. Для получения более точной информации потребитель должен обращаться в ООО Класс Ойл
        </Typography>
        <Typography variant='body2' color='#A0A09F'>© ООО Класс Ойл. Все права зарезервированы.</Typography>
      </Stack>
    </Container>
  </Box>
}