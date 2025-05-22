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
import { useErrorAlert } from '../../contexts/errorAlertContext';
import { useAxiosErrorHandler } from '../../hooks/useAxiosErrorHandler';
import httpService from '../../api/httpService';
import { useDialog } from '../../contexts/dialogContext';
import { useJobCategories } from '../../contexts/jobCategoryContext';
import { format } from 'date-fns';
import { EditIcon } from 'lucide-react';

interface JobType {
    id: number | string;
    title: string;
    created_at: null;
    updated_at: null;
    total_vacancy: string,
    city: string,
    state: string,
    country: string,
    company: string,
    description: string,
    type: number
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
    background: '#127B93',
    padding: '15px',
    color: '#ffffff'
}));

const Actions = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    display: 'flex',
    gap: theme.spacing(1),
}));

const JobAdminListComponent: React.FC = () => {
    const [jobs, setJobs] = useState<JobType[]>([])
    const { categories } = useJobCategories()
    const { showError } = useErrorAlert();
    useAxiosErrorHandler(showError);
    const { confirm } = useDialog()

    const fetchJobs = async () => {
        try {
            const res = await httpService.get<ApiResponse>('/jobs');

            if (res.status) {
                const { data } = res
                setJobs([...data])
            } else {
                // optional: show a toast or alert here
            }
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        fetchJobs()
        return () => {
            fetchJobs()
        }
    }, [])

    const deleteHandler = async (id: number | string) => {
        confirm({
            title: 'Delete Job',
            content: 'Are you sure you want to delete this Job?',
            onConfirm: async () => {
                try {
                    const res = await httpService.delete<ApiResponse>(`/jobs/${id}`);

                    if (res.status) {
                        fetchJobs()
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
            {jobs.map((item) => {

                return (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item?.id}>
                        <StyledCard>
                            <Actions>
                                <IconButton size="small" onClick={() => deleteHandler(item.id)} color="error" style={{ background: '#ffffff' }}>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton size="small" onClick={() => deleteHandler(item.id)} color="error" style={{ background: '#ffffff' }}>
                                    <EditIcon />
                                </IconButton>
                            </Actions>
                            <StyledCardContent>
                                <CategoryChip label={categories && categories?.find((cat) => cat?.id == item?.type)?.title} size="small" />
                                <Typography variant="h6">
  {item.created_at && format(new Date(item.created_at), 'dd MMM yyyy')}
</Typography>                                <Typography variant="h6">{item.title}</Typography>
                                <Typography variant="h6">{item.description}</Typography>
                                <Typography variant="h6">{item.type}</Typography>
                                <Typography variant="h6">{item.total_vacancy}</Typography>
                                <Typography variant="h6">{item.city}</Typography>
                                <Typography variant="h6">{item.state}</Typography>
                                <Typography variant="h6">{item.country}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.company}
                                </Typography>
                            </StyledCardContent>
                        </StyledCard>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default JobAdminListComponent;
