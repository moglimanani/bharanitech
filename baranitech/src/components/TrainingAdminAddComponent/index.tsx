import React, { useEffect, useState } from 'react';
import {
    Box, Button, Container, TextField, Typography, Alert,
    MenuItem, FormControl, InputLabel, Select
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AdminTrainingAddSchema } from '../../validationSchema/schema';
import { InferType } from 'yup';
import httpService from '../../api/httpService';
import { useErrorAlert } from '../../contexts/errorAlertContext';
import { useAxiosErrorHandler } from '../../hooks/useAxiosErrorHandler';
import { TrainingCategory, useTrainingCategories } from '../../contexts/trainingCategoryContext';

interface ApiResponse {
    status: boolean;
    data: any;
}
type FormData = InferType<typeof AdminTrainingAddSchema>;

const TrainingAddComponent: React.FC = () => {
    const [success, setSuccess] = useState(false);
    const {trainingCategories} = useTrainingCategories()

    const {
        control,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting, isValid },
    } = useForm<FormData>({
        resolver: yupResolver(AdminTrainingAddSchema),
        mode: 'onTouched',
        reValidateMode: 'onBlur',
        defaultValues: {
            classification: '0', // ✅ default to "Direct"
            title: '',
            description: '',
            startDate: '',
            endDate: '',
            totalHours: 0,
            totalPrice: 0,
            city: '',
            state: '',
            country: '',
            tableOfContents: '',
            location: '',
            type: trainingCategories[0]?.title
        },
    });


    const { showError } = useErrorAlert();
    useAxiosErrorHandler(showError)


    const onSubmit = async (data: FormData) => {
        try {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('description', data.description);
            formData.append('type', (trainingCategories?.find(item => item.title === data.type)?.id ?? 0).toString()); // You might want to convert `category` to an ID here if needed
            formData.append('startdate', data.startDate);
            formData.append('enddate', data.endDate);
            formData.append('classification', data.classification);
            formData.append('total_hours', data.totalHours.toString());
            formData.append('total_price', data.totalPrice.toString());
            formData.append('city', data.city);
            formData.append('state', data.state);
            formData.append('country', data.country);
            formData.append('table_of_contents', data.tableOfContents);
            formData.append('location', data.location);

            const res = await httpService.post<ApiResponse>('/trainings', formData); // Update endpoint if needed

            if (res.status) {
                setSuccess(true);
                reset();
            } else {
                showError?.('Something went wrong while creating the training.');
            }
        } catch (err) {
            console.error(err);
            showError?.('Failed to submit the form. Please try again.');
        }
    };


    return (
        <Container maxWidth="sm">
            <Box component="form" onSubmit={handleSubmit(onSubmit)} mt={4}>
                <Typography variant="h4" gutterBottom>Add Training</Typography>

                {success && <Alert severity="success">Training created successfully!</Alert>}

                <Controller
                    name="classification"
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Classification</InputLabel>
                            <Select label="Classification" {...field}>
                                <MenuItem value="0">Direct</MenuItem>
                                <MenuItem value="1">Online</MenuItem>
                            </Select>
                        </FormControl>
                    )}
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel>Category</InputLabel>
                    <Controller
                        name="type"
                        control={control}
                        render={({ field }) => (
                            <Select label="Type" {...field}>
                                {trainingCategories.map((item) => (
                                    <MenuItem key={item.id} value={item.title}>
                                        {item.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                </FormControl>

                {[
                    ['title', 'Title'],
                    ['description', 'Description'],
                    ['startDate', 'Start Date'],
                    ['endDate', 'End Date'],
                    ['totalHours', 'Total Hours'],
                    ['totalPrice', 'Total Price'],
                    ['city', 'City'],
                    ['state', 'State'],
                    ['country', 'Country'],
                    ['tableOfContents', 'Table of Contents'],
                    ['location', 'Location'],
                ].map(([name, label]) => (
                    <Controller
                        key={name}
                        name={name as keyof FormData}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label={label}
                                fullWidth
                                margin="normal"
                                type={name.includes('Date') ? 'date' : name.includes('Price') || name.includes('Hours') ? 'number' : 'text'}
                                InputLabelProps={name.includes('Date') ? { shrink: true } : undefined}
                                error={!!errors[name as keyof FormData]}
                                helperText={errors[name as keyof FormData]?.message}
                            />
                        )}
                    />
                ))}

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isSubmitting || !isValid}
                    sx={{ mt: 2 }}
                >
                    {isSubmitting ? 'Submitting…' : 'Submit'}
                </Button>
            </Box>
        </Container>
    );
};

export default TrainingAddComponent;
