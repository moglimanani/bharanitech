import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  CircularProgress,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

interface YoutubeVideo {
  id: number;
  title: string;
  description: string;
  video_id: string; // YouTube video ID
  url: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const mockData: YoutubeVideo[] = [
    {
      id: 1,
      title: 'How to Learn React',
      description: 'A complete guide to learning React.js',
      video_id: 'dQw4w9WgXcQ',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      id: 2,
      title: 'Understanding JavaScript Closures',
      description: 'A deep dive into closures in JavaScript.',
      video_id: '9gzh7z2b6iI',
      url: 'https://www.youtube.com/watch?v=9gzh7z2b6iI',
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox',
      description: 'When to use CSS Grid and Flexbox.',
      video_id: 'hdI2bqOjy3c',
      url: 'https://www.youtube.com/watch?v=hdI2bqOjy3c',
    },
    {
      id: 4,
      title: 'Mastering React Hooks',
      description: 'Learn everything about React hooks.',
      video_id: 'uR1IxIh70pA',
      url: 'https://www.youtube.com/watch?v=uR1IxIh70pA',
    },
  ];

const YoutubeListPage: React.FC = () => {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // axios
    //   .get<YoutubeVideo[]>('/api/youtube') // adjust to your actual endpoint
    //   .then((res) => {
    //     setVideos(res.data.data || res.data); // supports API resource structure
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     setError('Failed to load YouTube videos');
    //     setLoading(false);
    //   });
    setTimeout(() => {
        setVideos(mockData);
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
        YouTube Videos
      </Typography>
      <Grid container spacing={3}>
        {videos.map((video) => (
          <Grid size={{xs:12, sm:6, md:4}} key={video.id}>
            <StyledCard>
              <CardMedia
                component="iframe"
                height="200"
                src={`https://www.youtube.com/embed/${video.video_id}`}
                title={video.title}
                allowFullScreen
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {video.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {video.description}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default YoutubeListPage;
