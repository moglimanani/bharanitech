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
import { AdminTitleStyled, LearnButtonStyled, ParaStyled, TitleStyled } from './styles';

// Resource interface
interface Resource {
  id: number;
  title: string;
  description: string;
  link: string;
  type: string; // e.g., 'Article', 'Book', 'Video'
}

const StyledCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  // boxShadow: theme.shadows[3],
  borderRadius: '20px',
}));

const ResourcesListPage: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState<string | null>(null);

  // Simulating data fetching with mock array
  useEffect(() => {
    const mockResources: Resource[] = [
      {
        id: 1,
        title: 'Understanding React Hooks',
        description: 'A deep dive into React hooks and their usage.',
        link: 'https://reactjs.org/docs/hooks-intro.html',
        type: 'Article',
      },
      {
        id: 2,
        title: 'JavaScript: The Good Parts',
        description: 'A book on JavaScript that focuses on the most elegant parts of the language.',
        link: 'https://www.oreilly.com/library/view/javascript-the-good/9780596517748/',
        type: 'Book',
      },
      {
        id: 3,
        title: 'CSS Flexbox: A Complete Guide',
        description: 'Learn everything about Flexbox and how to design flexible layouts.',
        link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
        type: 'Article',
      },
      {
        id: 4,
        title: 'Complete Guide to React',
        description: 'A comprehensive React tutorial for beginners.',
        link: 'https://reactjs.org/tutorial/tutorial.html',
        type: 'Tutorial',
      },
    ];

    setTimeout(() => {
      setResources(mockResources); // simulate a delay for fetching
      setLoading(false);
    }, 100);
  }, []);

  if (loading) {
    return (
      <Container sx={{ mt: 5, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

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
        Learning Resources
      </AdminTitleStyled>
      <Grid container spacing={3} style={{marginBottom: '30px'}}>
        {resources.map((resource) => (
          <Grid size={{xs:12, sm:6, md:4}} key={resource.id}>
            <StyledCard>
              <CardContent>
                <TitleStyled variant="h6" gutterBottom>
                  {resource.title}
                </TitleStyled>
                <ParaStyled variant="body2" color="text.secondary">
                  {resource.description}
                </ParaStyled>
                <ParaStyled variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Type: {resource.type}
                </ParaStyled>
              </CardContent>
              <Box sx={{ padding: 2 }}>
                <LearnButtonStyled fullWidth variant="contained" color="primary" href={resource.link}>
                  Access Resource
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
