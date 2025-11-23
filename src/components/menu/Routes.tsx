import { useState, useCallback } from "react";
import { Link as DefaultLink } from "react-router-dom";
import { Stack, Button, useTheme } from "@mui/material";
import { Close, KeyboardArrowDown } from "@mui/icons-material";
import { useRoutes, useWindow } from "../../hooks";
import { Image } from "../../utils";
import { Link } from "./Link";

interface RoutesProps {
  closeDrawer: () => void
}

export function Routes({closeDrawer}: RoutesProps) {
  const theme = useTheme()
  const isMobile = useWindow()
  const [active, setActive] = useState(-1)
  const {routes, activeRoute} = useRoutes()

  const onClose = useCallback(() => {
    closeDrawer()
    setActive(-1)
  }, [closeDrawer])
  
  return <Stack direction={isMobile ? 'column' : 'row'} sx={{
    gap: 4,
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      mt: 4,
      px: 2,
      alignItems: 'flex-start',
    }
  }}>
    {isMobile && <Stack onClick={closeDrawer} direction='row' sx={{p: 1, alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
      <DefaultLink to='/'>
        <Image sx={{width: '216px', ml: -2}} path='' name='logo-horizontal.svg' />
      </DefaultLink>
      <Close />
    </Stack>}
    {routes.map((route, i) => {
      if (route.group) {
        return <Stack
          sx={{
            position: 'relative',
            [theme.breakpoints.down('lg')]: {
              width: '100%'
            }
          }}
          gap={2}
          key={i}
          onMouseOver={isMobile ? () => {} : () => setActive(i)}
          onMouseOut={isMobile ? () => {} : onClose}
        >
          <Button onClick={isMobile ? () => setActive(active === i ? -1 : i) : () => {}} sx={{color: 'black'}}>
            <Stack direction='row' sx={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
              <Link variant='h6' path={isMobile ? '' : route.paths[0]?.path} label={route.group!} />
              <KeyboardArrowDown sx={{transform: `rotate(${active === i ? 180 : 0}deg)`, transition: '0.5s'}} />
            </Stack>
          </Button>
          <Stack sx={{
            position: isMobile && active === i ? 'static' : 'absolute',
            zIndex: 1200,
            mt: 5,
            mx: 1,
            p: 1,
            transform: `scaleY(${active === i ? 1 : 0})`,
            transformOrigin: 'top',
            transition: `0.3s`,
            backgroundColor: 'white',
            borderRadius: 6,
            [theme.breakpoints.down('lg')]: {
              m: 0,
              top: '100%'
            }
          }}>
            {route.paths.map((path, j) => <Button sx={{justifyContent: 'flex-start'}} key={j} onClick={onClose}>
              <Link variant='body1' active={activeRoute?.path === path.path} path={path.path} label={path.label} />
            </Button>)}
          </Stack>
        </Stack>
      }
      return <Button key={i} onClick={closeDrawer}>
        <Link variant='h6' active={activeRoute?.path === route.path} path={route.path!} label={route.label!} />
      </Button>
    })}
  </Stack>
}