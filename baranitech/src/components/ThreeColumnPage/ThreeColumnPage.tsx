import React from "react";
import { Box, CardMedia, Grid } from "@mui/material";
import {
  ButtonOneStyled,
  ButtonWrapperStyled,
  CardMediaStyled,
  ImageDivStyled,
  ParaOneStyled,
  ThreeColumnStyled,
  TitleDivStyled,
} from "./styles";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import WorkIcon from "@mui/icons-material/Work";
import CachedIcon from "@mui/icons-material/Cached";

const ThreeColumnPage: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        {/* Left Column */}
        <ThreeColumnStyled size={{ xs: 12, md: 4 }}>
          <TitleDivStyled>
            {" "}
            <ModelTrainingIcon /> Upcoming Trainings
          </TitleDivStyled>
          <ImageDivStyled>
            {" "}
            <img src="/headset.png" alt="heading" loading="lazy" />
          </ImageDivStyled>
          <ParaOneStyled>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ParaOneStyled>
          <ButtonWrapperStyled>
            <ButtonOneStyled>View More</ButtonOneStyled>
          </ButtonWrapperStyled>
          {/* <div>  <img src='/headset.png' alt='heading' loading='lazy' /></div>
          <div>  <img src='/headset.png' alt='heading' loading='lazy' /></div> */}
        </ThreeColumnStyled>

        {/* Center Column */}
        <ThreeColumnStyled size={{ xs: 12, md: 4 }}>
          <TitleDivStyled>
            <WorkIcon /> Current Vacancies
          </TitleDivStyled>
          <ImageDivStyled>
            {" "}
            <img src="/headset.png" alt="heading" loading="lazy" />
          </ImageDivStyled>
          <ParaOneStyled>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ParaOneStyled>
          <ButtonWrapperStyled>
            <ButtonOneStyled>View More</ButtonOneStyled>
          </ButtonWrapperStyled>{" "}
        </ThreeColumnStyled>

        {/* Right Column */}
        <ThreeColumnStyled size={{ xs: 12, md: 4 }}>
          <TitleDivStyled>
            <CachedIcon /> Resources
          </TitleDivStyled>
          <CardMediaStyled
            component="iframe"
            height="200"
            src={`https://www.youtube.com/embed/nei0jR83Ozg?list=PLjbsavmwdHjcz_Vnc-Rz6I7M_9B53zPSk`}
            title={'Upcoming Trainings'}
            allowFullScreen
          />
          <ParaOneStyled>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ParaOneStyled>
          <ButtonWrapperStyled>
            <ButtonOneStyled>View More</ButtonOneStyled>
          </ButtonWrapperStyled>
        </ThreeColumnStyled>
      </Grid>
    </Box>
  );
};

export default ThreeColumnPage;
