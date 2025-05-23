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
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AdminGalleryAddSchema } from '../../validationSchema/schema';
import { ButtonPhotoStyled, ButtonStyled, StyledContainer, StyledForm, TitleGalleryStyled, TitleStyled } from './styles';
import httpService from '../../api/httpService';
import { InferType } from 'yup';

interface PhotoPreview {
  file?: File;
  url: string;
}


type FormData = InferType<typeof AdminGalleryAddSchema>;

interface GalleryResponse {
  status: boolean;
  data: any;
}

const GalleryAdminAddForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState,
    setValue,
    trigger,
    reset
  } = useForm<FormData>({
    resolver: yupResolver(AdminGalleryAddSchema),
    mode: 'onChange',
    reValidateMode: 'onBlur',
    defaultValues: {
      title: '',
      description: '',
      photos: []
    }
  });
  const { errors, isValid } = formState

  const [photos, setPhotos] = useState<PhotoPreview[]>([]);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const uploadedPhotos = Array.from(files).map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));
      const updatedPhotos = [...photos, ...uploadedPhotos]
      setPhotos(updatedPhotos);
      setValue('photos', updatedPhotos, { shouldValidate: true });
      trigger('photos');
      // Clear error if valid files uploaded
      if (uploadedPhotos.length > 0) {
        setPhotoError(null);
      }
    }
  };

  const handleRemovePhoto = (indexToRemove: number) => {
    const updatedPhotos = photos.filter((_, index) => index !== indexToRemove);
    setPhotos(updatedPhotos);
    setValue('photos', updatedPhotos, { shouldValidate: true });
    trigger('photos');
  };

  const onSubmit = async (data: FormData) => {
    if (photos.length === 0) {
      setPhotoError('At least one photo is required.');
      return;
    }

    const formData = new FormData();
    formData.append('title', data.title ?? '');
    formData.append('description', data.description ?? '');

    // Append each photo file
    photos.forEach((photo) => {
      if (photo.file instanceof File) {
        formData.append('photos[]', photo.file); // Adjust if your backend expects photos[]
      }
    });

    try {
      const res = await httpService.post<GalleryResponse>('/gallery', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.status) {
        setOpenSnackbar(true);
        reset()
        setPhotos([]);
        setValue('photos', [], { shouldValidate: true });
        trigger('photos');
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
        {openSnackbar && (
          <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
            Gallery added successfully!
          </Alert>
        )}
        <TitleGalleryStyled variant="h5" gutterBottom>
          Add Gallery
        </TitleGalleryStyled>

        <Controller
          name="title"
          control={control}
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

        <ButtonPhotoStyled
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
        </ButtonPhotoStyled>

        {photoError && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {photoError}
          </Alert>
        )}

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {photos.map((photo, index) => (
            <Grid size={{ xs: 4 }} key={index}>
              <Card sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="120"
                  image={photo.url}
                  alt={`Photo ${index + 1}`}
                />
                <IconButton
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 4,
                    right: 4,
                    backgroundColor: 'rgba(255,255,255,0.7)',
                  }}
                  onClick={() => handleRemovePhoto(index)}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
                <CardContent>
                  <Typography variant="body2" noWrap>
                    {photo.file?.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <ButtonStyled
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          disabled={!isValid}
        >
          Submit
        </ButtonStyled>
      </StyledForm>
    </StyledContainer>
  );
};

export default GalleryAdminAddForm;
