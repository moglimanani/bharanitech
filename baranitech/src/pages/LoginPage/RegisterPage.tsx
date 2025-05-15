import React, { useEffect, useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Avatar,
  Alert,
  Grid 
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterUserSchema } from '../../validationSchema/schema';
import httpService from '../../api/httpService';
import { useErrorAlert } from '../../contexts/errorAlertContext';
import { useAxiosErrorHandler } from '../../hooks/useAxiosErrorHandler';
import { LoginWrapperButtonStyled, LoginWrapperIconStyled, LoginWrapperImageStyled, LoginWrapperStyled } from './styles';

interface RegisterFormType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}
interface RegisterFormResponse {
  status: boolean;
  data: {
    id: number;
    username: string;
    email: string;
    phone: string;
  };
  message: string;
}



// Styled with MUI’s styled API
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(1),
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
 // border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.spacing(1),
 // boxShadow: theme.shadows[3],
 // backgroundColor: theme.palette.background.paper,
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(2),
}));

const RegisterPage: React.FC = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate()
  const { showError } = useErrorAlert()
  useAxiosErrorHandler(showError)
  const {
    control,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    reset
  } = useForm<RegisterFormType>({
    resolver: yupResolver(RegisterUserSchema),
    mode: 'onChange',
    reValidateMode: 'onBlur',
    defaultValues: {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  }
  })

  const onSubmit = async (data: RegisterFormType) => {
    try {
      const res = await httpService.post<RegisterFormResponse>('login', data);
      console.log(res);
      // @ts-ignore
      if (res.status) {
        setOpenSnackbar(true)
        reset()
        // sessionStorage.setItem(import.meta.env.VITE_APP_USER_SESSION_NAME, JSON.stringify(user));
        // navigate(import.meta.env.VITE_ROUTE_ADMIN_URL);
      } else {
        // optional: show a toast or alert here
      }
    } catch (err) {
      // optional: show error alert
      console.error(err);
    }
  }

  const handleToLogin = () => {
    navigate(import.meta.env.VITE_ROUTE_LOGIN_URL); // or any other route
  };

  return (
    <LoginWrapperStyled container>
      <Grid size={{ xs: 12, md: 5 }}>
      <StyledContainer maxWidth="sm">
      {openSnackbar && (
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          Registration successful!
        </Alert>
      )}
      <LoginWrapperIconStyled sx={{ m: 1, bgcolor: 'primary.main' }}>
        <PersonAddIcon />
      </LoginWrapperIconStyled>

      <Typography component="h1" variant="h5">
        Register
      </Typography>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='username'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              fullWidth
              label="Username *"
              margin="normal"
              {...field}
              error={Boolean(errors.username)}
              helperText={errors.username?.message}
            />
          )}
        />

        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              fullWidth
              label="Email *"
              margin="normal"
              {...field}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name='phone'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              fullWidth
              label="Phone Number *"
              margin="normal"
              {...field}
              error={Boolean(errors.phone)}
              helperText={errors.phone?.message}
            />
          )}
        />
        <Controller
          name='password'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              fullWidth
              label="Password *"
              margin="normal"
              type="password"
              {...field}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
          )}
        />
        <Controller
          name='confirmPassword'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              fullWidth
              label="Confirm Password *"
              margin="normal"
              type="password"
              {...field}
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword?.message}
            />
          )}
        />

        <LoginWrapperButtonStyled
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          disabled={!isValid}
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </LoginWrapperButtonStyled>
        <LoginWrapperButtonStyled
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          onClick={handleToLogin}
        >
          Back to Login
        </LoginWrapperButtonStyled>
      </StyledForm>
    </StyledContainer>
      </Grid>
      <LoginWrapperImageStyled size={{ xs: 12, md: 5 }}>
         <img src="/login.png" alt="login" loading="lazy" />
      </LoginWrapperImageStyled>
    </LoginWrapperStyled>
   
  );
};

export default RegisterPage;
