import React, { useEffect, useState } from 'react';
import {
    TextField, Button, Box, Container, Typography, Alert,
    MenuItem, Select, InputLabel, FormControl
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AdminResourceAddSchema } from '../../validationSchema/schema';
import { InferType } from 'yup';
import { useYouTubeCategories } from '../../contexts/youtubeCategoryContext';
import { LearnButtonResStyled, StyledContainer, StyledForm, TitleResStyled } from './styles';
import httpService from '../../api/httpService';
import { useErrorAlert } from '../../contexts/errorAlertContext';
import { useAxiosErrorHandler } from '../../hooks/useAxiosErrorHandler';

type FormData = InferType<typeof AdminResourceAddSchema>;
interface YouTubeCategory {
    id: number;
    category: number;
    title: string;
}
interface ApiResponse {
    status: boolean;
    data: any;
  }
const ResourceAdminAddComponent: React.FC = () => {
    const { categories } = useYouTubeCategories();
    const [relayTestingCategories, setRelayTestingCategories] = useState<YouTubeCategory[]>([]);
    const [equipmentTestingCategories, setEquipmentTestingCategories] = useState<YouTubeCategory[]>([]);
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
        resolver: yupResolver(AdminResourceAddSchema),
        mode: 'onTouched',
        reValidateMode: 'onBlur',
        defaultValues: {
            title: '',
            description: '',
            url: '',
            ctype: '',
            classification: '0'
        }
    });

    const classification = watch('classification');

    useEffect(() => {
        setRelayTestingCategories(categories.filter(item => item.category === 0));
        setEquipmentTestingCategories(categories.filter(item => item.category === 1));
    }, [categories]);

    useEffect(() => {
        setValue('ctype', ''); // Clear the type when classification changes
        trigger('ctype')
      }, [classification, setValue]);

    const onSubmit = async (data: FormData) => {
        const type: number = categories.find(item => item.title === data.ctype)?.id ?? 0;        
        const formData = new FormData();
        formData.append('title', data.title ?? '');
        formData.append('description', data.description ?? '');
        formData.append('type', type.toString());
        formData.append('url', data.url ?? '');

        try {
            const res = await httpService.post<ApiResponse>('/youtube', formData);
      
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
                    Add New Resource
                </TitleResStyled>

                {success && <Alert severity="success">Resource created successfully!</Alert>}

                <FormControl fullWidth margin="normal">
                    <InputLabel>Classification</InputLabel>
                    <Controller
                        name="classification"
                        control={control}
                        render={({ field }) => (
                            <Select label="Classification" {...field}>
                                <MenuItem value="0">Protection Relay Testing</MenuItem>
                                <MenuItem value="1">Equipment Testing</MenuItem>
                            </Select>
                        )}
                    />
                </FormControl>

                {/* Type */}
                <FormControl fullWidth margin="normal">
                    <InputLabel>Type</InputLabel>
                    <Controller
                        name="ctype"
                        control={control}
                        render={({ field }) => (
                            <Select label="Type" {...field} >
                                {(classification === '0' ? relayTestingCategories : equipmentTestingCategories).map((item) => (
                                    <MenuItem key={item.id} value={item.title}>
                                        {item.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                </FormControl>

                {/* Title */}
                <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            label="Resource Name"
                            fullWidth
                            margin="normal"
                            {...field}
                            error={!!errors.title}
                            helperText={errors.title?.message}
                        />
                    )}
                />

                {/* URL */}
                <Controller
                    name="url"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            label="YouTube URL"
                            fullWidth
                            {...field}
                             margin="normal"
                            error={!!errors.url}
                            helperText={errors.url?.message}
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

export default ResourceAdminAddComponent;
