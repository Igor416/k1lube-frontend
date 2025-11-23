import { Container, Stack, Typography } from "@mui/material";
import { KoreaIcon, EsterIcon, PAOIcon } from "../../../components";
import { Image } from "../../../utils";
import { useWindow } from "../../../hooks";

export function Control() {
  const isMobile = useWindow()
  const complexIcons = [<KoreaIcon />, <EsterIcon />, <PAOIcon />]
  const components = [
    {
      title: "Синтетическое базовое масло Кореи",
      text: "Корея является крупнейшим в мире производителем высококачественного базового масла группы GⅢ с хорошими свойствами по испаряемости, характеристикам вязкости при низких и высоких температурах, а также устойчивости к окислению."
    },
    {
      title: "Эфирный органический модификатор трения",
      text: "Органический модификатор трения снижает трение и экономит энергию, уменьшая выбросы углерода и являясь экологически безопасным."
    },
    {
      title: "Технология повышения PAO",
      text: "Технология PAO Boosting от K1 Lube обеспечивает мощный и комфортный опыт вождения, улучшая экономию топлива и увеличивая интервал замены масла."
    }
  ]  

  return <Container>
    <Stack gap={4}>
      <Typography variant='h4' textAlign='center' sx={{fontWeight: 'bold'}}>K1 Lube Engineered Control</Typography>
      <Typography variant='h6' textAlign='center'>
        Ведущие специалисты Азии в области производства смазочных материалов делятся многолетним опытом и экспертизой,
        предоставляя технически оптимизированные решения для смазочных материалов и химии
      </Typography>
      <Image path='photos/' name='oil-fluid' />
      <Stack gap={2} direction={isMobile ? 'column' : 'row'}>
        {components.map((component, i) => <Stack
          key={i}
          gap={2}
          sx={{flex: 1, p: 3, alignItems: 'center', border: '1px solid rgb(219, 219, 219)'}}
        >
          {complexIcons[i]}
          <Typography variant='h6' textAlign='center' sx={{fontWeight: 'bold'}}>{component.title}</Typography>
          <Typography textAlign='center'>{component.text}</Typography>
        </Stack>)}
      </Stack>
    </Stack>
  </Container>
}