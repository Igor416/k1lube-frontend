import { Container, Stack, Typography } from "@mui/material";
import { Image } from '../../../utils';

export function Start() {
  const data = [
    {
      text1: "Смазочный бренд №1 в Корее — K1 Lube",
      text2: "K1 Lube получил премию за удовлетворенность потребителей в Корее 2023 года<br />организованную JoongAng Ilbo, одной из ведущих газет Кореи.",
      image: "certificates"
    },
    {
      text1: "Качество K1 Lube",
      text2: "Оцените качество K1 Lube, который использует корейские базовые масла и добавки мирового уровня<br />поставляемые для крупнейших автопроизводителей, экспортеров строительной техники и мировых производителей.",
      image: "brands"
    }
  ]  

  return <Container>
    <Stack gap={12}>
      {data.map((data, i) => <Stack key={i} gap={2}>
        <Typography textAlign='center' variant='h4' sx={{fontWeight: 'bold'}}>{data.text1}</Typography>
        <Typography textAlign='center' variant='h6'>
          <span dangerouslySetInnerHTML={{__html: data.text2}}></span>
        </Typography>
        <Image path='photos/' name={data.image} />
      </Stack>)}
    </Stack>
  </Container>
}