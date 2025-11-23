import { ReactNode } from "react";
import Box, { BoxProps } from "@mui/material/Box";

//const root = 'http://127.0.0.1:8000/static/'
const root = '/static/'
const assetsRoot = root + 'assets/'
const documentRoot = root + 'documents/'

interface ImageProps extends BoxProps {
  path: string,
  name: string,
  brightness?: number
}

export function Image({path, name, brightness=100, ...props}: ImageProps) {
  return <Box
    component='img'
    src={`${path.startsWith('http') ? '' : assetsRoot}${path}${name}${name.includes('.') ? '' : '.png'}`}
    alt={name}
    {...props}
    sx={{filter: `brightness(${brightness}%)`, display: 'block', ...props.sx}}
  />
}

interface BackgroundImageProps extends BoxProps {
  url: string,
  brightness?: number
}

export function BackgroundImage({url, brightness=100, ...props}: BackgroundImageProps) {
  return <Box sx={{
    position: 'relative',
    backgroundImage: `url('${url.startsWith('http') ? '' : assetsRoot}${url}')`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
    ...props.sx
  }}>
    <Box sx={{zIndex: 1, position: 'absolute', opacity: 1 - (brightness / 100), backgroundColor: 'black', width: '100%', height: '100%'}}></Box>
    <Box {...props} sx={{zIndex: 2, position: 'relative'}}>
      {props.children}
    </Box>
  </Box>
}

interface DocumentProps {
  name: string,
  children: ReactNode | ReactNode[]
}

export function Document({name, children}: DocumentProps) {
  return <a href={name.startsWith('http') ? name : documentRoot + name} style={{textDecoration: 'none'}} target='_blank' rel='noreferrer'>
    {children}
  </a>
}