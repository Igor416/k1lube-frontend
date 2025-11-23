import { Box, Container, Stack, Typography } from "@mui/material";
import { Ester as EsterBlock } from "../home/blocks";
import { Image } from "../../utils";
import { useWindow } from "../../hooks";

export function Ester() {
  const isMobile = useWindow()

  const data = [
    {
      title: "Органический модификатор трения - GMO (моноолеат глицерина)",
      text: "Моноолеат глицерина (C21H40O4) — это прозрачная янтарная или бледно-желтая жидкость. Это масло-растворимый поверхностно-активный агент, классифицируемый как моноглицерид. Он используется как антипенитель в обработке сока и как липофильный эмульгатор для приложений вода-в-масло. Это увлажнитель, эмульгатор и ароматизатор. Различные формы моноолеата глицерина широко используются в косметике, а также он используется как вспомогательное вещество в антибиотиках и других лекарствах.<br/><br/>Однако моноолеат глицерина (GMO) имеет линейные молекулярные структуры, что значительно улучшает трибологические характеристики. GMO широко используется в смазочных маслах как модификатор трения, и наблюдаются отличные смазывающие характеристики, такие как ультра-низкое трение, достигаемое между двумя металлическими поверхностями с маслом."
    },
    {
      title: "Роль GMO в смазочных материалах",
      text: "Механизм снижения трения GMO перешел от физического адсорбирования к химическому адсорбированию,<br/>что снизило коэффициент трения как при низкой, так и при высокой температуре."
    },
    {
      title: "Эффект GMO в моторном масле",
      text: "",
      images: [1, 2, 3]
    },
    {
      title: "Энергетическая эффективность в автомобильном транспорте",
      text: "Энергетическая эффективность увеличивается за счет снижения трения, что ведет к снижению<br/>тепловых потерь за счет минимизации трения. Снижение трения — это очень важная характеристика моторного масла."
    }
  ]  

  return <>
    <EsterBlock brightness={100} url='paralax/ester1.png' />
    <Container>
      <Stack gap={8}>
        {data.map((item, i) => <Stack key={i} gap={4}>
          <Typography variant='h4' textAlign='center' sx={{fontWeight: 'bold'}}>{item.title}</Typography>
          {item.text && <Typography textAlign={i === 0 ? 'left' : 'center'}>
            <span dangerouslySetInnerHTML={{__html: item.text}}></span>
          </Typography>}
          <Stack direction='row' sx={{p: 2, justifyContent: 'center', border: '1px solid rgb(219, 219, 219)'}}>
            <Image path='photos/' name={`ester${i + 1}`} sx={{width: '100%'}} />
          </Stack>
          {item.images && <Stack direction={isMobile ? 'column' : 'row'} gap={2}>
            {item.images.map(j => <Stack
                key={j}
                direction='row'
                sx={{flex: 1, py: 2, justifyContent: 'center', border: '1px solid rgb(219, 219, 219)'}}
              >
              <Image path='photos/' name={`ester-doc${j}`} />
            </Stack>)}
          </Stack>}
        </Stack>)}
        {[5, 6].map(i => <Stack
            key={i}
            direction='row'
            sx={{p: 2, justifyContent: 'center', border: i === 5 ? 'none' : '1px solid rgb(219, 219, 219)'}}
          >
          <Image path='photos/' name={`ester${i}`} sx={{width: '100%'}} />
        </Stack>)}
      </Stack>
    </Container>
    <Box></Box>
  </>
}