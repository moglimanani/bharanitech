import React, { useEffect, useState } from 'react';
import {
  TextField,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Alert,
  IconButton
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useForm, Controller, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AdminGalleryAddSchema } from '../../validationSchema/schema';
import { ButtonPhotoStyled, ButtonStyled, StyledContainer, StyledForm, TitleGalleryStyled } from './styles';
import httpService from '../../api/httpService';
import { InferType } from 'yup';
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useParams } from 'react-router';
import { useMatch } from 'react-router-dom';
import { convertByteToMB } from '../../helper';
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
    resolver: yupResolver(AdminGalleryAddSchema) as Resolver<FormData>,
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
  const [photSizeIssue, setPhotoSizeIssue] = useState<boolean>(false);
  const fullEditPath = `${import.meta.env.VITE_ROUTE_ADMIN_GALLERY_URL}/${import.meta.env.VITE_ROUTE_ADMIN_GALLERY_EDIT_URL}`
  const ifItsEditPage = useMatch(fullEditPath);
  const params = useParams()
  const navigate = useNavigate()

  const getParticularRecord = async () => {
    try {
      const res = await httpService.get<GalleryResponse>(`/gallery/${params.pid}`, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.status) {
        console.log(res);
        setValue('title', res.data.title)
        setValue('description', res.data.description ?? '')
        // Prefill image previews (read from public storage URL)
        const photoPreviews: PhotoPreview[] = res.data.photos.map((path: string) => ({
          url: `${import.meta.env.VITE_BE_IMAGE_PATH}/${path}`,
        }));

        setPhotos(photoPreviews);

        // Optional: set value in react-hook-form if needed for validation
        setValue('photos', photoPreviews as any, { shouldValidate: true });

      } else {
        console.log('nnnnn');

        // optional: show a toast or alert here
        navigate(import.meta.env.VITE_ROUTE_ADMIN_GALLERY_URL)
      }
    } catch (err) {
      console.error(err);
      navigate(import.meta.env.VITE_ROUTE_ADMIN_GALLERY_URL)
    }
  }
  useEffect(() => {
    if (ifItsEditPage) {
      // get particular api
      getParticularRecord()

    }
  }, [ifItsEditPage])


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
    let totalSize = 0;
    // Append each photo file
    photos.forEach((photo) => {
      if (photo.file instanceof File) {
        formData.append('photos[]', photo.file); // Adjust if your backend expects photos[]
        totalSize += photo.file.size;
      }
    });

    if (+convertByteToMB(totalSize) > 2) {
      setPhotoSizeIssue(true)
      return;
    } else {
      setPhotoSizeIssue(false)
    }

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

  const handleUpdate = async (data: FormData) => {
    const formData = new FormData();
    formData.append('title', data.title ?? '');
    formData.append('description', data.description ?? '');
    formData.append('_method', 'PUT');
    let totalPhotoSize = 0

    // const oldPhotos = photos.filter(photo => !photo.file && photo.url).map(photo => photo.url);
    const oldPhotos = photos
      .filter(p => !p.file && p.url)
      .map(p => {
        const path = new URL(p.url).pathname;
        return path.replace(/^\/?storage\//, '').replace(/^\/?photos\//, 'photos/'); // ✅ strips "storage/"
      });

    const newPhotos = photos.filter(photo => photo.file instanceof File);
    // ✅ Append existing photo paths
    oldPhotos.forEach((path) => {
      formData.append('existingPhotos[]', path); // string paths of old photos
    });


    // ✅ Append new photo files
    newPhotos.forEach((photo) => {
      totalPhotoSize += photo?.file?.size ?? 0;
      formData.append('photos[]', photo.file!);
    });

    if (+convertByteToMB(totalPhotoSize) > 2) {
      setPhotoSizeIssue(true)
    } else {
      setPhotoSizeIssue(false)

    }

    try {
      const res = await httpService.post<GalleryResponse>(`/gallery/${params.pid}`, formData, {
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
        navigate(import.meta.env.VITE_ROUTE_ADMIN_GALLERY_URL);
      } else {
        // optional: show a toast or alert here
        navigate(import.meta.env.VITE_ROUTE_ADMIN_GALLERY_URL);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <StyledContainer maxWidth="xl">
      <StyledForm onSubmit={handleSubmit(ifItsEditPage ? handleUpdate : onSubmit)} sx={{ maxWidth: 600, mx: 'auto', p: 2 }} encType="multipart/form-data">
        {openSnackbar && (
          <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
            {ifItsEditPage ? 'Gallery added successfully!' : 'Gallery updated successfully!'}
          </Alert>
        )}
        {photSizeIssue && (
          <Alert onClose={() => setOpenSnackbar(false)} severity="error" sx={{ width: '100%' }}>
            Photos must be less than 2MB
          </Alert>
        )}
        <TitleGalleryStyled variant="h5" gutterBottom>
          {ifItsEditPage ? 'Edit Gallery' : 'Add Gallery'}
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
        <Typography variant="body1" color="primary" component="span" fontSize={'0.8em'}>Accepts only jpeg,png,jpg,gif & svg</Typography>

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
                    "&:hover": {
                      backgroundColor: 'rgba(255,255,255,0.7)'
                    }
                  }}
                  onClick={() => handleRemovePhoto(index)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
                <CardContent>
                  <Typography variant="body2" noWrap>
                    {photo.file?.name}
                  </Typography>
                  <Typography variant="body2" noWrap>
                    {photo.file ? `${convertByteToMB(photo.file?.size ?? 0)} MB` : ''}
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
          {ifItsEditPage ? 'Update' : 'Submit'}
        </ButtonStyled>


      </StyledForm>
    </StyledContainer>
  );
};

export default GalleryAdminAddForm;
