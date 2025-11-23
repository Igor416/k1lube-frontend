import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { Image } from "../../utils";
import { VisionMission } from "../../components";

export function About() {
  const theme = useTheme()

  return <>
    <Container>
      <Stack gap={8}>
        <Typography variant='h6' textAlign='center'>
          TWC предоставляет индивидуализированные «Полные решения для смазочных жидкостей и химии»<br />
          благодаря обмену опытом специалистов по смазочным жидкостям через исследования и разработки<br />
          и сотрудничество с крупными мировыми производителями базовых масел.
        </Typography>
        <Box position='relative' sx={{width: '100%'}}>
          <Image path='photos/' name='about1' sx={{width: '100%', [theme.breakpoints.down('lg')]: {aspectRatio: 2}}} />
          <Typography sx={{position: 'absolute', width: '100%', top: '50%', transform: 'translateY(-50%)'}} color='white' textAlign='center'>
            Компания The W Corporation продолжает расти как компания по производству смазочных жидкостей и химии,<br />
            основываясь на ведущей в отрасли конкурентоспособности с экспертами в области энергетики и химии.
          </Typography>
        </Box>
      </Stack>
    </Container>
    <VisionMission url='paralax/about1.png' brightness={65} grid={false} />
  </>
}