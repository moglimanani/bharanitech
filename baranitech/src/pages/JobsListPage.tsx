import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  CircularProgress,
  Alert,
  Box,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { LearnButtonStyled, LearningResourcesStyled, ParaStyled, TitleStyled } from './styles';

// Job interface
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  //boxShadow: theme.shadows[3],
  //borderRadius: theme.shape.borderRadius,
  borderRadius: '20px',
}));

const JobsListPage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState<string | null>(null);

  // Simulating data fetching with mock array
  useEffect(() => {
    const mockJobs: Job[] = [
      {
        id: 1,
        title: 'Software Engineer',
        company: 'TechCorp',
        location: 'New York, NY',
        description: 'Developing cutting-edge web applications using React and Node.js.',
      },
      {
        id: 2,
        title: 'Product Manager',
        company: 'Innovate Ltd.',
        location: 'San Francisco, CA',
        description: 'Leading product development and overseeing the roadmap for mobile apps.',
      },
      {
        id: 3,
        title: 'UX Designer',
        company: 'DesignCo',
        location: 'Austin, TX',
        description: 'Design intuitive interfaces for our mobile and web applications.',
      },
      {
        id: 4,
        title: 'Data Scientist',
        company: 'DataSolutions',
        location: 'Remote',
        description: 'Analyze large datasets and build predictive models using machine learning.',
      },
    ];

    setTimeout(() => {
      setJobs(mockJobs); // simulate a delay for fetching
      setLoading(false);
    }, 1500);
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
      <LearningResourcesStyled variant="h4" gutterBottom>
        Job Openings 
      </LearningResourcesStyled>
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid size={{xs:12, sm:6, md:4}} key={job.id} style={{marginBottom: '30px'}}>
            <StyledCard>
              <CardContent>
                <TitleStyled variant="h6" gutterBottom>
                  {job.title}
                </TitleStyled>
                <ParaStyled variant="body2" color="text.secondary">
                  <strong>{job.company}</strong>
                </ParaStyled>
                <ParaStyled variant="body2" color="text.secondary">
                  {job.location}
                </ParaStyled>
                <ParaStyled variant="body2" sx={{ mt: 2 }} color="text.secondary">
                  {job.description}
                </ParaStyled>
              </CardContent>
              <Box sx={{ padding: 2 }}>
                <LearnButtonStyled fullWidth variant="contained" color="primary">
                  Apply Now
                </LearnButtonStyled>
              </Box>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobsListPage;
