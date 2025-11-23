import { Box, Container, Grid2, Stack, Typography, useTheme } from "@mui/material";
import { Image } from "../../utils";
import { Korea as KoreaBlock } from "../home/blocks";
import { useWindow } from "../../hooks";

export function Korea() {
  const isMobile = useWindow()
  const theme = useTheme()

  const data = [
    {
      title: "Группа I",
      text: "Базовые масла группы I подвергаются растворительному рафинированию — более простому процессу очистки. Это наиболее экономичные базовые масла на рынке."
    },
    {
      title: "Группа II",
      text: "Изготавливаются методом гидрокрекинга — более сложного процесса очистки. Базовые масла группы II имеют лучшие антиокислительные свойства по сравнению с группой I. Также они имеют более светлый цвет. Базовые масла группы II становятся очень распространенными на рынке сегодня."
    },
    {
      title: "Группа III",
      text: "Эти масла подвергаются интенсивному гидрокрекингу. Этот более длительный процесс направлен на получение более чистого базового масла. Хотя масла группы III изготовлены из нефти, их иногда называют синтезированными углеводородами или маслами на основе синтетической технологии."
    },
    {
      title: "Группа IV",
      text: "Базовые масла группы IV — это поли-α-олефины (PAO). Эти синтетические базовые масла изготавливаются через процесс синтезирования. Они имеют гораздо более широкий температурный диапазон и идеально подходят для использования в условиях экстремальных холодов и высоких температур."
    },
    {
      title: "Группа V",
      text: "Базовые масла группы V классифицируются как все другие базовые масла, включая фосфатные эстеровые масла, PAG, полиольэстер, био-смазочные жидкости. Эти базовые масла иногда смешиваются с другими маслами для улучшения их свойств. Эстеры — это распространенные базовые масла группы V, используемые в различных формах смазочных материалов для улучшения свойств существующего масла."
    }
  ]  

  const charts = [
    {
      title: "Отличные свойства при низких температурах",
      text: "Предварительные холодные свойства масла Korea 6 cSt<br />(Gr-III) по сравнению с другими (Gr-I или II)"
    },
    {
      title: "Высокая устойчивость к окислению",
      text: "Korea 6 cSt (Gr-III) показывает лучшую устойчивость к окислению<br />по сравнению с другими (Gr-I или II)"
    },
    {
      title: "Низкая летучесть",
      text: "Предварительные холодные свойства масла Korea 6 cSt<br />(Gr-III) по сравнению с другими (Gr-I или II)"
    }
  ]  

  return <>
    <Container sx={{
      [theme.breakpoints.up('lg')]: {
        maxWidth: 1200
      }
    }}>
      <Stack gap={4}>
        <Typography variant='h4' textAlign='center' sx={{fontWeight: 'bold'}}>Korea Synthetic Base Oil</Typography>
        <Typography variant='h6' textAlign='center'>
          Корея имеет полный ассортимент базовых масел группы Ⅰ/Ⅱ/Ⅲ в Южной Корее, а корейские нефтехимические заводы<br />
          занимают позицию мировых производителей, поставляющих высококачественные базовые масла<br />
          на глобальный рынок, включая Азию, Ближний Восток, ЕС и Северную Америку.
        </Typography>
        <Image path='photos/' name='korea1' />
        <Grid2 container spacing={4}>
          {data.map((item, i) => <Grid2 key={i} size={isMobile ? 12 : i === 1 ? 8 : 4}>
            <Stack gap={2} sx={{p: 3, height: '100%', color: 'white', backgroundColor: 'rgb(40, 38, 38)'}}>
              <Typography variant='h5' sx={{fontWeight: 'bold'}}>{item.title}</Typography>
              <Typography>{item.text}</Typography>
            </Stack>
          </Grid2>)}
        </Grid2>
        <Typography variant='h5' textAlign='center' sx={{fontWeight: 'bold'}}>
          Корея является крупнейшим в мире производителем высококачественного<br />
          базового масла GⅢ с тремя отличными свойствами
        </Typography>
        <Stack direction={isMobile ? 'column' : 'row'}>
          {charts.map((item, i) => <Stack gap={2} key={i} sx={{flex: 1, p: 3}}>
            <Typography textAlign='center' sx={{fontWeight: 'bold'}}>{item.title}</Typography>
            <Typography variant='body2' textAlign='center'>
              <span dangerouslySetInnerHTML={{__html: item.text}}></span>
            </Typography>
            <Image path='photos/' name={`korea-chart${i + 1}`} />
          </Stack>)}
        </Stack>
      </Stack>
    </Container>
    <KoreaBlock brightness={70} url='paralax/korea1.png' />
    <Container>
      <Stack gap={4}>
        <Typography variant='h5' textAlign='center' sx={{fontWeight: 'bold'}}>Global No.1 Base oil manufacturers in Korea</Typography>
        <Typography textAlign='center'>
          Мировые лидеры по производству базовых масел в Корее: GS Kixx LUBO, SK Yubase, S-oil Ultra-S, HD HYUNDAI SHELL Base Oil<br />
          Корейские базовые масла являются основными продуктами базовых масел в Корее.<br />
          Это базовые масла с хорошими свойствами с точки зрения испаряемости, характеристик вязкости при низких и высоких температурах,<br />
          а также устойчивости к окислению.
        </Typography>
        <Stack direction={isMobile ? 'column' : 'row'} gap={2}>
          {[2, 3].map(i => <Stack key={i} direction='row' sx={{flex: 1, p: 2, border: '1px solid rgb(219, 219, 219)', justifyContent: 'center'}}>
            <Image path='photos/' name={`korea${i}`} sx={{width: '100%'}} />
          </Stack>)}
        </Stack>
      </Stack>
    </Container>
    <Box></Box>
  </>
}