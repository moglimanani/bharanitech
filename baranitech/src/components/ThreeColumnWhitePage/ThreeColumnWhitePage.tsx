import React from "react";
import { CardMedia, Grid, } from "@mui/material";
import { BoxWhiteStyled, ButtonOneStyledWhite, ButtonWrapperStyledWhite, CardMediaStyled, H2BoxStyled, ImageDivStyledWhite, ParaOneStyledWhite, PareBoxStyled, ThreeColumnStyledWhite, TitleDivStyledWhite } from "./styles";

const ThreeColumnWhitePage: React.FC = () => {
  return (
    <BoxWhiteStyled sx={{ flexGrow: 1, p: 2 }}>
      <H2BoxStyled>Learning Resources</H2BoxStyled>
      <PareBoxStyled>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</PareBoxStyled>
      <Grid container spacing={2}>
        {/* Left Column */}
        <ThreeColumnStyledWhite size={{ xs: 12, md: 4 }}>
          <CardMediaStyled
            component="iframe"
            height="200"
            src={`https://www.youtube.com/embed/nei0jR83Ozg?list=PLjbsavmwdHjcz_Vnc-Rz6I7M_9B53zPSk`}
            title={'Upcoming Trainings'}
            allowFullScreen
          />
          <TitleDivStyledWhite>Upcoming Trainings</TitleDivStyledWhite>
          <ParaOneStyledWhite>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ParaOneStyledWhite>
          <ButtonWrapperStyledWhite>
            <ButtonOneStyledWhite>View More</ButtonOneStyledWhite>
          </ButtonWrapperStyledWhite>

        </ThreeColumnStyledWhite>

        {/* Center Column */}
        <ThreeColumnStyledWhite size={{ xs: 12, md: 4 }}>

          <CardMediaStyled
            component="iframe"
            height="200"
            src={`https://www.youtube.com/embed/nei0jR83Ozg?list=PLjbsavmwdHjcz_Vnc-Rz6I7M_9B53zPSk`}
            title={'Upcoming Trainings'}
            allowFullScreen
          />          <TitleDivStyledWhite>Current Vacancies</TitleDivStyledWhite>
          <ParaOneStyledWhite>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ParaOneStyledWhite>
          <ButtonWrapperStyledWhite>
            <ButtonOneStyledWhite>View More</ButtonOneStyledWhite>
          </ButtonWrapperStyledWhite>
        </ThreeColumnStyledWhite>

        {/* Right Column */}
        <ThreeColumnStyledWhite size={{ xs: 12, md: 4 }}>

          <CardMediaStyled
            component="iframe"
            height="200"
            src={`https://www.youtube.com/embed/nei0jR83Ozg?list=PLjbsavmwdHjcz_Vnc-Rz6I7M_9B53zPSk`}
            title={'Upcoming Trainings'}
            allowFullScreen
          />          <TitleDivStyledWhite>Resources</TitleDivStyledWhite>
          <ParaOneStyledWhite>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ParaOneStyledWhite>
          <ButtonWrapperStyledWhite>
            <ButtonOneStyledWhite>View More</ButtonOneStyledWhite>
          </ButtonWrapperStyledWhite>
        </ThreeColumnStyledWhite>
      </Grid>
    </BoxWhiteStyled>
  );
};

export default ThreeColumnWhitePage;
