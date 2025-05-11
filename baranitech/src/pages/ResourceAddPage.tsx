import React, { useState } from 'react';
import { TextField, Button, Box, Container, Typography, Alert, MenuItem, Select, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';

// Define the resource interface
interface Resource {
  name: string;
  description: string;
  url: string;
  type: string;
}

const ResourceAddPage: React.FC = () => {
  const [resource, setResource] = useState<Resource>({
    name: '',
    description: '',
    url: '',
    type: 'document',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Handle input changes for text fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResource({
      ...resource,
      [name]: value,
    });
  };

  // Handle select changes for resource type
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setResource({
      ...resource,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!resource.name || !resource.description || !resource.url) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);
    setError(null);

    // Simulate API call to add resource
    setTimeout(() => {
      console.log('Resource Created:', resource);
      setSuccess(true);
      setLoading(false);
      setResource({
        name: '',
        description: '',
        url: '',
        type: 'document',
      });
    }, 1500);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Add New Resource
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">Resource created successfully!</Alert>}

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
          label="Resource Name"
          variant="outlined"
          fullWidth
          name="name"
          value={resource.name}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Resource URL"
          variant="outlined"
          fullWidth
          name="url"
          value={resource.url}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Resource Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          name="description"
          value={resource.description}
          onChange={handleInputChange}
          required
        />
        
        {/* Resource Type Selector */}
        <FormControl fullWidth>
          <InputLabel>Resource Type</InputLabel>
          <Select
            name="type"
            value={resource.type}
            onChange={handleSelectChange}
            label="Resource Type"
          >
            <MenuItem value="document">Document</MenuItem>
            <MenuItem value="video">Video</MenuItem>
            <MenuItem value="audio">Audio</MenuItem>
            <MenuItem value="image">Image</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
        >
          {loading ? 'Creating Resource...' : 'Create Resource'}
        </Button>
      </Box>
    </Container>
  );
};

export default ResourceAddPage;
