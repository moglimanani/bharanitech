import * as React from 'react';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridPaginationModel,
} from '@mui/x-data-grid';
import { Box, CircularProgress, Typography } from '@mui/material';
import httpService from '../../api/httpService';
import { useDialog } from '../../contexts/dialogContext';

export interface Category {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}
export interface TrainingTypeDetail {
  id: number;
  description: string;
  title: string;
}
export interface TrainingType {
  id: number;
  title: string;
  description: string;
  category?: TrainingTypeDetail;
  classification: number;
  startdate: string;
  enddate: string;
  location: string;
  total_hours: string;
  city: string;
  state: string;
  country: string;
  table_of_contents: string;
  total_price: string;
  created_at: string;
  updated_at: string;
}
export interface RegisteredUserDetails {
  id: number;
  user_name: string;
  user_occupation: string;
  user_age: number;
  user_phone: string;
  user_address: string;
  user_city: string;
  user_state: string;
  user_country: string;
  user_email: string;
  requirements: string;
  training_id: number;
  created_at: string;
  updated_at: string;
  training?: TrainingType;
}
interface ApiResponse {
  status: boolean;
  data: any;
}


const columns: GridColDef<RegisteredUserDetails>[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'training_title',
    headerName: 'Training Title',
    width: 200,
    valueGetter: (_params, row) => {
      return row?.training?.title ?? 'N/A'
    },
  },
  {
    field: 'training_category',
    headerName: 'Training type',
    width: 200,
    valueGetter: (_params, row) => {
      return row?.training?.category?.title ?? 'N/A'
    },
  },
  {
    field: 'training_price',
    headerName: 'Training Price',
    width: 200,
    valueGetter: (_params, row) => {
      return row?.training?.total_price ?? 'N/A'
    },
  },
   { field: 'user_name', headerName: 'Name', width: 150 },
  { field: 'user_email', headerName: 'Email', width: 200 },
  { field: 'user_phone', headerName: 'Phone', width: 150 },
  { field: 'user_age', headerName: 'Age', width: 80 },
  { field: 'user_occupation', headerName: 'Occupation', width: 180 },
  { field: 'user_city', headerName: 'City', width: 120 },
  { field: 'user_state', headerName: 'State', width: 100 },
  { field: 'user_country', headerName: 'Country', width: 120 },
  {
    field: 'requirements',
    headerName: 'Requirements',
    width: 250,
    renderCell: (params: GridRenderCellParams<RegisteredUserDetails>) => (
      <Typography variant="body2" noWrap>
        {params.row.requirements}
      </Typography>
    ),
  },
  {
    field: 'created_at',
    headerName: 'Created Date',
    width: 180,
    valueFormatter: (params) => {
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date(params))
    }

  },
];

// const mockData = (count: number = 50): RegisteredUserDetails[] => {
//   return Array.from({ length: count }, (_, i) => ({
//     id: i + 1,
//     user_name: `User ${i + 1}`,
//     user_occupation: 'Software Developer',
//     user_age: 25 + (i % 10),
//     user_phone: `+12345678${(100 + i).toString()}`,
//     user_address: `${100 + i} Main St, Apt ${i % 5 + 1}`,
//     user_city: 'Cityville',
//     user_state: 'Stateburg',
//     user_country: 'USA',
//     user_email: `user${i + 1}@example.com`,
//     requirements: `Needs training on module ${i % 3 + 1}`,
//     training_id: (i % 5) + 1,
//     created_at: new Date().toISOString(),
//     updated_at: new Date().toISOString(),
//   }));
// };

const TrainingRegistedAdminListComponent: React.FC = () => {
  const [error, setError] = React.useState<string | null>(null);
  const { confirm } = useDialog();
  const [loading, setLoading] = React.useState<boolean>(true);

  const [registeredUsers, setRegisteredUsers] = React.useState<RegisteredUserDetails[]>([])
  const [paginationModel, setPaginationModel] = React.useState<GridPaginationModel>({
    pageSize: 5,
    page: 0,
  });

  const fetchTrainings = async () => {
    try {
      setLoading(true)
      const res = await httpService.get<ApiResponse>("/register-training");
      if (res?.status && Array.isArray(res?.data)) {
        setRegisteredUsers(res.data);
        setLoading(false);
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

  React.useEffect(() => {
    const controller = new AbortController();
    fetchTrainings();
    return () => {
      controller.abort(); // Cancel fetch on unmount
    };
  }, []);

  return (
    <Box sx={{ height: 500, width: '100%', mt: 3 }}>
      {loading && <CircularProgress />}

      <DataGrid
        rows={registeredUsers}
        columns={columns}
        getRowId={(row) => row.id}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[5, 10, 25]}
        pagination
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default TrainingRegistedAdminListComponent;
