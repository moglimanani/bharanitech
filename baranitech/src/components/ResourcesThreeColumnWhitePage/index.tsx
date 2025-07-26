import React, { useEffect, useState } from "react";
import { Grid, } from "@mui/material";
import { BoxWhiteStyled, ButtonOneStyledWhite, ButtonWrapperStyledWhite, CardMediaStyled, H2BoxStyled, PareBoxStyled, ThreeColumnStyledWhite, TitleDivStyledWhite } from "./styles";
import { useAllResources } from "../../contexts/allResourcesContext";
import { ResourceType } from "../../types/resources";
import { getYouTubeEmbedUrl } from "../../helper";

const ResourcesThreeColumnWhitePage: React.FC = () => {
  const [resources, setResources] = useState<ResourceType[]>([])
  const {allResources} = useAllResources()

  useEffect(()=>{
    if(allResources.length > 0){
      setResources(allResources.slice(0,3))
    }
  }, [allResources])

  return (
    <BoxWhiteStyled sx={{ flexGrow: 1, p: 2 }}>
      <H2BoxStyled>Learning Resources </H2BoxStyled>
      <PareBoxStyled>In the digital age, YouTube isn't just for entertainment—it's a global classroom with millions of educational videos. Here's why it's especially valuable for learners: it's a global classroom with millions of educational videos. Here's why it's especially valuable for learners: </PareBoxStyled>
      <Grid container spacing={2}>
        {
          resources.map((item: ResourceType, id: number)=> {            
            return (
            <ThreeColumnStyledWhite size={{ xs: 12, md: 4 }} key={`learningres-${id}-${item.id}`}>
            <CardMediaStyled>
              {getYouTubeEmbedUrl(item.url) !== null && (
              <iframe
                height="200"
                src={getYouTubeEmbedUrl(item.url) || ''}
                title={item.title}
                allowFullScreen
                width='100%'
              />
              )}
            </CardMediaStyled>
            <TitleDivStyledWhite>{item.title}</TitleDivStyledWhite>
            {/* <ParaOneStyledWhite>
             {item.description ? item.description : '-'}
            </ParaOneStyledWhite> */}
            {/* <ButtonWrapperStyledWhite>
              <ButtonOneStyledWhite>View More</ButtonOneStyledWhite>
            </ButtonWrapperStyledWhite> */}
  
          </ThreeColumnStyledWhite>
          )
})
        }
      </Grid>
    </BoxWhiteStyled>
  );
};

export default ResourcesThreeColumnWhitePage;
