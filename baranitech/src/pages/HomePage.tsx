import { Grid } from "@mui/material";
import CarouselComponent from "../components/CarouselComponent";
import AccordionComponent from "../components/AccordianComponent";
import HeaderComponent from "../components/HeaderComponent";
import { BodyPara1Styled, PageWrapperStyled } from "./styles";

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
          <Grid size={{ xs: 12, md: 6 }}>
            <PageWrapperStyled>
              <HeaderComponent title="| About Us" />
              <BodyPara1Styled variant="h6" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </BodyPara1Styled>
            </PageWrapperStyled>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}></Grid>
        </Grid>
      </Grid>
    </Grid>

  )
}
