import React, { memo, useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import httpService from "../../api/httpService";
import { useDialog } from "../../contexts/dialogContext";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { ActionWrapper } from "../commonStyles";
import { useNavigate } from "react-router";
import PaginatedList from "../PaginatedList";

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
  const navigate = useNavigate(); 

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

  const constructGallery = gallery.map((item) => (
      <Card
        sx={{
          position: "relative",
          background: "#ffffff",
          padding: "3px",
          borderRadius: "20px",
        }}
        key={item.id}
      >
        <ActionWrapper>
          <IconButton
            aria-label="edit"
            size="small"
            onClick={() =>navigate(`edit/${item.id}`)}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => deleteGalleryItem(item.id)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </ActionWrapper>

        <CardMedia
          component="img"
          height="200"
          image={`${import.meta.env.VITE_BE_IMAGE_PATH}${item.photos[0]}`}
          alt={item.title}
          style={{ borderRadius: "20px 20px 0px 0px" }}
        />
        <CardContent>
          <Typography variant="body2" component="div">
            {item?.title ? item?.title : 'No Title'}
          </Typography>
        </CardContent>
      </Card>
  ))

  return (
    <Grid container spacing={3} style={{ marginTop: "20px", width: "100%" }}>
      <PaginatedList items={constructGallery}
            itemsPerPage={9}
            renderItem={(item, index) => (
              <Box key={index}>
                {item}
              </Box>

            )}
          />
    </Grid>
  );
};

export default memo(GalleryList);
