import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { Image } from "../../utils";
import { useWindow } from "../../hooks";

export function Partners() {
  const isMobile = useWindow()

  const images = [
    'Handle Parts',
    'Keyset Parts',
    'F/Filler Lid Parts'
  ]

  const hrefs = ['https://www.samboant.com/', 'http://www.bogoap.com/']

  return <>
    <Container>
      <Stack gap={4}>
        <Typography variant='h4' textAlign='center' sx={{fontWeight: 'bold'}}>Глобальные партнеры и объекты</Typography>
        <Typography textAlign='center'>
          TWC сотрудничает с Sambo A&T и Bogo AP, чтобы покорить зарубежный рынок<br />
          запчастей для автомобилей с глобальными партнерами.
        </Typography>
        <Stack gap={4} direction={isMobile ? 'column' : 'row'}>
          {images.map((item, i) => <Box sx={{flex: 1, position: 'relative'}} key={i}>
            <Image path='photos/' name={`partners${i + 1}`} sx={{width: '100%'}} />
            <Typography
              color='white'
              textAlign='center'
              variant='h5'
              sx={{position: 'absolute', left: 0, width: '100%', top: '50%', transform: 'translateY(-50%)', fontWeight: 'bold'}}
            >
              {item}
            </Typography>
          </Box>)}
        </Stack>
        <Stack gap={2} sx={{border: '1px solid rgb(219, 219, 219)'}}>
          <Stack direction={isMobile ? 'column' : 'row'} gap={4} sx={{p: 4, justifyContent: 'center', alignItems: 'center'}}>
            {hrefs.map((href, i) => <a key={i} href={href} target='_blank' rel="noreferrer">
              <Image path='photos/' name={`partners-brand${i + 1}`} />
            </a>)}
          </Stack>
          <Divider />
          <Image path='photos/' name='partners-map' />
        </Stack>
        <Typography>
          TWC пионерит зарубежный рынок A/S вместе с Sambo A&T. Sambo A&T является одним из крупных аффилированных предприятий Sambo Motors. Sambo Motors управляет 14 филиалами, включая 6 в стране и 6 за рубежом. Основные группы Sambo Motors производят автомобильные трансмиссионные системы, системы подачи топлива для двигателей, пластиковые инъекции для интерьеров и экстерьеров, редукторы и тюнинговые продукты для электрических автомобилей для Hyundai, Kia, GM и глобальных автопроизводителей. В 2023 году объем продаж Sambo Motors Group превысил 1,5 миллиарда долларов США.
        </Typography>
      </Stack>
    </Container>
    <Box></Box>
  </>
}