import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Grid,
  Container,
  CircularProgress,
  Alert,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { AdminTitleStyled, LangStyled, LearnButtonStyled, ParaStyled, TitleStyled } from './styles';
import { useYouTubeCategories } from '../contexts/youtubeCategoryContext';
import { useAllResources } from '../contexts/allResourcesContext';
import { getLanguageType } from '../helper';
import { useNavigate } from 'react-router';

const StyledCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  // boxShadow: theme.shadows[3],
  borderRadius: '20px',
  position: 'relative',
}));
const VideoFrame = styled("iframe")(() => ({
  width: "100%",
  height: 200,
  border: 0,
}));



const ResourcesListPage: React.FC = () => {
  const [error] = useState<string | null>(null);
  const {categories} = useYouTubeCategories();
  const { allResources: youtubes } = useAllResources()
  const navigate = useNavigate()
  console.log(categories, youtubes);

  if (!youtubes || youtubes.length === 0) return (<></>)


  if (error) {
    return (
      <Container sx={{ mt: 5 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 1 }}>
      <AdminTitleStyled variant="h4" gutterBottom>
        Resources
      </AdminTitleStyled>
      <Grid container spacing={3} style={{ marginBottom: '30px' }}>
        {youtubes.map((resource) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={resource.id}>
            <StyledCard>
              <CardContent>
                 <LangStyled>
                  {getLanguageType[+resource.language].name}
                  </LangStyled>
                <TitleStyled variant="h6" gutterBottom  onClick={() => navigate(`${import.meta.env.VITE_ROUTE_RESOURCES_LIST_URL}/${resource.id}`)} sx={{cursor: 'pointer' }}>
                  {resource.title}
                </TitleStyled>
               
                {/* <ParaStyled variant="body2" color="text.secondary">
                <span>Language:</span> {getLanguageType[+resource.language].name}
                </ParaStyled> */}
                <ParaStyled variant="body2" color="text.secondary">
                 <span>Type: </span>  
                  {categories.find((cat) => cat.id === resource.type)?.title}
                </ParaStyled>
                <ParaStyled variant="body2" color="text.secondary">
                  {resource.description}
                </ParaStyled>
                <ParaStyled variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {resource.url && (
                <VideoFrame
                  src={resource.url}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
                </ParaStyled>
              </CardContent>
              <Box sx={{ padding: 2 }}>
                <LearnButtonStyled fullWidth variant="contained" color="primary" onClick={() => navigate(`${import.meta.env.VITE_ROUTE_RESOURCES_LIST_URL}/${resource.id}`)} sx={{cursor: 'pointer' }} >
                  Learn
                </LearnButtonStyled>
              </Box>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ResourcesListPage;
