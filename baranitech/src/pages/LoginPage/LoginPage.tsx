import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
  Alert,
  Box,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router';

interface EditLoginPage {
  email: string;
  password: string;
}

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

const EditLoginPage: React.FC = () => {
  const [form, setForm] = useState<EditLoginPage>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const { email, password } = form;

    if (!email || !password) {
      setError('Both email and password are required.');
      setSubmitting(false);
      return;
    }

    // Simulated login
    if (email === 'admin@example.com' && password === 'password') {
      alert('Login successful');
      navigate('/dashboard'); // redirect after login
    } else {
      setError('Invalid credentials');
    }

    setSubmitting(false);
  };

  return (
    <StyledContainer maxWidth="xs">
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography component="h1" variant="h5">
        Sign In
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
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          margin="normal"
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 3 }}
          disabled={submitting}
        >
          {submitting ? 'Signing in...' : 'Sign In'}
        </Button>
      </StyledForm>

      <Box mt={2}>
        <Typography variant="body2">
          Don't have an account?{' '}
          <Link to="/register" style={{ color: '#1976d2' }}>
            Register
          </Link>
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default EditLoginPage;
