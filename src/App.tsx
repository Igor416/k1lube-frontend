import { createRef, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Container, Grid2, Stack, Typography } from '@mui/material';
import { Footer, Menu } from './components';
import { useRoutes, useWindow } from './hooks';
import { TitlePanel } from './utils';

export default function App() {
  const boxRef = createRef<HTMLDivElement>()
  const { activeRoute, activeGroup } = useRoutes()
  const isMobile = useWindow()
  
  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.animate([
        {opacity: 0},
        {opacity: 1}
      ], 1000)
    }
  }, [boxRef])

  return <Stack>
    <Menu />
    <Stack gap={8} ref={boxRef}>
      {activeRoute.image && <TitlePanel img={activeRoute?.image} label={activeGroup?.group === 'Товары' ? activeGroup?.group : activeRoute?.label} />}
      {activeGroup?.group === 'Товары' && <Typography variant='h5' textAlign='center' sx={{fontWeight: 'bold'}}>
        Ощутите качество K1 Lube, в котором используется корейское базовое масло и присадки со всего мира, поставляемые крупным<br />
        OEM-производители автомобилей, компании по производству строительного оборудования и мировые производители.
      </Typography>}
      {activeGroup && <Container>
        <Grid2 container spacing={2}>
          {activeGroup.paths.map((route, i) => <Grid2 size={isMobile ? 12 : activeGroup.paths.length === 3 ? 4 : 3} key={i}>
            <Link to={route.path} style={{display: 'block', height: '100%', textDecoration: 'none'}}>
              <Stack sx={{
                height: '100%',
                justifyContent: 'center',
                p: 2,
                backgroundColor: route.path === activeRoute.path ? 'black' : 'white',
                border: route.path === activeRoute.path ? 'none' : `1px solid black`
              }}>
                <Typography variant='h6' textAlign='center' color={route.path === activeRoute.path ? 'white' : 'black'}>{route.label}</Typography>
              </Stack>
            </Link>
          </Grid2>)}
        </Grid2>
      </Container>}
      <Stack gap={isMobile? 6 : 12}>
        <Outlet />
      </Stack>
    </Stack>
    <Footer />
  </Stack>
};
