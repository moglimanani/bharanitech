
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
  styled,
  ContainerProps,
} from '@mui/material';
import { BoxContactStyled, GridContactStyled, LearnButtonStyled, LearningResourcesStyled, } from './styles';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactUsFormSchema } from '../validationSchema/schema';
import { InferType } from 'yup';
import httpService from '../api/httpService';

interface ContactFormDataType {
  username: string,
  email: string,
  subject: string,
  message: string,
  occupation: string,
  dob: string,
  phone: string
}
interface ApiResponse {
  status: boolean;
  data: ContactFormDataType[];
  message: string;
}

export const StyledContainer = styled(Container, {
  shouldForwardProp: (prop) => !['variant', 'sx'].includes(prop as string)
})<ContainerProps>(({ theme }) => ({
  marginTop: theme.spacing(10),
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.paper,
}))

export const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(2),
}));
type FormData = InferType<typeof ContactUsFormSchema>;

const ContactPage: React.FC = () => {
  const [success, setSuccess] = useState(false)
  const { control, handleSubmit,
    formState,
    setValue,
    trigger,
    reset } = useForm<FormData>({
      resolver: yupResolver(ContactUsFormSchema),
      mode: 'all',
      reValidateMode: 'onChange',
      defaultValues: {
        username: '',
        email: '',
        subject: '',
        message: '',
        occupation: '',
        dob: '',
        phone: ''
      }
    })
  const { errors, isSubmitting, isValid } = formState

  const submitContactForm = async (data: ContactFormDataType) => {
    try {
      const response = await httpService.post<ApiResponse>(`${import.meta.env.VITE_API_BASE_URL}contact`, data);

      if (response.status) {
        alert('Message sent successfully!');
        reset()
        setSuccess(true)
        // Optionally reset the form here
      }
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const onSubmit = async (data: FormData) => {
    submitContactForm(data)

  };


  return (

    <Container sx={{ mt: 5 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LearningResourcesStyled variant="h4" gutterBottom>
          Contact Us
        </LearningResourcesStyled>
        {success && <Alert severity="success">Your message has been sent successfully!</Alert>}
        <GridContactStyled>
          <Grid size={6} className={'fullwidth'}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="User name"
                  fullWidth
                  margin="normal"
                  error={!!errors.username}
                  helperText={errors.username?.message}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  fullWidth
                  margin="normal"
                  error={!!errors.email}
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
              name="occupation"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Occupation"
                  fullWidth
                  margin="normal"
                  error={!!errors.occupation}
                  helperText={errors.occupation?.message}
                />
              )}
            />
            <Controller
              name="dob"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type='date'
                  label="Date of Birth"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  margin="normal"
                  error={!!errors.dob}
                  helperText={errors.dob?.message}
                  onBlur={() => {
                    field.onBlur(); // still call field's onBlur
                    trigger('dob'); // manually trigger validation
                  }}
                />
              )}
            />

            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Subject"
                  fullWidth
                  margin="normal"
                  error={!!errors.subject}
                  helperText={errors.subject?.message}
                />
              )}
            />
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Message"
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  error={!!errors.message}
                  helperText={errors.message?.message}
                />
              )}
            />
            <LearnButtonStyled
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting || !isValid}
            >
              Send Message
            </LearnButtonStyled>
            {/* </BoxContactStyled> */}
          </Grid>
          <Grid size={6} className={'hidden'}>
            <img src="/login.png" alt="login" loading="lazy" />
          </Grid>
        </GridContactStyled>
      </form>
    </Container>
  )
};

export default ContactPage;
