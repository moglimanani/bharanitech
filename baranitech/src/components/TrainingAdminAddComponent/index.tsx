import React, { useEffect, useState } from 'react';
import {
    Box, Button, Container, TextField, Typography, Alert,
    MenuItem, FormControl, InputLabel, Select,
    styled,
    InputAdornment
} from '@mui/material';
import { useForm, Controller, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AdminTrainingAddSchema } from '../../validationSchema/schema';
import { InferType } from 'yup';
import httpService from '../../api/httpService';
import { useErrorAlert } from '../../contexts/errorAlertContext';
import { useAxiosErrorHandler } from '../../hooks/useAxiosErrorHandler';
import { useTrainingCategories } from '../../contexts/trainingCategoryContext';
import { useMatch, useNavigate, useParams } from 'react-router';
import { toInputDateFormat } from '../../helper';


const ContainerStyle = styled(Container)(({ theme }) => ({
    background: theme.palette.appBarColour.light,
    borderRadius: '20px',
    paddingBottom: '30px'
}));

const TypograpStyle = styled(Typography)(({ theme }) => ({
    color: theme.palette.appBarColour.main,
    fontSize: '1.3em',
    fontWeight: 'bold',
    margin: '0px auto 0',
    padding: '20px'
}));


interface ApiResponse {
    status: boolean;
    success: boolean;
    data: any;
}
type FormData = InferType<typeof AdminTrainingAddSchema>;

const TrainingAddComponent: React.FC = () => {
    const [success, setSuccess] = useState(false);
    const { trainingCategories } = useTrainingCategories()

    const {
        control,
        handleSubmit,
        reset,
        watch,
        setValue,
        trigger,
        formState: { errors, isSubmitting, isValid },
    } = useForm<FormData>({
        resolver: yupResolver(AdminTrainingAddSchema) as Resolver<FormData>,
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
    const classification = watch('classification');

    const { showError } = useErrorAlert();
    useAxiosErrorHandler(showError);
    const fullEditPath = `${import.meta.env.VITE_ROUTE_ADMIN_TRAINING_URL}/${import.meta.env.VITE_ROUTE_ADMIN_TRAINING_EDIT_URL}`
    const ifItsEditPage = useMatch(fullEditPath);
    const params = useParams()
    const navigate = useNavigate()

    const getParticularRecord = async () => {
        try {
            const res = await httpService.get<ApiResponse>(`/trainings/${params.pid}`);
            
            if (res.status) {
                setValue('title', res.data.title)
                setValue('description', res.data.description)
                setValue('classification', res.data.classification)
                setValue('type', res.data.category.title)
                if(res.data.startdate){
                    setValue('startDate', toInputDateFormat(res.data.startdate))
                }
                if(res.data.enddate){
                    setValue('endDate', toInputDateFormat(res.data.enddate))
                }
                setValue('totalPrice', res.data.total_price)
                setValue('totalHours', res.data.total_hours)
                setValue('city', res.data.city)
                setValue('state', res.data.state)
                setValue('country', res.data.country)
                setValue('location', res.data.location)
                setValue('tableOfContents', res.data.table_of_contents)

                setTimeout(() => {
                    trigger('classification')
                    trigger('type')
                }, 10);

                trigger()

            } else {
                // optional: show a toast or alert here
                navigate(import.meta.env.VITE_ROUTE_ADMIN_JOBS_URL)
            }
        } catch (err) {
            console.error(err);
            navigate(import.meta.env.VITE_ROUTE_ADMIN_JOBS_URL)
        }
    }

    useEffect(() => {
        if (ifItsEditPage) {
            // get particular api
            getParticularRecord()

        }
    }, [ifItsEditPage])

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
            if (data.city) formData.append('city', data.city);
            if (data.state) formData.append('state', data.state);
            if (data.country) formData.append('country', data.country);
            formData.append('table_of_contents', data.tableOfContents);
            if (data.location) {
                formData.append('location', data.location);
            }

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
    const handleUpdate = async (data: FormData) => {
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
            if (data.city) formData.append('city', data.city);
            if (data.state) formData.append('state', data.state);
            if (data.country) formData.append('country', data.country);
            formData.append('table_of_contents', data.tableOfContents);
            if (data.location) {
                formData.append('location', data.location);
            }

            const res = await httpService.put<ApiResponse>(`/trainings/${params.pid}`, formData); // Update endpoint if needed

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
        <ContainerStyle maxWidth="sm">
            <Box component="form" onSubmit={handleSubmit(ifItsEditPage ? handleUpdate : onSubmit)} mt={4}>
                <TypograpStyle variant="h4" gutterBottom>
                {ifItsEditPage ? 'Edit Training' : 'Add Training'}
                    </TypograpStyle>

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
                    ['location', 'Address'],
                    ['city', 'City'],
                    ['state', 'State'],
                    ['country', 'Country'],
                    ['tableOfContents', 'Table of Contents'],
                ].filter(([name]) => {
                    // Hide location fields if classification is '1' (online)
                    if (+classification === 1 && ['city', 'state', 'country', 'location'].includes(name)) {
                        return false;
                    }
                    return true;
                }).map(([name, label]) => (
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
                                InputProps={{
                                    startAdornment: name.includes('Price') ? <InputAdornment position="start">$</InputAdornment> : null,
                                }}
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
                     {ifItsEditPage ? 'Update' : 'Submit'}
                </Button>
            </Box>
        </ContainerStyle>
    );
};

export default TrainingAddComponent;
