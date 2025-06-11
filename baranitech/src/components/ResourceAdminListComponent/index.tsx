import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Chip
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { useErrorAlert } from "../../contexts/errorAlertContext";
import { useAxiosErrorHandler } from "../../hooks/useAxiosErrorHandler";
import httpService from "../../api/httpService";
import { useDialog } from "../../contexts/dialogContext";
import { getLanguageType, getYouTubeEmbedUrl } from "../../helper";
import { ActionWrapper } from "../commonStyles";
import EditIcon from '@mui/icons-material/Edit';
import { useMatch, useNavigate, useParams } from "react-router";

interface categoryType {
  id: number | string;
  category: 0;
  title: "Feeder Relay Testing";
  created_at: null;
  updated_at: null;
}

// Resource type
export interface ResourceItem {
  id: number;
  category: categoryType;
  title: string;
  url: string; // YouTube video URL
  description: string;
  language: number;
}
interface ApiResponse {
  status: boolean;
  data: any;
}

// Styled components
const StyledCard = styled(Card)(() => ({
  position: "relative",
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const VideoFrame = styled("iframe")(() => ({
  width: "100%",
  height: 200,
  border: 0,
}));

const StyledCardContent = styled(CardContent)(() => ({
  flexGrow: 1,
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  background: theme.palette.appBarColour.main,
  padding: "15px",
  color: theme.palette.appBarColour.light,
}));

const TypographyStyled = styled(Typography)(() => ({
  lineHeight: '1.5em',
  height: '1.5em',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  width: '100%',
}));


// const Actions = styled(Box)(({ theme }) => ({
//   position: "absolute",
//   top: theme.spacing(1),
//   right: theme.spacing(1),
//   display: "flex",
//   gap: theme.spacing(1),
// }));

// const videos: ResourceItem[] = [
//     {
//       id: 1,
//       category: 'Tutorial',
//       title: 'Learn React in 10 Minutes',
//       url: 'https://www.youtube.com/watch?v=abcdefghijk',
//       description: 'A quick intro to React fundamentals.',
//     },
//     {
//       id: 2,
//       category: 'UI/UX',
//       title: 'Material UI Design Tips',
//       url: 'https://youtu.be/xyzxyzxyzxy',
//       description: 'Best practices for using MUI effectively.',
//     },
//   ];
const ResourceAdminListComponent: React.FC = () => {
  const [youtubes, setYoutubes] = useState<ResourceItem[]>([]);
  const { showError } = useErrorAlert();
  useAxiosErrorHandler(showError);
  const { confirm } = useDialog();
  const navigate = useNavigate()

  const fetchYoutube = async () => {
    try {
      const res = await httpService.get<ApiResponse>("/youtube");

      if (res.status) {
        const { data } = res;

        // const photosArr = data && data.map(item => ({ id: item.id, title: item?.title ?? '', description: item?.description ?? '', photos: JSON.parse(JSON.stringify(item?.photos)) }))
        setYoutubes([...data]);
      } else {
        // optional: show a toast or alert here
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    const controller = new AbortController();

    fetchYoutube();
    
    return () => {
      controller.abort(); // Cancel fetch on unmount
    };
  }, []);

  const deleteHandler = async (id: number | string) => {
    confirm({
      title: "Delete Resource",
      content: "Are you sure you want to delete this Resource item?",
      onConfirm: async () => {
        try {
          const res = await httpService.delete<ApiResponse>(`/youtube/${id}`);

          if (res.status) {
            fetchYoutube();
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
    <Grid container spacing={3}>
      {youtubes.map((item) => {
        const embedUrl = getYouTubeEmbedUrl(item.url);
        const languageType = getLanguageType.find(ltype => +item.language === +ltype.id)?.name ?? ''
        
        return (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.id}>
            <StyledCard
              style={{
                background: "#ffffff",
                padding: "15px",
                borderRadius: "20px",
              }}
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
                onClick={() => deleteHandler(item.id)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </ActionWrapper>
              {embedUrl && (
                <VideoFrame
                  src={embedUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}

              <StyledCardContent>
                <CategoryChip label={item.category?.title} size="small" />
                <CategoryChip label={languageType} size="small" />
                <TypographyStyled variant="h6">{item.title}</TypographyStyled>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ResourceAdminListComponent;
