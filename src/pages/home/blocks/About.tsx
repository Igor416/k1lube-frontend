import { Container, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useWindow } from "../../../hooks";

export function About() {
  const isMobile = useWindow()

  return <Container>
    <Stack gap={4}>
      <Stack direction='row' sx={{alignItems: 'center'}}>
        <Typography variant='h4' sx={{fontWeight: 'bold'}}>О Компании</Typography>
        {!isMobile && <Link to='/company-about-twc'>
          <Button sx={{mx: 8, px: 6, backgroundColor: 'black', borderRadius: 0}} variant='contained'>
            <Typography variant='h6'>Просмотр</Typography>
          </Button>
        </Link>}
      </Stack>
      <Typography variant='h6'>Компания The W Corporation продолжает развиваться как компания по производству смазочных материалов и химикатов,<br />основанная на конкурентоспособности мирового уровня с экспертами в области энергетики и химии.</Typography>
      <Typography>TWC предоставляет индивидуализированные решения "Общее обслуживание смазочных материалов и химикатов" для клиентов, делясь опытом<br />специалистов по смазочным материалам через исследования и разработки, а также сотрудничество с мировыми производителями базовых масел на глобальном уровне.</Typography>
      {isMobile && <Link to='/company-about-twc'>
        <Button sx={{mx: isMobile ? 0 : 8, px: 6, backgroundColor: 'black', borderRadius: 0}} variant='contained'>
          <Typography variant='h6'>Просмотр</Typography>
        </Button>
      </Link>}
    </Stack>
  </Container>
}