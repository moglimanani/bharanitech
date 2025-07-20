import React, { useEffect, useState } from "react";
import { BoxWhiteStyled, H2BoxStyled, PareBoxStyled } from "./styles";
import { useAllTrainings } from "../../contexts/allTrainingsContext";
import { TrainingType } from "../../types/trainings";
import LatestTraining from "../LatestTraining";

const TrainingsThreeColumnWhitePage: React.FC = () => {
  const [trainings, setAllTrainings] = useState<TrainingType[]>([])
  const { allTrainings } = useAllTrainings()

  useEffect(() => {
    const sortedArr = [...allTrainings].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    setAllTrainings(sortedArr.slice(0, 3))
  }, [allTrainings])
  if (!trainings) return <></>
  
  return (
    <BoxWhiteStyled sx={{ flexGrow: 1, p: 2 }}>
      <H2BoxStyled>Latest Trainings</H2BoxStyled>
      <PareBoxStyled>Our professional training programs are designed to equip individuals and teams with the skills and knowledge needed to excel in today's competitive environment. Conducted by experienced industry experts, our training sessions are available in both online and offline modes to ensure maximum flexibility and accessibility. </PareBoxStyled>
      <LatestTraining trainings={trainings} />
    </BoxWhiteStyled>
  );
};

export default TrainingsThreeColumnWhitePage;
