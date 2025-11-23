import { Container, Stack, Typography, useTheme } from "@mui/material";
import { Image, BackgroundImage } from "../../../utils";
import { useWindow } from "../../../hooks";

export function Testimonials() {
  const theme = useTheme()
  const isMobile = useWindow()

  const reviews = [
    {
      text1: "Корейские смазочные материалы, созданные с использованием базовых масел групп III, IV, V и добавок мирового уровня, разработанные с уверенностью, что они превосходят по качеству и эффективности продукты глобальных компаний.",
      title: "Korean Lube",
      text2: "Доктор Бо-Хун Ким<br />Университет<br />Техаса в Арлингтоне"
    },
    {
      text1: "Подлинный корейский смазочный материал, созданный из базовых масел и добавок высочайшего качества. Превосходит уровень технологий Кореи и соответствует высочайшим стандартам, используемым в японских автомобилях и экспортной строительной технике.",
      title: "Japanese Lube",
      text2: "Доктор Хитоши Хамагучи<br />Диплом о членстве<br />Имперский колледж, Лондон"
    },
    {
      text1: "Я использовал K1 Lube после оригинального продукта Hyundai Motor Company, и он улучшил экономию топлива и снизил уровень шума. Корейские смазочные материалы подходят для корейских автомобилей. Я уверен, что их производит компания, выпускающая запчасти для автомобилей Hyundai/Kia.",
      title: "Hyundai",
      text2: "Владелец автомобиля"
    },
    {
      text1: "Содержит базовые масла высочайшего качества: PAO группы IV и эфиры группы V. Это повышает тишину работы автомобиля, увеличивает срок службы моторного масла и позволяет экономить $200 на топливе каждый квартал.",
      title: "PAO/Ester",
      text2: "Пользователь продукта"
    }
  ]


  return <BackgroundImage brightness={23} sx={{ backgroundSize: isMobile ? 'cover' :'fit' }} url='paralax/home1.png'>
    <Container sx={{
      [theme.breakpoints.up('lg')]: {
        maxWidth: 1200
      }
    }}>
      <Stack gap={8} sx={{py: 16, color: 'white'}}>
        <Typography variant='h3' textAlign='center' sx={{fontWeight: 'bold'}} color='white'>Отзывы</Typography>
        <Stack gap={4} direction={isMobile ? 'column' : 'row'} sx={{justifyContent: 'center'}}>
          {reviews.map((review, i) => <Stack
            key={i}
            gap={2}
            sx={{flex: 1, p: 3, border: '1px solid white', backgroundColor: 'rgba(255, 255, 255, 0.1)'}}
          >
            <Typography variant='body2'>“{review.text1}”</Typography>
            <Stack gap={2} direction='row' sx={{alignItems: 'flex-start'}}>
              <Image path='photos/' name={`review${i + 1}`} sx={{width: 64, aspectRatio: 1, borderRadius: '50%'}} />
              <Stack sx={{ms: 2}}>
                <Typography variant='h6'>{review.title}</Typography>
                <Typography variant='body2'>
                  <span dangerouslySetInnerHTML={{__html: review.text2}}></span>
                </Typography>
              </Stack>
            </Stack>
          </Stack>)}
        </Stack>
      </Stack>
    </Container>
  </BackgroundImage>
}