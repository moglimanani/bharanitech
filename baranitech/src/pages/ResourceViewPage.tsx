import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useAllResources } from '../contexts/allResourcesContext';
import { ResourceType } from '../types/resources';
import { getLanguageType } from '../helper';
import { AboutUsTitleStyled } from './styles';


// Styled Components
const Container = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',
  margin: '20px 0 30px',
  textAlign: 'left',
  //padding: theme.spacing(2),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#f9f9f9',
  borderRadius: '12px',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.appBarColour.main,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    padding: '5px 10px 5px',
}));

const StyledDiv = styled('div')(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '14px',
  padding: '5px 10px 5px'
  
}));

const StyledDivPage = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));

export const LearnButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: ".88rem",
  color: theme.palette.appBarColour.light,
  background: theme.palette.appBarColour.main,
  borderRadius: "20px",
  margin: "10px 0 20px",
  padding: "10px 20px",
}));

const VideoFrame = styled("iframe")(({theme}) => ({
  width: "50%",
  height: "auto",
  border: 0,
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));



const ResourceViewPage: React.FC = () => {
  const [resource, setResource] = useState<ResourceType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { allResources } = useAllResources()
  const navigate = useNavigate()
  const { rid } = useParams();

  useEffect(() => {
    if (!rid) return;
    const found = allResources.find((resource: ResourceType) => +resource.id === +rid);

    if (found) {
      setResource(found);
      setLoading(false);
    } else {
      setError('Training not found');
    }

  }, [rid]);

  return (
    <div style={{margin: '0 30px'}}>
     <AboutUsTitleStyled>Resources View</AboutUsTitleStyled> 
    <Container>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : resource ? (
        <StyledPaper elevation={3}>
          <StyledTypography variant="h5" gutterBottom>
            {resource.title}
          </StyledTypography>
          <StyledDiv>
            <span>Description:</span>
            <span>{resource.description}</span>
          </StyledDiv>
          <StyledDiv>
            <span>Type:</span>
            <span>{resource.category.title}</span>
          </StyledDiv>
          <StyledDiv>
            <span>Instructor:</span>
            <span>Ezhumalai</span>
          </StyledDiv>
          <StyledDiv>
            <span>Language:</span>
            <span>{getLanguageType[+resource.language].name}</span>
          </StyledDiv>
        
          {resource.url && (
            <VideoFrame
              src={resource.url}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
          <StyledDivPage>
             <LearnButtonStyled onClick={() => navigate(`${import.meta.env.VITE_ROUTE_RESOURCES_LIST_URL}`)}>Back to Resource page</LearnButtonStyled>
          </StyledDivPage>
          
        </StyledPaper>
      ) : (
        <Typography>No resource found.</Typography>
      )}
    </Container>
    </div>
  );
};

export default ResourceViewPage;
