import { Container, Stack, Typography, Grid2, Box } from "@mui/material";
import { BackgroundImage } from "../utils";
import { useWindow } from "../hooks";

export function VisionMission({url, brightness = 100, grid = true}: {url: string, brightness?: number, grid?: boolean}) {
  const rectangles = [
    {
      title: "Видение",
      text: "Сделать мир более гладким с помощью технологий."
    },
    {
      title: "Миссия",
      text: "Стать новым стандартом корейских смазочных материалов и химикатов."
    },
    {
      title: "Ценности",
      text: "С помощью передовых технологий стремиться к максимальному уровню удовлетворенности и эффективности с автомобилями и оборудованием наших клиентов."
    }
  ]  

  const icons = [
    {
      text: "Экологичность и чистота",
      path: "M41.867 20.267a36.569 36.569 0 0 0 4.8-11.933C48.333 16.666 53.333 24.666 60 30s10 11.667 10 18.334A23.267 23.267 0 0 1 30.3 64.9m-6.967-12.3c7.334 0 13.334-6.1 13.334-13.5 0-3.867-1.9-7.533-5.7-10.633-3.8-3.1-6.667-7.7-7.634-12.533-.966 4.833-3.8 9.466-7.633 12.533S10 35.267 10 39.1c0 7.4 6 13.5 13.333 13.5Z"
    },
    {
      text: "Мощные характеристики",
      path: "M43.332 6.667 13.644 42.292c-1.163 1.395-1.744 2.093-1.753 2.682-.008.512.22 1 .619 1.321.458.37 1.366.37 3.182.37H40l-3.333 26.667 29.688-35.626c1.163-1.395 1.744-2.093 1.753-2.682.008-.512-.22-1-.619-1.322-.458-.37-1.366-.37-3.183-.37H40l3.333-26.666Z"
    },
    {
      text: "Долговечность и экономия топлива",
      path: "M73.33 40c0 18.41-14.923 33.333-33.333 33.333C21.587 73.333 6.664 58.41 6.664 40m66.667 0c0-18.41-14.924-33.334-33.334-33.334M73.331 40h-8.334M6.664 40c0-18.41 14.924-33.334 33.333-33.334M6.664 40h8.333m25-33.334V15m23.595 1.666L44.997 35m18.595 28.595-.68-.68c-2.306-2.306-3.459-3.46-4.804-4.284a13.335 13.335 0 0 0-3.854-1.596c-1.535-.368-3.165-.368-6.427-.368h-15.66c-3.26 0-4.892 0-6.426.368-1.36.327-2.661.865-3.854 1.597-1.346.824-2.499 1.977-4.805 4.283l-.68.68m0-46.928 5.789 5.788M46.664 40a6.667 6.667 0 1 1-13.333 0 6.667 6.667 0 0 1 13.333 0Z"
    },
    {
      text: "Основное масло и защита",
      path: "M30.003 38.334 36.669 45l15-15m15 10c0 16.362-17.846 28.261-24.34 32.05-.738.43-1.107.646-1.627.757a3.793 3.793 0 0 1-1.398 0c-.521-.111-.89-.327-1.628-.757-6.494-3.788-24.34-15.688-24.34-32.05V24.06c0-2.665 0-3.998.436-5.143a6.666 6.666 0 0 1 1.823-2.63c.92-.811 2.167-1.279 4.662-2.215L38.13 7.37c.693-.26 1.04-.39 1.396-.441.316-.046.637-.046.953 0 .357.051.703.181 1.396.441l17.873 6.702c2.495.936 3.743 1.404 4.662 2.214a6.665 6.665 0 0 1 1.823 2.63c.436 1.146.436 2.479.436 5.144V40Z"
    }
  ]  

  const isMobile = useWindow()

  return <BackgroundImage brightness={brightness} sx={{ backgroundSize: 'cover' }} url={url}>
    <Container>
      <Stack gap={8} sx={{py: 16, color: 'white'}}>
        <Typography variant='h3' textAlign='center' sx={{fontWeight: 'bold'}}>Мировозрение & Миссия</Typography>
        <Typography textAlign='center'>
          В TWC (The W Corporation) наша цель — сделать мир более плавным с помощью технологий.<br />
          Наша компания стремится производить высококачественные смазочные жидкости и химические вещества для снижения трения в наших устройствах,<br />
          уменьшения шума и экономии энергии в мире. В этой связи мы хотим развивать<br />
          передовые химические технологии Кореи и стать новым стандартом для Кореи.
        </Typography>
        <Grid2 container spacing={2}>
          {rectangles.map((rectangle, i) => <Grid2 key={i} size={
            isMobile ? 12 : grid ? (i === rectangles.length - 1 ? 12 : 6) : 4
          }>
            <Stack sx={{
              p: 3,
              border: '1px solid white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              height: '100%',
              justifyContent: 'space-between'
            }} gap={grid ? 0 : 2}>
              <Typography textAlign='center' variant='h5' sx={{fontWeight: 600}}>{rectangle.title}</Typography>
              <Typography textAlign='center'>
                <span dangerouslySetInnerHTML={{__html: rectangle.text}}></span>
              </Typography>
              {!grid && i < rectangles.length - 1 && <Box></Box>}
            </Stack>
          </Grid2>)}
        </Grid2>
        <Grid2 container spacing={2}>
          {icons.map((icon, i) => <Grid2 key={i} size={isMobile ? 6 : 3}>
            <Stack gap={4} key={i} sx={{alignItems: 'center'}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" height="80" width="80">
                <g>
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="4" stroke="#ffffff" d={icon.path} fill="none"></path>
                </g>
              </svg>
              <Typography textAlign='center' variant='h6'>{icon.text}</Typography>
            </Stack>
          </Grid2>)}
        </Grid2>
      </Stack>
    </Container>
  </BackgroundImage>
}