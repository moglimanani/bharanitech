import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

export interface GalleryItem {
  id: number;
  title: string;
  imageUrl: string;
}

interface GalleryListProps {
  items: GalleryItem[];
}

const mockItems: GalleryItem[] = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  title: `Gallery Item ${index + 1}`,
  imageUrl: `https://source.unsplash.com/random/400x300?sig=${index + 1}`,
}));


const GalleryList: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {mockItems.map((item) => (
        <Grid size={{xs:12, sm:6, md:4, lg:3}} key={item.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={item.imageUrl}
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

export default GalleryList;
