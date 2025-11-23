import { Stack, TextField, Typography } from "@mui/material"

interface InputProps {
  id: string,
  value: string,
  setter: (val: string) => void,
  label: string,
  multiline?: boolean
}

export function Input({id, value, setter, label, multiline = false}: InputProps) {
  return <Stack sx={{flex: 1}} gap={3}>
    <Typography variant='h6'>{label}</Typography>
    <TextField 
      id={id}
      value={value}
      onChange={e => setter(e.target.value)}
      variant='standard'
      sx={{
        fontSize: '1.25rem',
        '& .css-5h82ro-MuiInputBase-root-MuiInput-root::after, .css-ed63ti-MuiInputBase-root-MuiInput-root::after': {
          borderColor: 'black'
        }
      }}
      multiline={multiline}
    />
  </Stack>
}