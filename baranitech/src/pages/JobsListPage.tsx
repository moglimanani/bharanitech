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
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
}));

const JobsListPage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Job Openings
      </Typography>
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid size={{xs:12, sm:6, md:4}} key={job.id}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {job.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>{job.company}</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.location}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }} color="text.secondary">
                  {job.description}
                </Typography>
              </CardContent>
              <Box sx={{ padding: 2 }}>
                <Button fullWidth variant="contained" color="primary">
                  Apply Now
                </Button>
              </Box>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobsListPage;
