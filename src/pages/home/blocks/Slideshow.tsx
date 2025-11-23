import { useEffect, useMemo, useState } from 'react';
import { Box, IconButton, Stack, useTheme } from '@mui/material';
import { TrendingFlat } from '@mui/icons-material';
import { FloatingText, Image } from '../../../utils';
import { useWindow } from '../../../hooks';

type Text = {
  [key: string]: string
}

export function Slideshow() {
  const isMobile = useWindow()

  const texts: Text[] = useMemo(() => {
    const l = [
      {
        text1: "K1 Lube создан экспертами по смазочным материалам мирового уровня",
        text2: "Смазочный материал №1 в Корее — K1 Lube",
        text3: "Рекомендуется ведущими азиатскими специалистами по смазочным материалам",
        image: '2'
      },
      {
        text1: "Оптимальная формула с базовыми маслами групп III, IV, V",
        text2: "Масло высочайшего качества в мире",
        text3: "Сделано из лучших материалов для OEM, таких как Hyundai, Kia, Toyota, GM, BMW и Mercedes-Benz",
        image: '3'
      },
      {
        text1: "Становясь новым стандартом корейских смазочных материалов",
        text2: "#1 в Корее по удовлетворенности потребителей",
        text3: "Победитель премии брендов за удовлетворенность потребителей",
        image: '4'
      }
    ]
    l.splice(0, 0, { text1: '', text2: '', text3: '', image: isMobile ? '5.svg' : '1' })
    return l
  }, [isMobile])

  let pause = false
  const maxIndex = texts.length - 1
  const theme = useTheme()
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (false && !pause) {
        setCurrentIndex(currentIndex === maxIndex ? 0 : currentIndex + 1)
      }
    }, 5000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [currentIndex, maxIndex, pause])

  const handleClick = (func: () => void) => {
    pause = true
    setTimeout(() => {pause = false}, 10000)
    func()
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  return <Box sx={{ position: 'relative', width: '100%' }}>
    <Box sx={{ position: 'relative', overflow: 'hidden', width: '100%', height: isMobile ? '75vh' : '95vh' }}>
      {texts.map((_, i) => <Image
        key={i}
        name={texts[i].image}
        path='slideshow/'
        brightness={80}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          transform: isMobile ? 'translateX(-50%)' : '',
          opacity: i === currentIndex ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
          [theme.breakpoints.down('lg')]: {
            height: '100%',
            width: 'auto',
            left: '50%',
          }
        }}
      />)}
    </Box>
    <Box sx={{position: 'absolute', overflowX: 'hidden', width: '100%', height: '100%', top: 0, left: 0}}>
      <Stack sx={{position: 'relative', width: '100%', height: '100%', color: 'white'}}>
        <FloatingText
          initState='translateX(-10%)'
          finalState='translateX(0%)'
          variant={isMobile ? 'h6' : 'h4'}
          textAlign='center'
          sx={{ top: `17.5%`, fontWeight: 'bold' }}
        >{texts[currentIndex].text1}</FloatingText>
        <FloatingText
          initState='translateX(-10%)'
          finalState='translateX(0%)'
          textAlign='center'
          sx={{ top: isMobile ? '32.5%' : `25%`, fontWeight: 800, fontSize: isMobile ? 28 : 72 }}
        >{texts[currentIndex].text2}</FloatingText>
        <FloatingText
          initState='translateX(10%)'
          finalState='translateX(0%)'
          variant={isMobile ? 'h6' : 'h5'}
          textAlign='center'
          sx={{ top: `60%` }}
        >{texts[currentIndex].text3}</FloatingText>
      </Stack>
    </Box>
    {!isMobile && <>
      <IconButton onClick={() => handleClick(handlePrev)} sx={{ position: 'absolute', top: '50%', left: '5%', transform: 'translateY(-50%)', color: 'white' }}>
        <TrendingFlat sx={{fontSize: 64, transform: 'rotateZ(180deg)'}} />
      </IconButton>
      <IconButton onClick={() => handleClick(handleNext)} sx={{ position: 'absolute', top: '50%', right: '5%', transform: 'translateY(-50%)', color: 'white' }}>
        <TrendingFlat sx={{fontSize: 64}} />
      </IconButton>
    </>}
    <Stack direction='row' gap={1} sx={{ position: 'absolute', bottom: 0, width: '100%', justifyContent: 'center', alignItems: 'center', mb: 8 }}>
      {texts.map((_, index) => (
        <Box
          key={index}
          onClick={() => handleClick(() => setCurrentIndex(index))}
          sx={{
            width: index === currentIndex ? 12 : 10,
            aspectRatio: 1,
            borderRadius: '50%',
            border: index === currentIndex ? '1px solid white' : 'none',
            backgroundColor: index === currentIndex ? 'transparent' : 'white',
            cursor: 'pointer',
            transition: '0.3s ease',
          }}
        />
      ))}
    </Stack>
  </Box>
}