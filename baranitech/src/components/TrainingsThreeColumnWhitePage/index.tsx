import React, { useEffect, useState } from "react";
import { CardMedia, Grid, Typography, } from "@mui/material";
import { BoxWhiteStyled, ButtonOneStyledWhite, ButtonWrapperStyledWhite, CardMediaStyled, H2BoxStyled, ImageDivStyledWhite, ParaOneStyledWhite, PareBoxStyled, ThreeColumnStyledWhite, TitleDivStyledWhite } from "./styles";
import { useAllTrainings } from "../../contexts/allTrainingsContext";
import { TrainingType } from "../../types/trainings";

const TrainingsThreeColumnWhitePage: React.FC = () => {
  const [trainings, setAllTrainings] = useState<TrainingType[]>([])
  const { allTrainings } = useAllTrainings()
  console.log('all', allTrainings);

  useEffect(() => {
    const sortedArr = [...allTrainings].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    setAllTrainings(sortedArr.slice(0, 3))
  }, [allTrainings])
  if (!trainings) return <></>
  return (
    <BoxWhiteStyled sx={{ flexGrow: 1, p: 2 }}>
      <H2BoxStyled>Latest Trainings</H2BoxStyled>
      <PareBoxStyled>Our professional training programs are designed to equip individuals and teams with the skills and knowledge needed to excel in today's competitive environment. Conducted by experienced industry experts, our training sessions are available in both online and offline modes to ensure maximum flexibility and accessibility. </PareBoxStyled>
      <Grid container spacing={2}>
        {
          trainings.map((item: TrainingType, id: number) => (
            <ThreeColumnStyledWhite size={{ xs: 12, md: 4 }} key={`alltraining-${id}-${item.id}`}>
              <TitleDivStyledWhite>{item.title}</TitleDivStyledWhite>
              <ParaOneStyledWhite>
              {item.description ? item.description : '-'}
              </ParaOneStyledWhite>
              <Typography>Start Date: {item.startdate}</Typography>
              <Typography>Price: {item.total_price}</Typography>
              <Typography>Location:  {+item.classification === 0 ? `${item.city}, ${item.state}, ${item.country}` : 'Online'}</Typography>
              <ButtonWrapperStyledWhite>
                <ButtonOneStyledWhite>View More</ButtonOneStyledWhite>
              </ButtonWrapperStyledWhite>

            </ThreeColumnStyledWhite>
          ))
        }
      </Grid>
    </BoxWhiteStyled>
  );
};

export default TrainingsThreeColumnWhitePage;
