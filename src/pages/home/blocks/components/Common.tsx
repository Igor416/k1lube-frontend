import { ReactNode } from "react"
import { Stack, Typography, Container } from "@mui/material"
import { BackgroundImage } from "../../../../utils"
import { ComponentProps } from "./Props"
import { useWindow } from "../../../../hooks"

interface CommonProps extends ComponentProps {
  title1: string,
  title2: string,
  title3: string,
  Icon: (props: {color?: string}) => JSX.Element,
  children?: ReactNode | ReactNode[]
}

export function Common({brightness, url, title1, title2, title3, Icon, children}: CommonProps) {
  const isMobile = useWindow()

  return <BackgroundImage brightness={brightness} sx={{ backgroundSize: 'cover' }} url={url}>
    <Container>
      <Stack gap={4} sx={{py: 16, color: 'white'}}>
        <Stack sx={{position: 'relative', color: 'white'}}>
          <Typography variant='h4' textAlign='center' sx={{fontWeight: 'bold'}}>
            {title1}
          </Typography>
          <Typography variant='h6' textAlign='center' sx={{fontWeight: 'bold'}}>
            <span dangerouslySetInnerHTML={{__html: title2}}></span>
          </Typography>
          <Stack sx={{
            position: isMobile ? 'static' : 'absolute',
            zIndex: 1000,
            right: 0,
            top: '50%',
            transform: `translate(${isMobile ? 0 : '150%, -50%'}) scale(0.75)`,
            alignItems: 'center'
          }}>
            <Icon color='#ffffff' />
          </Stack>
        </Stack>
        <Typography textAlign='center'>
          <span dangerouslySetInnerHTML={{__html: title3}}></span>
        </Typography>
        {children}
      </Stack>
    </Container>
  </BackgroundImage>
}