import React, { useContext, useEffect, useState } from 'react';
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
import { validateEmail, validatePassword } from '../../helper';
import { useUser } from '../../contexts/userContext';
import httpService from '../../api/httpService';
import { UseRestoreUserSession } from '../../hooks/useRestoreUserSession';

interface EditLoginPage {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

interface LoginResponse {
  status: boolean;
  data: {
    id: number;
    username: string;
    email: string;
    phone: string;
  };
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
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  UseRestoreUserSession()


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    const { name, value } = e.target;
    const errors: FormErrors = { ...formErrors };
    if (name === 'email') {
      errors.email = validateEmail(value)
    }
    if (name === 'password') {
      errors.password = validatePassword(value)
    }
    setFormErrors(errors); 
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const errors: FormErrors = { ...formErrors };

    if (name === 'email') {
      errors.email = validateEmail(value)
    }

    // Validate password on blur
    if (name === 'password') {
      errors.password = validatePassword(value);
    }

    setFormErrors(errors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormErrors({});

    const { email, password } = form;
    const errors: FormErrors = {};

    if (validateEmail(email)) {
      errors.email = validateEmail(email);
    }
    if (validatePassword(password)) {
      errors.password = validatePassword(password)
    }


    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSubmitting(false);
      return;
    }

    try {
      const res = await httpService.post<LoginResponse>('login/checklogin', {
        email,
        password,
      });
      setFormErrors({});
      if (res.status) {
        const data = res.data
        sessionStorage.setItem(import.meta.env.VITE_APP_USER_SESSION_NAME, JSON.stringify({
          email: data.email,
          phone: data.phone,
          username: data.username,
          id: data.id
        }));
        navigate(import.meta.env.VITE_ROUTE_ADMIN_URL)
      }
    } catch (err) {
      setFormErrors({ general: 'Login failed. Please check your credentials.' });
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

      {formErrors.general && (
        <Alert severity="error" sx={{ mt: 2, width: '100%' }}>
          {formErrors.general}
        </Alert>
      )}

      <StyledForm onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email *"
          name="email"
          type="text"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          margin="normal"
          error={Boolean(formErrors.email)}
          helperText={formErrors.email}
        />
        <TextField
          fullWidth
          label="Password *"
          name="password"
          type="password"
          onBlur={handleBlur}
          value={form.password}
          onChange={handleChange}
          margin="normal"
          error={Boolean(formErrors.password)}
          helperText={formErrors.password}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 3 }}
          disabled={submitting || validateEmail(form.email).length !== 0 || validatePassword(form.password).length !== 0}
        >
          {submitting ? 'Signing in...' : 'Sign In'}
        </Button>
      </StyledForm>

      <Box mt={2}>
        <Typography variant="body2">
          Don't have an account?{' '}
          <Link to={import.meta.env.VITE_ROUTE_REGISTER_USER_URL} style={{ color: '#1976d2' }}>
            Register
          </Link>
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default EditLoginPage;
