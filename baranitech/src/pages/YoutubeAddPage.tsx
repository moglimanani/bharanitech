import React, { useState } from 'react';
import { TextField, Button, Box, Container, Typography, Alert } from '@mui/material';

// YouTube URL Create Component
const YoutubeUrlAddPage: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!url || !title) {
      setError('URL and title are required.');
      return;
    }

    setLoading(true);
    setError(null);

    // Simulate URL submission
    setTimeout(() => {
      // You can replace this with an API call to create the URL in the database
      console.log('YouTube URL created:', { url, title, description });
      setSuccess(true);
      setLoading(false);
      setUrl('');
      setTitle('');
      setDescription('');
    }, 1500);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Create YouTube URL
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">YouTube URL created successfully!</Alert>}

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField
          label="YouTube URL"
          variant="outlined"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create YouTube URL'}
        </Button>
      </Box>
    </Container>
  );
};

export default YoutubeUrlAddPage;
