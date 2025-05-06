import React, { useEffect, useState } from 'react';
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
import { validateEmail, validateName, validatePassword, validatePhone } from '../../helper';
import axiosInstance from '../../api/axiosInstance';
import { useNavigate } from 'react-router';

interface RegisterForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}
interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  phone?: string;
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
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [formValid, setFormValid] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate()
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    const { name, value } = e.target;
    const errors: FormErrors = { ...formErrors };

    if (name === 'username') {
      errors.username = validateName(value)
    }
    if (name === 'email') {
      errors.email = validateEmail(value)
    }
    if (name === 'phone') {
      errors.phone = validatePhone(value)
    }
    if (name === 'password') {
      errors.password = validatePassword(value)
    }
    if (name === 'confirmPassword') {
      errors.confirmPassword = validatePassword(value)
      if (errors.confirmPassword.length !== 0 && form.confirmPassword !== form.password) {
        errors.confirmPassword = 'Password and confirm password does not match.'
      }
    }

    setFormErrors(errors);
  };

  useEffect(() => {
    const email = validateEmail(form.email);
    const name = validateName(form.username);
    const phone = validatePhone(form.phone);
    const password = validatePassword(form.password);
    const confirmPassword = validatePassword(form.confirmPassword);

    const test = email.length === 0 && name.length === 0 && phone.length === 0 && password.length === 0 && confirmPassword.length === 0 && confirmPassword === password;

    setFormValid(test)
  }, [form])

  const handleSubmit = async (e: React.FormEvent) => {
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
    try {
      const res = await axiosInstance.post('login', {
        username, email, password, phone
      });

      if (res.data.status) {
        setOpenSnackbar(true)
        setForm({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          phone: '',
        })

      }

    } catch (err: any) {
      if (err?.response?.data?.error) {

        setError(Object.values(err?.response?.data?.error ?? {}).join(' '));
      } else {
        setError('Invalid credentials');
      }
      setSubmitting(false);
    }

    setSubmitting(false);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const errors: FormErrors = { ...formErrors };

    if (name === 'username') {
      errors.username = validateName(value)
    }
    if (name === 'email') {
      errors.email = validateEmail(value)
    }
    if (name === 'phone') {
      errors.phone = validatePhone(value)
    }
    if (name === 'password') {
      errors.password = validatePassword(value)
    }
    if (name === 'confirmPassword') {
      errors.confirmPassword = validatePassword(value)
      if (errors.confirmPassword.length !== 0 && form.confirmPassword !== form.password) {
        errors.confirmPassword = 'Password and confirm password does not match.'
      }
    }

    setFormErrors(errors);
  };

  const handleToLogin = () => {
    navigate('/ea532f28cda5ac4d4b037af546c61233/login'); // or any other route
  };

  return (
    <StyledContainer maxWidth="sm">
      {openSnackbar && (
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          Registration successful!
        </Alert>
      )}
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
          label="Username *"
          name="username"
          value={form.username}
          onChange={handleChange}
          margin="normal"
          onBlur={handleBlur}
          error={Boolean(formErrors.username)}
          helperText={formErrors.username}
        />
        <TextField
          fullWidth
          label="Email *"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          margin="normal"
          onBlur={handleBlur}
          error={Boolean(formErrors.email)}
          helperText={formErrors.email}
        />
        <TextField
          fullWidth
          label="Phone *"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          margin="normal"
          onBlur={handleBlur}
          error={Boolean(formErrors.phone)}
          helperText={formErrors.phone}
        />
        <TextField
          fullWidth
          label="Password *"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          margin="normal"
          onBlur={handleBlur}
          error={Boolean(formErrors.password)}
          helperText={formErrors.password}
        />
        <TextField
          fullWidth
          label="Confirm Password *"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          margin="normal"
          onBlur={handleBlur}
          error={Boolean(formErrors.confirmPassword)}
          helperText={formErrors.confirmPassword}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          disabled={submitting || !formValid}
        >
          {submitting ? 'Registering...' : 'Register'}
        </Button>
        <Button
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          onClick={handleToLogin}
        >
         Back to Login
        </Button>
      </StyledForm>
    </StyledContainer>
  );
};

export default RegisterPage;
