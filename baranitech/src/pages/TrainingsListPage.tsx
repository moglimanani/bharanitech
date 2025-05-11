import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Divider,
} from '@mui/material';

// Define a type for training items
interface Training {
  id: number;
  title: string;
  description: string;
  trainer_name: string;
  duration_minutes: number;
  date: string;
}

// Mock training data
const trainings: Training[] = [
  {
    id: 1,
    title: 'React Basics',
    description: 'Learn the fundamentals of React including JSX and state management.',
    trainer_name: 'John Doe',
    duration_minutes: 90,
    date: '2025-05-10',
  },
  {
    id: 2,
    title: 'Advanced TypeScript',
    description: 'Deep dive into TypeScript with real-world patterns.',
    trainer_name: 'Jane Smith',
    duration_minutes: 120,
    date: '2025-05-12',
  },
  {
    id: 3,
    title: 'UI Design Principles',
    description: 'Understand design fundamentals for better UI/UX.',
    trainer_name: 'Alice Johnson',
    duration_minutes: 75,
    date: '2025-05-15',
  },
];

const TrainingsListPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Upcoming Trainings
      </Typography>

      <Grid container spacing={3}>
        {trainings.map((training) => (
          <Grid size={{xs:12, sm:6, md:4}} key={training.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {training.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {training.description}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2">
                  <strong>Trainer:</strong> {training.trainer_name}
                </Typography>
                <Typography variant="body2">
                  <strong>Duration:</strong> {training.duration_minutes} mins
                </Typography>
                <Typography variant="body2">
                  <strong>Date:</strong> {training.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TrainingsListPage;
