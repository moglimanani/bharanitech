import React, { memo, useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import httpService from "../../api/httpService";
import { useDialog } from "../../contexts/dialogContext";
import DeleteIcon from "@mui/icons-material/Delete";

export interface GalleryItem {
  id: number;
  title: string;
  imageUrl: string;
}

interface PhotosType {
  id: string;
  title: string;
  description: string;
  photos: string[];
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
  const [gallery, setGallery] = useState<PhotosType[]>([]);
  const { confirm } = useDialog();
  const theme = useTheme();
  const fetchGallery = async () => {
    try {
      const res = await httpService.get<GalleryResponse>("/gallery");

      if (res.status) {
        const { data } = res;
        const photosArr =
          data &&
          data.map((item) => ({
            id: item.id,
            title: item?.title ?? "",
            description: item?.description ?? "",
            photos: JSON.parse(JSON.stringify(item?.photos)),
          }));
        setGallery([...photosArr]);
      } else {
        // optional: show a toast or alert here
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchGallery();
    
    return () => {
      controller.abort(); // Cancel fetch on unmount
    };
  }, []);

  const deleteGalleryItem = async (id: number | string) => {
    confirm({
      title: "Delete Gallery",
      content: "Are you sure you want to delete this gallery item?",
      onConfirm: async () => {
        try {
          const res = await httpService.delete<GalleryResponse>(
            `/gallery/${id}`
          );

          if (res.status) {
            fetchGallery();
          } else {
            // optional: show a toast or alert here
          }
        } catch (err) {
          console.error(err);
        }
      },
    });
  };

  return (
    <Grid container spacing={3} style={{ marginTop: "20px" }}>
      {gallery.map((item) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.id}>
          <Card
            sx={{
              position: "relative",
              background: "#ffffff",
              padding: "3px",
              borderRadius: "20px",
            }}
          >
            <IconButton
              aria-label="delete"
              size="small"
              onClick={() => deleteGalleryItem(item.id)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: "rgba(255,255,255,0.8)",
                color: theme.palette.pinkColour.main,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.8)",
                  zoom: 1.1
                },
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
            <CardMedia
              component="img"
              height="200"
              image={`${import.meta.env.VITE_BE_IMAGE_PATH}${item.photos[0]}`}
              alt={item.title}
              style={{ borderRadius: "20px 20px 0px 0px" }}
            />
            <CardContent>
              <Typography variant="body2" component="div">
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
