import { Grid2, Typography, Stack, Button, Alert, Snackbar } from "@mui/material"
import { useState } from "react"
import { Input } from "../utils"
import { useWindow } from "../hooks"
import { IMessage } from "../JSONTypes"
import { sendMessage } from "../api"

interface FormProps {
  title: string,
  type: 'A' | 'P'
}

export function Form({title, type}: FormProps) {
  const isMobile = useWindow()
  const [data, setData] = useState<IMessage>({
    type: type,
    contactPerson: '',
    jobTitle: '',
    phone: '',
    fax: '',
    email: '',
    message: ''
  })
  const [sendingFinished, finishSending] = useState(false)

  return <Grid2 container spacing={6} sx={{p: 4, border: '1px solid rgb(219, 219, 219)'}}>
    <Grid2 size={12}>
      <Typography variant='h5' textAlign='center' sx={{fontWeight: 'bold'}}>{title}</Typography>
    </Grid2>
    <Grid2 size={isMobile ? 12 : 6}>
      <Input id='contact_person' value={data.contactPerson} setter={(t) => setData({...data, contactPerson: t})} label='Контактное лицо' />
    </Grid2>
    <Grid2 size={isMobile ? 12 : 6}>
      <Input id='jobTitle' value={data.jobTitle} setter={(t) => setData({...data, jobTitle: t})} label='Должность' />
    </Grid2>
    <Grid2 size={isMobile ? 12 : 6}>
      <Input id='phone' value={data.phone} setter={(t) => setData({...data, phone: t})} label='Номер телефона' />
    </Grid2>
    <Grid2 size={isMobile ? 12 : 6}>
      <Input id='fax' value={data.fax} setter={(t) => setData({...data, fax: t})} label='Факс' />
    </Grid2>
    <Grid2 size={12}>
      <Input id='email' value={data.email} setter={(t) => setData({...data, email: t})} label='Email' />
    </Grid2>
    <Grid2 size={12}>
      <Input multiline={true} id='message' value={data.message} setter={(t) => setData({...data, message: t})} label='Ваше сообщение' />
    </Grid2>
    <Grid2 size={12}>
      <Stack direction='row' alignItems={{justifyContent: 'center'}}>
        <Button
          onClick={sendingFinished ? () => {} : () => sendMessage(data).then(_ => finishSending(true))}
          sx={{px: 6, backgroundColor: 'black', borderRadius: 0}}
          variant='contained'
        >
          <Typography variant='h6'>Отправить</Typography>
        </Button>
      </Stack>
    </Grid2>
    <Snackbar open={sendingFinished} autoHideDuration={6000} onClose={() => finishSending(false)}>
      <Alert
        onClose={() => finishSending(false)}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
        Сообщение Отправлено
      </Alert>
    </Snackbar>
  </Grid2>
}