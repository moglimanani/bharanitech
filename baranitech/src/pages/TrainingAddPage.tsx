import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Alert,
} from '@mui/material';

// Define type for form fields
interface TrainingForm {
  title: string;
  description: string;
  trainer_name: string;
  duration_minutes: string;
  date: string;
}

const TrainingAddPage: React.FC = () => {
  const [form, setForm] = useState<TrainingForm>({
    title: '',
    description: '',
    trainer_name: '',
    duration_minutes: '',
    date: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!form.title || !form.duration_minutes || !form.date) {
      setError('Title, Duration, and Date are required.');
      return;
    }

    setError(null);
    setSuccess(false);

    // Simulate API call
    setTimeout(() => {
      console.log('Training created:', form);
      setSuccess(true);
      setForm({
        title: '',
        description: '',
        trainer_name: '',
        duration_minutes: '',
        date: '',
      });
    }, 1000);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Add New Training
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>Training added successfully!</Alert>}

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={{xs:12}}>
            <TextField
              label="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid size={{xs:12}}>
            <TextField
              label="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
            />
          </Grid>

          <Grid size={{xs:12}}>
            <TextField
              label="Trainer Name"
              name="trainer_name"
              value={form.trainer_name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid size={{xs:12}}>
            <TextField
              label="Duration (minutes)"
              name="duration_minutes"
              type="number"
              value={form.duration_minutes}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid size={{xs:12}}>
            <TextField
              label="Date"
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
              required
            />
          </Grid>

          <Grid size={{xs:12}}>
            <Button variant="contained" type="submit" fullWidth>
              Add Training
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TrainingAddPage;
