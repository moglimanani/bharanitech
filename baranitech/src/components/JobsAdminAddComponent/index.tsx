import React, { useEffect, useState } from 'react';
import {
    TextField, Button, Box, Container, Typography, Alert,
    MenuItem, Select, InputLabel, FormControl
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AdminJobAddSchema } from '../../validationSchema/schema';
import { InferType } from 'yup';
import { LearnButtonResStyled, StyledContainer, StyledForm, TitleResStyled } from './styles';
import httpService from '../../api/httpService';
import { useErrorAlert } from '../../contexts/errorAlertContext';
import { useAxiosErrorHandler } from '../../hooks/useAxiosErrorHandler';
import { useJobCategories } from '../../contexts/jobCategoryContext';

type FormData = InferType<typeof AdminJobAddSchema>;

interface ApiResponse {
    status: boolean;
    data: any;
}
const JobsAdminAddComponent: React.FC = () => {
    const { categories } = useJobCategories();
    const [success, setSuccess] = useState(false);

    const { showError } = useErrorAlert();
    useAxiosErrorHandler(showError);

    const {
        handleSubmit,
        control,
        watch,
        reset,
        setValue,
        trigger,
        formState: { errors, isSubmitting, isValid },
    } = useForm<FormData>({
        resolver: yupResolver(AdminJobAddSchema),
        mode: 'onTouched',
        reValidateMode: 'onBlur',
        defaultValues: {
            title: '',
            total_vacancy: 0,
            city: '',
            state: '',
            country: '',
            company: '',
            description: '',
            type: categories[0]?.title

        }
    });


    const onSubmit = async (data: FormData) => {
        const type: number = categories.find(item => item.title === data.type)?.id ?? 0;
        const formData = new FormData();
        formData.append('title', data.title ?? '');
        formData.append('total_vacancy', data.total_vacancy.toString());
        formData.append('description', data.description ?? '');
        formData.append('type', type.toString());
        formData.append('city', data.city ?? '');
        formData.append('state', data.state ?? '');
        formData.append('country', data.country ?? '');
        formData.append('company', data.company ?? '');

        try {
            const res = await httpService.post<ApiResponse>('/jobs', formData);

            if (res.status) {
                setSuccess(true);
                reset()
            } else {
                // optional: show a toast or alert here
            }
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <StyledContainer maxWidth="xs">
            <StyledForm onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
                {/* <Container maxWidth="sm" sx={{ mt: 5 }}> */}
                <TitleResStyled variant="h4" gutterBottom>
                    Add New Job
                </TitleResStyled>

                {success && <Alert severity="success">Job created successfully!</Alert>}

                {/* Title */}
                <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            label="Job Title"
                            fullWidth
                            margin="normal"
                            {...field}
                            error={!!errors.title}
                            helperText={errors.title?.message}
                        />
                    )}
                />

                {/* Description */}
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            label="Description"
                            fullWidth
                            multiline
                            rows={4}
                            margin="normal"
                            {...field}
                            error={!!errors.description}
                            helperText={errors.description?.message}
                        />
                    )}
                />

                <Controller
                    name="total_vacancy"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            label="Vacancies"
                            fullWidth
                            margin="normal"
                            {...field}
                            error={!!errors.total_vacancy}
                            helperText={errors.total_vacancy?.message}
                        />
                    )}
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel>Category</InputLabel>
                    <Controller
                        name="type"
                        control={control}
                        render={({ field }) => (
                            <Select label="Type" {...field}>
                                {categories.map((item) => (
                                    <MenuItem key={item.id} value={item.title}>
                                        {item.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                </FormControl>

                <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            label="City"
                            fullWidth
                            {...field}
                            margin="normal"
                            error={!!errors.city}
                            helperText={errors.city?.message}
                        />
                    )}
                />
                <Controller
                    name="state"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            label="State"
                            fullWidth
                            {...field}
                            margin="normal"
                            error={!!errors.state}
                            helperText={errors.state?.message}
                        />
                    )}
                />
                <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            label="Country"
                            fullWidth
                            {...field}
                            margin="normal"
                            error={!!errors.country}
                            helperText={errors.country?.message}
                        />
                    )}
                />

                <Controller
                    name="company"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            label="Company"
                            fullWidth
                            {...field}
                            margin="normal"
                            error={!!errors.company}
                            helperText={errors.company?.message}
                        />
                    )}
                />

                <LearnButtonResStyled
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isSubmitting || !isValid}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </LearnButtonResStyled>

            </StyledForm>
        </StyledContainer>
    );
};

export default JobsAdminAddComponent;
