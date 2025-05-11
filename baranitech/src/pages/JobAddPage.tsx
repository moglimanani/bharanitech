import React, { useState } from 'react';
import { TextField, Button, Box, Container, Typography, Alert, MenuItem, Select, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';

// Job interface
interface Job {
  title: string;
  description: string;
  company: string;
  location: string;
  salary: string;
  jobType: string;
}

const JobAddPage: React.FC = () => {
  const [job, setJob] = useState<Job>({
    title: '',
    description: '',
    company: '',
    location: '',
    salary: '',
    jobType: 'full-time',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setJob({
      ...job,
      [name as string]: value,
    });
  };

  // Handle select change for Select component
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setJob({
      ...job,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!job.title || !job.description || !job.company || !job.location || !job.salary) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);
    setError(null);

    // Simulate API call (replace with actual API integration)
    setTimeout(() => {
      console.log('Job Created:', job);
      setSuccess(true);
      setLoading(false);
      setJob({
        title: '',
        description: '',
        company: '',
        location: '',
        salary: '',
        jobType: 'full-time',
      });
    }, 1500);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Add New Job
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">Job created successfully!</Alert>}

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
          label="Job Title"
          variant="outlined"
          fullWidth
          name="title"
          value={job.title}
          onChange={handleChange}
          required
        />
        <TextField
          label="Company Name"
          variant="outlined"
          fullWidth
          name="company"
          value={job.company}
          onChange={handleChange}
          required
        />
        <TextField
          label="Job Location"
          variant="outlined"
          fullWidth
          name="location"
          value={job.location}
          onChange={handleChange}
          required
        />
        <TextField
          label="Salary"
          variant="outlined"
          fullWidth
          name="salary"
          value={job.salary}
          onChange={handleChange}
          required
        />
        <TextField
          label="Job Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          name="description"
          value={job.description}
          onChange={handleChange}
          required
        />
        
        {/* Job Type Selector */}
        <FormControl fullWidth>
          <InputLabel>Job Type</InputLabel>
          <Select
            name="jobType"
            value={job.jobType}
            onChange={handleSelectChange}
            label="Job Type"
          >
            <MenuItem value="full-time">Full-time</MenuItem>
            <MenuItem value="part-time">Part-time</MenuItem>
            <MenuItem value="contract">Contract</MenuItem>
            <MenuItem value="internship">Internship</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
        >
          {loading ? 'Creating Job...' : 'Create Job'}
        </Button>
      </Box>
    </Container>
  );
};

export default JobAddPage;
