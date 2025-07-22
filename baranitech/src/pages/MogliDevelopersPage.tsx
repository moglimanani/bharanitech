import { Container, Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm, SubmitHandler, Resolver, Controller } from 'react-hook-form';
import { AboutUsDivWrapperStyled, AboutUsParaStyled, AboutUsTitleStyled, DeveoperFormStyled, LearnButtonStyled } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { DeveloperContactRegisterFormSchema } from '../validationSchema/schema';
import { InferType } from 'yup';
import { useNavigate } from 'react-router';

type FormValues = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

type FormData = InferType<typeof DeveloperContactRegisterFormSchema>;


const MogliDevelopersPage: React.FC = () => {
    const navigate = useNavigate()
    const {
        handleSubmit,
        control,
        reset,
        setValue,
        trigger,
        register,
        formState: { errors, isSubmitting, isValid },
    } = useForm<FormData>({
        resolver: yupResolver(DeveloperContactRegisterFormSchema) as Resolver<FormData>,
        mode: "onTouched",
        reValidateMode: "onBlur",
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log('Form Data:', data);
        // Submit to API or email service
        navigate('/thanks/4')
        reset(); // Optional: Reset form on success
    };

    return (
        <Container>
            <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
                <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
                    <div className="text-center mb-8">
                        {/* <h1 className="text-3xl font-bold mt-4 text-indigo-700"></h1> */}
                        <AboutUsTitleStyled>Mogli Developers</AboutUsTitleStyled>
                        <AboutUsParaStyled sx={{ fontSize: '1em', textAlign: 'justify' }}>
                            Mogli Developers is your trusted partner in building stunning, high-performance websites and digital solutions. We specialize in cutting-edge web design, development, and UI/UX strategy — tailored to elevate your brand in today’s digital-first world.

                        </AboutUsParaStyled>
                    </div>

                    {false ? (
                        <div className="text-center text-green-600 text-lg font-medium">
                            Thank you! Your message has been sent.
                        </div>
                    ) : (
                        <DeveoperFormStyled onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <Grid>
                                <h3>Contact Form</h3>
                                </Grid>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Controller
                                        name="name"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                fullWidth
                                                label="First name *"
                                                type="text"
                                                margin="normal"
                                                {...field}
                                                error={Boolean(errors.name)}
                                                helperText={errors.name?.message}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
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
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Controller
                                        name="phone"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                fullWidth
                                                label="Phone *"
                                                type="text"
                                                margin="normal"
                                                {...field}
                                                error={Boolean(errors.phone)}
                                                helperText={errors.phone?.message}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Controller
                                        name="message"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                fullWidth
                                                label="Comments *"
                                                type="text"
                                                multiline
                                                minRows={3}
                                                margin="normal"
                                                {...field}
                                                error={Boolean(errors.message)}
                                                helperText={errors.message?.message}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12 }} sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                     <LearnButtonStyled onClick={() => {}}>Cancel</LearnButtonStyled>
                                            <LearnButtonStyled type="submit" variant="contained" disabled={!isValid || isSubmitting}>Contact</LearnButtonStyled  >
                                </Grid>
                            </Grid>

                        </DeveoperFormStyled>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default MogliDevelopersPage;
