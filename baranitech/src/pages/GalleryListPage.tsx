import { styled } from '@mui/material/styles';
import {Grid, Card, CardMedia, Typography, CardContent, Dialog, DialogContent, IconButton, DialogTitle, Container} from '@mui/material';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import httpService from '../api/httpService';
import { ApiResponse } from '../types/jobs';
import { AdminTitleStyled } from './styles';

type ImageItem = {
  src: string;
  title: string;
  photos: string[];
};

const GalleryContainer = styled('div')(({ theme }) => ({
  padding: '10px 20px 40px 30px',
}));

const GalleryTypographyFont = styled(Typography)(({ theme }) => ({
  color: theme.palette.appBarColour.main,
  fontWeight: 'bold',
}));



const ImageCard = styled(Card)(({ theme }) => ({
    borderRadius: '12px',
    boxShadow: theme.shadows[3],
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: theme.shadows[6],
    },
  }));
  const DialogHeader = styled(DialogTitle)(({ theme }) => ({
    margin: 0,
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }));

// const images = [
//   { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', title: 'Nature' },
//   { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', title: 'Water' },
//   { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', title: 'City' },
//   { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', title: 'Forest' },
//   { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', title: 'Sky' },
// ];

export default function GalleryListPage() {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
    const [images, setImages] = useState<ImageItem[]>([])
  const [error, setError] = useState<string | null>(null);

    const fetchGallery = async () => {
      try {
        const res = await httpService.get<ApiResponse>("/gallery");
        if (res?.status && Array.isArray(res?.data)) {
          setImages(res.data);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err: any) {
        console.error(err);
        setError("Failed to load trainings");
      } finally {
        // setLoading(false);
      }
    };
    useEffect(() => {
      const controller = new AbortController();
  
      fetchGallery();
      return () => {
        controller.abort(); // Cancel fetch on unmount
      };
    }, []);

    const handleOpen = (image: ImageItem) => {
        setSelectedImage(image);
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
      };
  return (
    <Container sx={{mt:1, mb: 4, p:{ xs: 0, md: '8px 24px'  }}}>
       <AdminTitleStyled variant="h4" gutterBottom>
              Gallery
            </AdminTitleStyled>
      <Grid container spacing={4}>
        {images.map((img, index) => (
          <Grid key={index} size={{xs:12, sm:6, md:4, lg:3}}>
            <ImageCard  onClick={() => handleOpen(img)}>
              <CardMedia
                component="img"
                height="200"
                image={`${import.meta.env.VITE_BE_IMAGE_PATH}/${img?.photos[0]}`}
                alt={img.title}
              />
              <CardContent>
                <GalleryTypographyFont variant="h6">
                  {img.title}
                </GalleryTypographyFont>
              </CardContent>
            </ImageCard>
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
      <DialogHeader>
          <GalleryTypographyFont variant="h6">{selectedImage?.title}</GalleryTypographyFont>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogHeader>
        <DialogContent>
          {selectedImage && (
            <img
              src={`${import.meta.env.VITE_BE_IMAGE_PATH}/${selectedImage?.photos[0]}`}
              alt={selectedImage?.title}
              style={{ width: '100%', borderRadius: 8 }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
}
