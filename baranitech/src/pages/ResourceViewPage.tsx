import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useAllResources } from '../contexts/allResourcesContext';
import { ResourceType } from '../types/resources';
import { getLanguageType } from '../helper';


// Styled Components
const Container = styled(Box)(({ theme }) => ({
  maxWidth: 600,
  margin: '50px auto',
  padding: theme.spacing(4),
}));

const VideoFrame = styled("iframe")(() => ({
  width: "100%",
  height: "auto",
  border: 0,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#f9f9f9',
  borderRadius: theme.shape.borderRadius,
}));

const Label = styled(Typography)({
  fontWeight: 600,
  marginBottom: 4,
});

const Value = styled(Typography)({
  marginBottom: 16,
});

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
    <Container>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : resource ? (
        <StyledPaper elevation={3}>
          <Typography variant="h5" gutterBottom>
            {resource.title}
          </Typography>
          <Label>Description:</Label>
          <Value>{resource.description}</Value>
          <Label>Type:</Label>
          <Value>{resource.category.title}</Value>
          <Label>Instructor:</Label>
          <Value>Ezhumalai</Value>
          <Label>Language:</Label>
          <Value>{getLanguageType[+resource.language].name}</Value>
          {resource.url && (
            <VideoFrame
              src={resource.url}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
          <Button onClick={() => navigate(`${import.meta.env.VITE_ROUTE_RESOURCES_LIST_URL}`)}>Back to Resource page</Button>
        </StyledPaper>
      ) : (
        <Typography>No resource found.</Typography>
      )}
    </Container>
  );
};

export default ResourceViewPage;
