import { Box, Container, Stack, Typography } from '@mui/material';
import { Form } from '../components';

export function Partnership() {
  return <>
    <Container>
      <Stack gap={4}>
        <Typography variant='h4' textAlign='center' sx={{fontWeight: 'bold'}}>
          ХОТИТЕ СТАТЬ ПАРТНЕРОМ-ДИСТРИБЬЮТОРОМ?
        </Typography>
        <Typography textAlign='center'>
          ООО Класс Ойл развивает сеть профессиональных дистрибьюторов, осуществляющих поставки смазочных материалов и предоставляющих клиентам сопуствующие услуги на высоком уровне.<br />
          Если вы заинтересованы в том, чтобы стать нашим партнером,<br />
          пожалуйста, используйте форму ниже, чтобы рассказать нам  о себе.
        </Typography>
        <Form title='Партнерство' type='P' />
      </Stack>
    </Container>
    <Box></Box>
  </>
}