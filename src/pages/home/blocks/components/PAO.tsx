import { PAOIcon } from "../../../../components";
import { Common } from "./Common";
import { Image } from "../../../../utils";
import { Box, Stack, Typography } from "@mui/material";
import { ComponentProps } from "./Props";
import { useWindow } from "../../../../hooks";

export function PAO({brightness, url}: ComponentProps) {
  const isMobile = useWindow()

  const data = [
    "Укрепление<br />свойств вязкости",
    "Сохранение<br />мощности двигателя",
    "Увеличение<br />интервала замены масла"
  ];  

  return <Common
    brightness={brightness}
    url={url}
    title1="K1 Lube PAO"
    title2="PAO-технология K1 Lube"
    title3="PAO Boosting Technology от K1 Lube обеспечивает мощное и комфортное вождение с силой PAO.<br />K1 Lube помогает вам наслаждаться премиум-производительностью с мощным PAO"
    Icon={PAOIcon}
  >
    <Box sx={{px: isMobile ? 2 : 20, display: 'flex', justifyContent: 'center'}}>
      <Image path='photos/' name='pao-component1' sx={{width: '100%'}} />
    </Box>
    <Typography variant='h5' color='white' textAlign='center' sx={{fontWeight: 'bold'}}>3 преимущества PAO</Typography>
    <Stack direction={isMobile ? 'column' : 'row'} gap={4}>
      {data.map((item, i) => <Box key={i} sx={{flex: 1, p: 2, border: '1px solid white'}}>
        <Typography variant='h5' color='white' textAlign='center' sx={{fontWeight: 'bold'}}>
          <span dangerouslySetInnerHTML={{__html: item}}></span>
        </Typography>
      </Box>)}
    </Stack>
  </Common>
}
