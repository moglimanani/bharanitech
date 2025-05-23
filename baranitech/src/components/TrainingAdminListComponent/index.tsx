import React, { useEffect, useState } from 'react';
import {
    Container, Typography, CircularProgress, Alert, Grid, Card, CardContent, Chip,
    styled,
    Box,
    IconButton
} from '@mui/material';
import httpService from '../../api/httpService'; // Use your configured axios instance
import { useDialog } from '../../contexts/dialogContext';
import { DeleteIcon } from 'lucide-react';

export interface TrainingType {
    id: number;
    title: string;
    description: string;
    classification: '0' | '1'; // 0 => Direct, 1 => Online
    startdate: string;
    enddate: string;
    city: string;
    state: string;
    country: string;
    total_hours: number;
    total_price: number;
    location: string;
    table_of_contents: string;
    type: string;
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
const Actions = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    display: 'flex',
    gap: theme.spacing(1),
}));

const TrainingAdminListComponent: React.FC = () => {
    const [trainings, setTrainings] = useState<TrainingType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { confirm } = useDialog()
    const fetchTrainings = async () => {
        try {
            const res = await httpService.get<ApiResponse>('/trainings');
            if (res?.status && Array.isArray(res?.data)) {
                setTrainings(res.data);
            } else {
                throw new Error('Invalid data format');
            }
        } catch (err: any) {
            console.error(err);
            setError('Failed to load trainings');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {


        fetchTrainings();
        return () => {
            fetchTrainings()
        }
    }, []);

    const deleteHandler = async (id: number | string) => {
        confirm({
            title: 'Delete Resource',
            content: 'Are you sure you want to delete this training?',
            onConfirm: async () => {
                try {
                    const res = await httpService.delete<ApiResponse>(`/trainings/${id}`);

                    if (res.status) {
                        fetchTrainings()
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
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
                Training List
            </Typography>

            {loading && <CircularProgress />}
            {error && <Alert severity="error">{error}</Alert>}

            <Grid container spacing={2}>
                {trainings.map((training) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={training.id}>

                        <StyledCard variant="outlined">
                            <Actions>

                                <IconButton size="small" onClick={() => deleteHandler(training.id)} color="error" style={{ background: '#ffffff' }}>
                                    <DeleteIcon />
                                </IconButton>
                            </Actions>
                            <CardContent>
                                <Typography variant="h6">{training.title}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {training.description}
                                </Typography>

                                <Chip
                                    label={training.classification === '0' ? 'Direct' : 'Online'}
                                    color="primary"
                                    size="small"
                                    sx={{ mt: 1, mb: 1 }}
                                />

                                <Typography variant="body2">
                                    📅 {training.startdate} → {training.enddate}
                                </Typography>

                                <Typography variant="body2">
                                    📍 {training.city}, {training.state}, {training.country}
                                </Typography>

                                <Typography variant="body2">
                                    🕒 {training.total_hours} hrs • 💰 ₹{training.total_price}
                                </Typography>

                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    📘 TOC: {training.table_of_contents}
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default TrainingAdminListComponent;
