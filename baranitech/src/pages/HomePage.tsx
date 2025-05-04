import { Grid } from "@mui/material";
import CarouselComponent from "../components/CarouselComponent";
import AccordionComponent from "../components/AccordianComponent";

export default function HomePage() {
  return (
    <Grid container>
        <Grid size={12}>
          <CarouselComponent />
        </Grid>
        <Grid size={12}>
          <Grid container>
            <Grid size={{ xs: 12, md: 2 }}>
              <AccordionComponent />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}></Grid>
            <Grid size={{ xs: 12, md: 4 }}></Grid>
          </Grid>
        </Grid>
    </Grid>

  )
}
