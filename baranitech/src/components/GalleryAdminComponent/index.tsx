import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Alert,
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AdminGalleryAddSchema } from '../../validationSchema/schema';
import { StyledContainer, StyledForm } from './styles';

interface PhotoPreview {
  file: File;
  url: string;
}

interface FormData {
  title: string;
  description: string;
}



const GalleryForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(AdminGalleryAddSchema),
    mode: 'onBlur'
  });

  const [photos, setPhotos] = useState<PhotoPreview[]>([]);
  const [photoError, setPhotoError] = useState<string | null>(null);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const uploadedPhotos = Array.from(files).map(file => ({
        file,
        url: URL.createObjectURL(file),
      }));
      setPhotos(prev => [...prev, ...uploadedPhotos]);

      // Clear error if valid files uploaded
      if (uploadedPhotos.length > 0) {
        setPhotoError(null);
      }
    }
  };

  const onSubmit = (data: FormData) => {
    if (photos.length === 0) {
      setPhotoError('At least one photo is required.');
      return;
    }

    // Proceed with submission
    console.log({ ...data, photos });
  };

  return (
    <StyledContainer maxWidth="xs">
      <StyledForm onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Create Gallery
        </Typography>

        <Controller
          name="title"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Title"
              fullWidth
              margin="normal"
              error={!!errors.title}
              helperText={errors.title?.message}
            />
          )}
        />

        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Description"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          )}
        />

        <Button
          variant="contained"
          component="label"
          startIcon={<PhotoCamera />}
          sx={{ mt: 2 }}
        >
          Upload Photos
          <input
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={handlePhotoUpload}
          />
        </Button>

        {photoError && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {photoError}
          </Alert>
        )}

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {photos.map((photo, index) => (
            <Grid size={{xs: 4}} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="120"
                  image={photo.url}
                  alt={`Photo ${index + 1}`}
                />
                <CardContent>
                  <Typography variant="body2" noWrap>
                    {photo.file.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          disabled={!isValid}
        >
          Submit
        </Button>
      </StyledForm>
    </StyledContainer>
  );
};

export default GalleryForm;
