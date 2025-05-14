import React, { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Grid,
    Chip,
    Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useErrorAlert } from '../../contexts/errorAlertContext';
import { useAxiosErrorHandler } from '../../hooks/useAxiosErrorHandler';
import httpService from '../../api/httpService';
import { useDialog } from '../../contexts/dialogContext';

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
    category: categoryType
    title: string;
    url: string; // YouTube video URL
    description: string;
}
interface ApiResponse {
    status: boolean;
    data: any;
}

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
}));

const VideoFrame = styled('iframe')(({ theme }) => ({
    width: '100%',
    height: 200,
    border: 0,
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    flexGrow: 1,
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
    marginBottom: theme.spacing(1),
}));

const Actions = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    display: 'flex',
    gap: theme.spacing(1),
}));

interface YouTubeResourceListProps {
    items: ResourceItem[];
    onDelete?: (id: number) => void;
}

const getYouTubeEmbedUrl = (url: string): string | null => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};
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
    const [youtubes, setYoutubes] = useState<ResourceItem[]>([])
    const { showError } = useErrorAlert();
    useAxiosErrorHandler(showError);
    const { confirm } = useDialog()

    const fetchYoutube = async () => {
        try {
            const res = await httpService.get<ApiResponse>('/youtube');

            if (res.status) {
                const { data } = res

                // const photosArr = data && data.map(item => ({ id: item.id, title: item?.title ?? '', description: item?.description ?? '', photos: JSON.parse(JSON.stringify(item?.photos)) }))
                setYoutubes([...data])
            } else {
                // optional: show a toast or alert here
            }
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        fetchYoutube()
        return () => {
            fetchYoutube()
        }
    }, [])

    const deleteHandler = async (id: number | string) => {
        confirm({
            title: 'Delete Resource',
            content: 'Are you sure you want to delete this Resource item?',
            onConfirm: async () => {
                try {
                    const res = await httpService.delete<ApiResponse>(`/youtube/${id}`);

                    if (res.status) {
                        fetchYoutube()
                    } else {
                        // optional: show a toast or alert here
                    }
                } catch (err) {
                    console.error(err);
                }
            }
        })
    }

    return (
        <Grid container spacing={3}>
            {youtubes.map((item) => {
                const embedUrl = getYouTubeEmbedUrl(item.url);

                return (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.id}>
                        <StyledCard>
                            <Actions>
                                <IconButton
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    size="small"
                                >
                                    <OpenInNewIcon />
                                </IconButton>
                                <IconButton size="small" onClick={() => deleteHandler(item.id)} color="error">
                                    <DeleteIcon />
                                </IconButton>
                            </Actions>

                            {embedUrl && <VideoFrame src={embedUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />}

                            <StyledCardContent>
                                <CategoryChip label={item.category?.title} size="small" color="primary" />
                                <Typography variant="h6">{item.title}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </StyledCardContent>
                        </StyledCard>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default ResourceAdminListComponent;
