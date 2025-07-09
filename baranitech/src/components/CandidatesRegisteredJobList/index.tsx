import * as React from 'react';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridPaginationModel,
} from '@mui/x-data-grid';
import { Box, CircularProgress, Typography } from '@mui/material';
import httpService from '../../api/httpService';
import { ApiResponse } from '../../types/common';

export interface Category {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}
export interface JobTypeDetail {
  id: number;
  title: string;
}
export interface JobType {
  id: number;
  title: string;
  description: string;
  category:JobTypeDetail;
  total_vacancy: number;
  city: string;
  state: string;
  country: string;
  company: string;
  created_at: string;
  updated_at: string;
  salary: number;
}
export interface RegisteredUserDetails {
  id: number;
  first_name: string;
  last_name: string;
  user_phone: string;
  user_email: string;
  job_id: number;
  created_at: string;
  updated_at: string;
  user_occupation: string;
  user_age: number;
  user_address: string;
  user_city: string;
  user_state: string;
  user_country: string;
  job: JobType;
}


const columns: GridColDef<RegisteredUserDetails>[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
        field: 'created_at',
        headerName: 'Posted at',
        width: 180,
        valueFormatter: (params) => {
          return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
          }).format(new Date(params))
        }
    
      },
  {
    field: 'job_title',
    headerName: 'Job Title',
    width: 200,
    valueGetter: (_params, row) => {
      console.log(row);
      
      return row?.job?.title ?? 'N/A'
    },
  },
  {
    field: 'job_type',
    headerName: 'Job type',
    width: 200,
    valueGetter: (_params, row) => {
      return row?.job?.category?.title ?? 'N/A'
    },
  },
   { field: 'user_name', headerName: 'Name', width: 150,
    valueGetter: (_params, row) => {
      return `${row?.first_name} ${row?.last_name}` 
    },
    },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  { field: 'age', headerName: 'Age', width: 80 },
  { field: 'occupation', headerName: 'Occupation', width: 180 },
  { field: 'city', headerName: 'City', width: 120 },
  { field: 'state', headerName: 'State', width: 100 },
  { field: 'country', headerName: 'Country', width: 120 }
];


const CandidateRegistedListComponent: React.FC = () => {
  const [_error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  const [registeredUsers, setRegisteredUsers] = React.useState<RegisteredUserDetails[]>([])
  const [paginationModel, setPaginationModel] = React.useState<GridPaginationModel>({
    pageSize: 5,
    page: 0,
  });

  const fetchTrainings = async () => {
    try {
      setLoading(true)
      const res = await httpService.get<ApiResponse>("/register-job-candidate");
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
        sx={{
          '& .cell-class': {
            display: 'flex',
            alignItems: 'center',
            "& p":{
              display: 'flex',
              justifyContent: 'flex-start',
            }
          },
        }}
      />
    </Box>
  );
};

export default CandidateRegistedListComponent;
