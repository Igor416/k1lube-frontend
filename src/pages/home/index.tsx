import { Stack, Box } from "@mui/material";
import { Slideshow, Start, Testimonials, About, Control, Korea, Ester, PAO, Packages } from "./blocks";
import { VisionMission } from "../../components";

export function Home() {
  return <>
    <Slideshow />
    <Start />
    <Testimonials />
    <About />
    <VisionMission url='paralax/home2.png' />
    <Control />
    <Stack>
      <Korea brightness={23} url='paralax/home3.png' />
      <Ester brightness={54} url='paralax/home4.png' />
      <PAO brightness={100} url='paralax/home5.png' />
    </Stack>
    <Packages />
    <Box></Box>
  </>
}