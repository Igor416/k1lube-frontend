import { createRef, useEffect } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

interface FloatingTextProps extends TypographyProps {
  initState: string,
  finalState: string,
  deps?: Array<any>
}

export function FloatingText({initState, finalState, deps = [], ...props}: FloatingTextProps) {
  const ref = createRef<HTMLElement>()
  const {sx, children, ...otherProps} = props

  useEffect(() => {
    if (ref.current) {
      ref.current.animate([
        {transform: initState},
        {transform: finalState}
      ], 700)
    }
  }, [finalState, initState, ref, ...deps])

  return <Typography ref={ref} {...otherProps} sx={{position: 'absolute', width: '100%', transform: finalState, ...sx}}>
    {children}
  </Typography>
}