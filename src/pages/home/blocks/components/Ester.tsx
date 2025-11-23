import { Stack, Typography } from "@mui/material";
import { EsterIcon } from "../../../../components";
import { Common } from "./Common";
import { Image } from "../../../../utils";
import { ComponentProps } from "./Props";
import { useWindow } from "../../../../hooks";

export function Ester({brightness, url}: ComponentProps) {
  const isMobile = useWindow()
  
  const data = [
    {
      title: "Энергетическая эффективность улучшает<br />за счет снижения потерь от трения.",
      text: "Снижение половины потерь от трения и тепла, составляющих около 20% потерь энергии в двигателе, позволяет повысить общую энергетическую эффективность на 10%."
    },
    {
      title: "Снижение потребления топлива с использованием экономичного моторного масла<br />снижает выбросы углерода.",
      text: "Каждый галлон сжигаемого бензина создает около 8887 граммов CO2. Снижение потребления топлива на 2% помогает уменьшить выбросы CO2 на 178 г на галлон бензина."
    },
    {
      title: "Замедление термической окислительной<br />реакции увеличивает интервал замены масла.",
      text: "Процесс термической окисления моторного масла ускоряется из-за трения, металлических катализаторов и других факторов. Это ведет к увеличению вязкости и образованию шлама, что сокращает срок службы масла."
    }
  ]
  

  return <Common
    brightness={brightness}
    url={url}
    title1="Органический фрикционный модификатор на основе эфира"
    title2="Снижение выбросов углерода с использованием органического фрикционного модификатора на основе эфира увеличивает<br />Энергоэффективность в автомобилях"
    title3="Механизм снижения трения GMO перешел от физической адсорбции к химической адсорбции,<br />что снизило коэффициент трения как при низких, так и при высоких температурах."
    Icon={EsterIcon}
  >
    <Stack direction={isMobile ? 'column' : 'row'} sx={{color: 'white'}} gap={2}>
      {data.map((item, i) => <Stack gap={4} key={i} sx={{flex: 1, p: 2, justifyContent: 'space-between', border: '1px solid white'}}>
        <Typography variant='h6'>
          <span dangerouslySetInnerHTML={{__html: item.title}}></span>
        </Typography>
        <Typography>
          <span dangerouslySetInnerHTML={{__html: item.text}}></span>
        </Typography>
        <Image path='photos/' name={`ester-component${i + 1}`} />
      </Stack>)}
    </Stack>
  </Common>
}