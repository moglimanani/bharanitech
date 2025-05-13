import React, { memo, useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import httpService from '../../api/httpService';

export interface GalleryItem {
  id: number;
  title: string;
  imageUrl: string;
}

interface PhotosType {
  id: string,
  title: string,
  description: string,
  photos: string[]
}

interface GalleryResponse {
  status: boolean;
  data: PhotosType[];
}

// const mockItems: GalleryItem[] = Array.from({ length: 20 }, (_, index) => ({
//   id: index + 1,
//   title: `Gallery Item ${index + 1}`,
//   imageUrl: `https://source.unsplash.com/random/400x300?sig=${index + 1}`,
// }));


const GalleryList: React.FC = () => {
  const [gallery, setGallery] = useState<PhotosType[]>([])
  const fetchGallery = async () => {
    try {
      const res = await httpService.get<GalleryResponse>('/gallery');
      
      if (res.status) {
        const {data} = res
        const photosArr = data && data.map(item => ({id: item.id, title: item?.title ?? '', description: item?.description ?? '', photos: JSON.parse(JSON.stringify(item?.photos))}))
        setGallery([...photosArr])
      } else {
        // optional: show a toast or alert here
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchGallery()

    return () => {
      fetchGallery()
    }
  }, [])
  
  return (
    <Grid container spacing={3}>
      {gallery.map((item) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={`http://localhost:8000/storage/${item.photos[0]}`}
              alt={item.title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {item.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(GalleryList);
