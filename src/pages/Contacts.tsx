import { Box, Container, Stack, Typography } from "@mui/material";
import { Form } from "../components";
import { Call, Mail } from "@mui/icons-material";

export function Contacts() {
  const blocks = [
    [
      {
        title: "Позвоните нам",
        text: "8 800 101 28 41",
        icon: <Call sx={{fontSize: 40}} />
      },
      {
        title: "Напишите нам",
        text: "oil@k1lube.ru",
        icon: <Mail sx={{fontSize: 40}} />
      },
      {
        title: "Оставьте нам сообщение",
        text: "form",
        icon: <Call sx={{fontSize: 40}} />
      }
    ],
    [
      {
        title: "Адрес электронной почты",
        text: "class.oil@yandex.com",
        icon: <Mail sx={{fontSize: 40}} />
      },
      {
        title: "Контактный телефон",
        text: "+79773326333 / +79011853888",
        icon: <Call sx={{fontSize: 40}} />
      }
    ]
  ];

  return <>
    <Container>
      <Stack gap={8}>
        <Typography variant='h6' textAlign='center' sx={{fontWeight: 'bold'}}>
          ООО «Класс Ойл» - официальный представитель корейского бренда «K1 Lube» компании TWC (The W Corporation) на территории РФ.<br />
          Предоставляем индивидуальный подход и полный спектр услуг по смазочным материалам для каждого нашего партнёра.<br />
          Удобные программы сотрудничества, выгодные условия поставок и профессиональная техническая поддержка.<br />
          Мы всегда рады услышать мнение наших клиентов.
        </Typography>
        {blocks[0].map((block, i) => <Stack key={i} sx={{alignItems: 'center'}}>
          {
            block.text === 'form'
            ?
            <Form title={block.title} type='A' />
            :
            <Stack gap={2} sx={{width: '50%', border: '1px solid rgb(219, 219, 219)', alignItems: 'center', p: 2}}>
              {block.icon}
              <Typography variant='h6' textAlign='center'>{block.title}</Typography>
              <Typography variant='h5' textAlign='center' sx={{fontWeight: 'bold'}}>{block.text}</Typography>
            </Stack>
          }
        </Stack>)}
        <Typography variant='h6' sx={{fontWeight: 'bold'}}>
          Юридический адрес/почтовый адрес
        </Typography>
        <Typography>Г.МОСКВА, 117133, МОСКВА УЛ. АКАДЕМИКА ВАРГИ Д.8 К.1</Typography>
        <Typography>ИНН / КПП: 9728129180 / 772801001; ОГРН: 1247700241645</Typography>
        {blocks[1].map((block, i) => <Stack key={i} sx={{alignItems: 'center'}}>
          <Stack gap={2} sx={{width: '50%', border: '1px solid rgb(219, 219, 219)', alignItems: 'center', p: 2}}>
            {block.icon}
            <Typography variant='h6' textAlign='center'>{block.title}</Typography>
            <Typography variant='h5' textAlign='center' sx={{fontWeight: 'bold'}}>{block.text}</Typography>
          </Stack>
        </Stack>)}
      </Stack>
    </Container>
    <Box></Box>
  </>
}