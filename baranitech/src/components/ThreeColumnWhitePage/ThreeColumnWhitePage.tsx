import React from "react";
import {  Grid,} from "@mui/material";
import { BoxWhiteStyled, ButtonOneStyledWhite, ButtonWrapperStyledWhite, H2BoxStyled, ImageDivStyledWhite, ParaOneStyledWhite, PareBoxStyled, ThreeColumnStyledWhite, TitleDivStyledWhite } from "./styles";

const ThreeColumnWhitePage: React.FC = () => {
  return (
    <BoxWhiteStyled sx={{ flexGrow: 1, p: 2 }}>
       <H2BoxStyled>Learning Resources</H2BoxStyled>
       <PareBoxStyled>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</PareBoxStyled>
      <Grid container spacing={2}>
        {/* Left Column */}
        <ThreeColumnStyledWhite size={{ xs: 12, md: 4 }}>
         
          <ImageDivStyledWhite>  <img src='/headset.png' alt='heading' loading='lazy' /></ImageDivStyledWhite>
          <TitleDivStyledWhite>Upcoming Trainings</TitleDivStyledWhite>
          <ParaOneStyledWhite>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ParaOneStyledWhite>
          <ButtonWrapperStyledWhite>
            <ButtonOneStyledWhite>View More</ButtonOneStyledWhite>
          </ButtonWrapperStyledWhite>
          {/* <div>  <img src='/headset.png' alt='heading' loading='lazy' /></div>
          <div>  <img src='/headset.png' alt='heading' loading='lazy' /></div> */}
        </ThreeColumnStyledWhite>

        {/* Center Column */}
        <ThreeColumnStyledWhite size={{ xs: 12, md: 4 }}>
      
          <ImageDivStyledWhite>  <img src='/headset.png' alt='heading' loading='lazy' /></ImageDivStyledWhite>
          <TitleDivStyledWhite>Current Vacancies</TitleDivStyledWhite>
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
     
          <ImageDivStyledWhite>  <img src='/headset.png' alt='heading' loading='lazy' /></ImageDivStyledWhite>
          <TitleDivStyledWhite>Resources</TitleDivStyledWhite>
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
