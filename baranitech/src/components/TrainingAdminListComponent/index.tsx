import React, { useEffect, useState } from "react";
import {
  Typography,
  CircularProgress,
  Alert,
  Grid,
  Card,
  CardContent,
  Chip,
  styled,
  IconButton,
  Box,
} from "@mui/material";
import httpService from "../../api/httpService"; // Use your configured axios instance
import { useDialog } from "../../contexts/dialogContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { ActionWrapper } from "../commonStyles";
import { useNavigate } from "react-router";
import EditIcon from '@mui/icons-material/Edit';
import PaginatedList from "../PaginatedList";


export interface TrainingType {
  id: number;
  title: string;
  description: string;
  classification: "0" | "1"; // 0 => Direct, 1 => Online
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
const StyledCard = styled(Card)(() => ({
  position: "relative",
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const TrainingAdminListComponent: React.FC = () => {
  const [trainings, setTrainings] = useState<TrainingType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { confirm } = useDialog();
  const navigate = useNavigate();
  const fetchTrainings = async () => {
    try {
      const res = await httpService.get<ApiResponse>("/trainings");
      if (res?.status && Array.isArray(res?.data)) {
        setTrainings(res.data);
      } else {
        throw new Error("Invalid data format");
      }
    } catch (err: any) {
      console.error(err);
      setError("Failed to load trainings");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const controller = new AbortController();

    fetchTrainings();
    return () => {
      controller.abort(); // Cancel fetch on unmount
    };
  }, []);

  const deleteHandler = async (id: number | string) => {
    confirm({
      title: "Delete Resource",
      content: "Are you sure you want to delete this training?",
      onConfirm: async () => {
        try {
          const res = await httpService.delete<ApiResponse>(`/trainings/${id}`);

          if (res.status) {
            fetchTrainings();
          } else {
            // optional: show a toast or alert here
          }
        } catch (err) {
          console.error(err);
        }
      },
    });
  };
  const constructTrainings = trainings.map((training) => (
    <StyledCard key={training.id} sx={{width: "100%"}}>
      <ActionWrapper>
        <IconButton
          aria-label="edit"
          size="small"
          onClick={() => navigate(`edit/${training.id}`)}
        >
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => deleteHandler(training.id)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </ActionWrapper>

      <CardContent>
        <Typography variant="h6">{training.title}</Typography>
        {/* <Typography variant="body2">
          {training.description}
        </Typography> */}

        <Chip
          label={+training.classification === 0 ? "Direct" : "Online"}
          color={+training.classification === 0 ? "secondary" : "primary"}
          size="small"
          sx={{ mt: 1, mb: 1 }}
        />

        <Typography variant="body2" color="textSecondary">
          📅 {training.startdate} → {training.enddate}
        </Typography>

        <Typography variant="body2" color="textSecondary">
          📍 {training.city ?? 'No City'}, {training.state ?? 'No State'}, {training.country ?? 'No Country'}
        </Typography>

        <Typography variant="body2" color="textSecondary">
          🕒 {training.total_hours} hrs • 💰 ${training.total_price}
        </Typography>

        {/* <Typography variant="body2" color="textSecondary">
          📘 TOC: {training.table_of_contents}
        </Typography> */}
      </CardContent>
    </StyledCard>
  ))
  return (
    <Grid container sx={{ mt: 1, p: { xs: 0, md: '8px 24px' } }}>
      {/* <Typography variant="h4" gutterBottom>
        Training List
      </Typography> */}
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

        <PaginatedList items={constructTrainings}
          itemsPerPage={9}
          renderItem={(item, index) => (
            <Box key={index} sx={{width:'100%'}}>
              {item}
            </Box>

          )}
        />
    </Grid>
  );
};

export default TrainingAdminListComponent;
