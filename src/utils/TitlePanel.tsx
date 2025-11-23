import { Box, useTheme } from "@mui/material"
import { FloatingText, Image } from "."
import { useWindow } from "../hooks"

interface TitlePanelProps {
  img: string,
  label: string
}

export function TitlePanel({img, label}: TitlePanelProps) {
  const theme = useTheme()
  const isMobile = useWindow()

  return <Box sx={{overflowX: 'hidden', position: 'relative', width: '100%'}}>
    <Image path='panels/' name={img} brightness={80} sx={{
      width: '100%',
      objectFit: 'cover',
      objectPosition: '50% 50%',
      [theme.breakpoints.down('lg')]: {
        aspectRatio: 2
      }
    }} />
    <FloatingText
      initState='translateY(-50%) translateX(15%)'
      finalState='translateY(-50%) translateX(0%)'
      variant={isMobile ? 'h4' : 'h2'}
      color='white'
      textAlign='center'
      sx={{
        top: '50%',
        textTransform: 'uppercase',
        fontWeight: 'bolder'
      }}
    >{label}</FloatingText>
  </Box>
}