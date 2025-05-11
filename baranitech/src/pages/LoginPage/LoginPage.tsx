import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
  Box,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router';
import httpService from '../../api/httpService';
import { UseRestoreUserSession } from '../../hooks/useRestoreUserSession';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../validationSchema/schema';
import { useAxiosErrorHandler } from '../../hooks/useAxiosErrorHandler';
import { useErrorAlert } from '../../contexts/ErrorAlertContext';

interface LoginPageType {
  email: string;
  password: string;
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
  const navigate = useNavigate();
  UseRestoreUserSession()
  const {showError} = useErrorAlert()
  useAxiosErrorHandler(showError)

  const { control, formState: { errors, isValid, isSubmitting }, handleSubmit, reset } = useForm<LoginPageType>({
    resolver: yupResolver(LoginFormSchema),
    mode: 'onBlur'
  })
  // try {
  //   const res = await httpService.post<LoginResponse>('login/checklogin', {
  //     email,
  //     password,
  //   });
  //   setFormErrors({});
  //   if (res.status) {
  //     const data = res.data
  //     sessionStorage.setItem(import.meta.env.VITE_APP_USER_SESSION_NAME, JSON.stringify({
  //       email: data.email,
  //       phone: data.phone,
  //       username: data.username,
  //       id: data.id
  //     }));
  //     navigate(import.meta.env.VITE_ROUTE_ADMIN_URL)
  //   }
  //    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // } catch (err) {
  //   setFormErrors({ general: 'Login failed. Please check your credentials.' });
  // }

  // setSubmitting(false);
  // };

  const onSubmit = async (data: LoginPageType) => {
    try {
      const res = await httpService.post<LoginResponse>('login/checklogin', data);
  
      if (res.status) {
        const user = res.data;
        sessionStorage.setItem(import.meta.env.VITE_APP_USER_SESSION_NAME, JSON.stringify(user));
        navigate(import.meta.env.VITE_ROUTE_ADMIN_URL);
      } else {
        // optional: show a toast or alert here
      }
    } catch (err) {
      // optional: show error alert
      console.error(err);
    }  }

  return (
    <StyledContainer maxWidth="xs">
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography component="h1" variant="h5">
        Sign In
      </Typography>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              fullWidth
              label="Email *"
              type="email"
              margin="normal"
              {...field}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              fullWidth
              label="Password *"
              type="password"
              margin="normal"
              {...field}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
          )}
        />

        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 3 }}
          disabled={!isValid}
        >
          {isSubmitting ? 'Signing in...' : 'Sign In'}
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
