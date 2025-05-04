import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Avatar,
  Alert,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { styled } from '@mui/material/styles';

interface RegisterForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

// Styled with MUI’s styled API
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(10),
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.paper,
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(2),
}));

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState<RegisterForm>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const { username, email, password, confirmPassword, phone } = form;

    if (!username || !email || !password || !confirmPassword || !phone) {
      setError('All fields are required.');
      setSubmitting(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setSubmitting(false);
      return;
    }

    // Simulated API call
    console.log('Registering user:', form);
    alert('Registration successful!');
    setSubmitting(false);
  };

  return (
    <StyledContainer maxWidth="sm">
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
        <PersonAddIcon />
      </Avatar>

      <Typography component="h1" variant="h5">
        Register
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mt: 2, width: '100%' }}>
          {error}
        </Alert>
      )}

      <StyledForm onSubmit={handleSubmit}>
        <TextField
          fullWidth
          required
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          required
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          required
          label="Phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          required
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          required
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          margin="normal"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          disabled={submitting}
        >
          {submitting ? 'Registering...' : 'Register'}
        </Button>
      </StyledForm>
    </StyledContainer>
  );
};

export default RegisterPage;
