
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
import { Form } from 'react-router';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
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

  const { control, handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue,
    trigger,
    reset } = useForm<FormData>({
      resolver: yupResolver(ContactUsFormSchema),
      mode: 'all',
      defaultValues: {
        username: '',
        email: '',
        subject: '',
        message: '',
      }
    })

  const onSubmit = async (data: FormData) => {
    console.log('data', data);

  };


  return (

    <Container sx={{ mt: 5 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography> */}
        <LearningResourcesStyled variant="h4" gutterBottom>
          Contact Us
        </LearningResourcesStyled>
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
    </Container >

  )

  //     <Container sx={{ mt: 5 }}>
  //       <LearningResourcesStyled variant="h4" gutterBottom>
  //         Contact Us
  //       </LearningResourcesStyled>

  //       {/* {error && <Alert severity="error">{error}</Alert>}
  //       {success && <Alert severity="success">Your message has been sent successfully!</Alert>} */}
  //       <GridContactStyled>
  //         <Grid size={6} className={'fullwidth'}>
  //           <BoxContactStyled
  //             component="form"
  //             onSubmit={handleSubmit}
  //             sx={{
  //               display: 'flex',
  //               flexDirection: 'column',
  //               gap: 2,
  //             }}
  //           >
  //             <TextField
  //               label="Your Name"
  //               variant="outlined"
  //               fullWidth
  //               name="username"
  //               value={contactForm.name}
  //               onChange={handleInputChange}
  //               required
  //             />
  //             <TextField
  //               label="Your Email"
  //               variant="outlined"
  //               fullWidth
  //               name="email"
  //               type="email"
  //               value={contactForm.email}
  //               onChange={handleInputChange}
  //               required
  //             />

  //             {/* Subject Selector */}
  //             <FormControl fullWidth>
  //               <InputLabel>Subject</InputLabel>
  //               <Select
  //                 name="subject"
  //                 value={contactForm.subject}
  //                 onChange={handleSelectChange}
  //                 label="Subject"
  //               >
  //                 <MenuItem value="general-inquiry">General Inquiry</MenuItem>
  //                 <MenuItem value="feedback">Feedback</MenuItem>
  //                 <MenuItem value="support">Support</MenuItem>
  //                 <MenuItem value="other">Other</MenuItem>
  //               </Select>
  //             </FormControl>

  //             <TextField
  //               label="Your Message"
  //               variant="outlined"
  //               fullWidth
  //               multiline
  //               rows={4}
  //               name="message"
  //               value={contactForm.message}
  //               onChange={handleInputChange}
  //               required
  //             />

  //             <LearnButtonStyled
  //               type="submit"
  //               variant="contained"
  //               color="primary"
  //               fullWidth
  //               disabled={loading}
  //             >
  //               {loading ? 'Sending...' : 'Send Message'}
  //             </LearnButtonStyled>
  //           </BoxContactStyled>
  //         </Grid>
  //         <Grid size={6} className={'hidden'}>
  //           <img src="/login.png" alt="login" loading="lazy" />
  //         </Grid>
  //       </GridContactStyled>




  //     </Container>
  // );
};

export default ContactPage;
