import { Link as DefaultLink } from "react-router-dom";
import { Box, Button, Drawer, Stack, useTheme } from "@mui/material";
import { Image } from "../../utils";
import { useWindow } from "../../hooks";
import { Routes } from "./Routes";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export function Menu() {
  const theme = useTheme()
  const isMobile = useWindow()
  const [opened, open] = useState(false)

  return <Stack direction='row' sx={{
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    px: 4,
    py: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    boxShadow: '0 1rem 3rem rgba(0, 0, 0, .175);',
    [theme.breakpoints.down('lg')]: {
      px: 2,
      position: 'relative',
    }
  }}>
    <DefaultLink to='/'>
      <Image sx={{
        width: '216px',
      }} path='' name='logo-horizontal.svg' />
    </DefaultLink>
    <Box sx={{flex: 1}} />
    {isMobile && <Stack sx={{alignItems: 'center', justifyContent: 'center'}}>
      <Button onClick={() => open(true)} sx={{color: 'black'}}>
        {opened ? <MenuOpenIcon /> : <MenuIcon />}
      </Button>
    </Stack>}
    <Drawer anchor='right' open={opened} onClose={() => open(false)}>
      <Routes closeDrawer={() => open(false)} />
    </Drawer>
    {!isMobile && <Routes closeDrawer={() => open(false)} />}
  </Stack>
}