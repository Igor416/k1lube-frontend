import { Box, Container, Grid2, Stack, Typography, useTheme } from "@mui/material";
import { Image } from "../../utils";
import { useWindow } from "../../hooks";

export function Facility() {
  const isMobile = useWindow()
  const theme = useTheme()

  const images = [
    'Storage Tanks',
    '3~6L Package Line',
    'Control Room',
    'Blending Tanks',
    'Reaction Tank',
    '18L, 20L Package Line',
    '1L Package Line'
  ]

  const data = [
    {year: 1970, events: [
      "‘78 Основана компания Yusung Oil Co.,Ltd"
    ]},
    {year: 1980, events: [
      "‘84 Вступление в Ассоциацию производителей смазочных материалов Кореи",
      "‘84 Регистрация в отрасли нефтехимической переработки",
      "‘85 Техническое сотрудничество с FUCHS в Германии",
      "‘86 Становление членом Корейского научно-исследовательского института",
      "‘88 Получение сертификата KS M 2126 (Машинное масло)",
      "‘89 Регистрация в качестве поставщика Агентства оборонных закупок и KORAIL"
    ]},
    {year: 1990, events: [
      "‘92 Получение сертификата KS M 2129 (Гидравлическое масло)",
      "Получение сертификата KS M 2162 (Гидравлическое масло)",
      "‘93 Получение сертификатов KS M 2301 (Электрическое изолирующее масло), KS M 2173 (Режущий инструмент)",
      "‘94 Регистрация в качестве поставщика KEPCO",
      "Начало поставок продукции",
      "’98 Получение сертификата KS M 2121 (Масло внутреннего сгорания)",
      "’99 Получение сертификата KS M 2121 (Масло для турбин)",
      "Получение сертификата KS M 2127 (Масло для трансмиссий) и объединение с Zeus Oil & Chemicals Co., Ltd."
    ]},
    {year: 2000, events: [
      "‘02 Завершение строительства филиала в Инчхоне",
      "‘03 Основание центра исследований и разработок",
      "‘06 Регистрация патента №10-0665093",
      "‘07 Регистрация патента №10-0728714",
      "‘08 Регистрация как предприятия с венчурным капиталом"
    ]},
    {year: 2010, events: [
      "‘11 Завершение строительства производственных мощностей по выпуску смазочных материалов в Национальном промышленном комплексе Онсан",
      "’13 Внедрение немецкой технологии ML",
      "‘14 Завершение строительства завода в Онсане – синтетические химические реакторы",
      "‘15 Получение сертификатов KS M 2121 (Масло для внутреннего сгорания), KS M 2125 (Автоматическая трансмиссионная жидкость)",
      "‘16 Строительство дополнительных заводов на заводе в Онсане"
    ]}
  ]  

  return <>
    <Container>
      <Stack gap={4}>
        <Typography textAlign='center'>
          ZEUS, компания, специализирующаяся на смазочных материалах, занимает лидирующие позиции на современном рынке смазочных жидкостей уже 40 лет с момента своего основания,<br />
          предоставляя продукцию для Toyota Aisin, GM AC Delco, GS Caltex, Hyundai Heavy Industry,<br />
          Kumho petrochemical и Korea Electric Power Corporation
        </Typography>
        <Grid2 container spacing={2} columns={10}>
          {images.map((item, i) => <Grid2 key={i} size={i < 2 ? isMobile ? 10 : 5 : isMobile ? 5 : 2}>
            <Stack gap={2} sx={{p: 2, border: '1px solid rgb(219, 219, 219)'}}>
              <Image path='photos/' name={`facility${i + 1}`} />
              <Typography textAlign='center'>{item}</Typography>
            </Stack>
          </Grid2>)}
        </Grid2>
      </Stack>
    </Container>
    <Stack sx={{position: 'relative', alignItems: 'center', color: 'white', overflow: 'hidden'}}>
      <Image brightness={52} path='photos/' name='facility-bg' sx={{
        width: '100%',
        [theme.breakpoints.down('lg')]: {
          width: 'auto',
          height: '100%'
        }
      }} />
      <Stack sx={{position: 'absolute', top: 0, width: '100%', height: '100%', px: 2}}>
        <Typography variant='h4' textAlign='center' sx={{fontWeight: 'bold', my: isMobile ? 4 : 16}}>История</Typography>
        <Stack gap={isMobile ? 4 : 16} sx={{flex: 1, position: 'relative', overflow: 'hidden'}}>
          {!isMobile && <Box sx={{position: 'absolute', width: '1px', height: '100%', left: '50%'}}>
            <Box sx={{borderLeft: '1px dashed rgba(255, 255, 255, 0.4)', width: '100%', height: '100%'}}></Box>
          </Box>}
          {data.map((item, i) => <Stack
            gap={4}
            key={i}
            direction={i % 2 === 0 ? 'row' : 'row-reverse'}
            sx={{
              justifyContent: 'center',
              [theme.breakpoints.up('lg')]: {
                width: 'calc(50% + 9px)',
                alignSelf: i % 2 === 0 ? 'flex-start' : 'flex-end',
                justifyContent: 'flex-end'
              }
            }}
          >
            <Stack sx={{textAlign: isMobile ? 'center' : i % 2 === 0 ? 'end' : 'start'}} gap={2}>
              <Typography variant='h6' sx={{fontWeight: 'bold'}}>{item.year}</Typography>
              <Stack>
              {item.events.map((event, j) => <Typography key={j}>{event}</Typography>)}
              </Stack>
            </Stack>
            {!isMobile && <Box sx={{mt: 1}}>
              <svg data-bbox="20 20 160 160" viewBox="20 20 160 160" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill='white' d="M100 20c-44.181 0-80 35.819-80 80s35.819 80 80 80 80-35.819 80-80-35.819-80-80-80zm0 120.48c-22.351 0-40.48-18.128-40.48-40.48 0-22.351 18.128-40.479 40.48-40.479 22.351 0 40.479 18.128 40.479 40.479S122.351 140.48 100 140.48z"></path>
                </g>
              </svg>
            </Box>}
          </Stack>)}
        </Stack>
      </Stack>
    </Stack>
  </>
}