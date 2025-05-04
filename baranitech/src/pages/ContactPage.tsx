
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  Grid,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Handle input changes for text fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };

  // Handle select changes for the subject dropdown
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!contactForm.name || !contactForm.email || !contactForm.subject || !contactForm.message) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);
    setError(null);

    // Simulate API call
    setTimeout(() => {
      console.log('Contact Form Submitted:', contactForm);
      setSuccess(true);
      setLoading(false);
      setContactForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">Your message has been sent successfully!</Alert>}

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
          label="Your Name"
          variant="outlined"
          fullWidth
          name="name"
          value={contactForm.name}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          name="email"
          type="email"
          value={contactForm.email}
          onChange={handleInputChange}
          required
        />

        {/* Subject Selector */}
        <FormControl fullWidth>
          <InputLabel>Subject</InputLabel>
          <Select
            name="subject"
            value={contactForm.subject}
            onChange={handleSelectChange}
            label="Subject"
          >
            <MenuItem value="general-inquiry">General Inquiry</MenuItem>
            <MenuItem value="feedback">Feedback</MenuItem>
            <MenuItem value="support">Support</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Your Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          name="message"
          value={contactForm.message}
          onChange={handleInputChange}
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </Box>
    </Container>
  );
};

export default ContactPage;
