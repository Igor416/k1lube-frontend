import { Box, Container, Stack, Typography } from "@mui/material";
import { BackgroundImage, Image } from "../../utils";
import { PAOIcon } from "../../components";
import { useWindow } from "../../hooks";

export function PAO() {
  const isMobile = useWindow()

  const data = [
    {
      title: "Укрепление<br />свойств вязкости",
      text: "Он сохраняет вязкость при низких температурах, замедляя кристаллизацию при низких температурах, и сохраняет вязкость при высоких температурах, увеличивая силу связи между молекулами при высоких температурах."
    },
    {
      title: "Сохранение<br />мощности двигателя",
      text: "Он обладает хорошей термической устойчивостью к окислению и устойчивостью к сдвигу, замедляя термическое окисление и поддерживая вязкость, чтобы предотвратить ухудшение мощности двигателя и сохранить передачу мощности."
    },
    {
      title: "Увеличение<br />интервала замены масла",
      text: "Укрепляя устойчивость к окислению моторного масла, предотвращая термическое окисление и подавляя образование шлама, он предотвращает загрязнение моторного масла и увеличивает интервал замены, создавая долговечное моторное масло."
    }
  ]  

  return <>
    <BackgroundImage brightness={100} sx={{ backgroundSize: 'cover' }} url="paralax/pao1.png">
      <Container>
        <Stack gap={4} sx={{ pt: 8, color: 'white' }}>
          <Stack gap={4} sx={{ position: 'relative', color: 'white' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Мощное и комфортное вождение
            </Typography>
            <Typography>
              Технология усиления PAO от K1 Lube обеспечивает максимальную экономию топлива,<br />
              слив масла и защиту с помощью PAO (полиальфаолефины)
            </Typography>
            <Box sx={{ position: 'absolute', zIndex: 1000, right: 0, top: '50%', transform: 'translateY(-50%) scale(0.75)' }}>
              <PAOIcon color="#ffffff" />
            </Box>
          </Stack>
          <Stack direction="row" sx={{ width: '100%', justifyContent: 'flex-end' }}>
            <Image path="photos/" name="pao1" sx={{width: '100%'}} />
          </Stack>
        </Stack>
      </Container>
    </BackgroundImage>
    <Container>
      <Stack gap={4}>
        <Typography variant="h4" textAlign="center" sx={{ fontWeight: 'bold' }}>
          K1 Lube PAO 1 с технологией усиления PAO
        </Typography>
        <Typography textAlign="center">
          Технология усиления PAO от K1 Lube обеспечивает мощное и комфортное вождение с помощью силы PAO.<br />
          K1 Lube помогает вам наслаждаться премиальной производительностью с мощным PAO
        </Typography>
        <Stack direction="row" sx={{ p: 2, justifyContent: 'center', border: '1px solid rgb(219, 219, 219)' }}>
          <Image path="photos/" name="pao2" sx={{width: '100%'}} />
        </Stack>
        <Typography textAlign="center">
          поли-альфа-олефин (или поли-α-олефин) 1-гексан
        </Typography>
        <Stack gap={2} direction={isMobile ? 'column' : 'row'}>
          {data.map((item, i) => (
            <Stack gap={4} key={i} sx={{ flex: 1, p: 2, border: '1px solid rgb(219, 219, 219)' }}>
              <Box sx={{ py: 1, backgroundColor: 'rgb(40, 38, 38)' }}>
                <Typography variant="h6" color="white" textAlign="center" sx={{ fontWeight: 'bold' }}>
                  <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                </Typography>
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography>{item.text}</Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Container>
    <Box></Box>
  </>
}