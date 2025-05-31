import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Chip,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { useErrorAlert } from "../../contexts/errorAlertContext";
import { useAxiosErrorHandler } from "../../hooks/useAxiosErrorHandler";
import httpService from "../../api/httpService";
import { useDialog } from "../../contexts/dialogContext";
import { useJobCategories } from "../../contexts/jobCategoryContext";
import { format } from "date-fns";

interface JobType {
  id: number | string;
  title: string;
  created_at: null;
  updated_at: null;
  total_vacancy: string;
  city: string;
  state: string;
  country: string;
  company: string;
  description: string;
  type: number;
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

const StyledCardContent = styled(CardContent)(() => ({
  flexGrow: 1,
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  //marginBottom: theme.spacing(1),
  background: theme.palette.appBarColour.main,
  padding: "15px",
  color: theme.palette.appBarColour.light,
}));

const Actions = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  display: "flex",
  gap: theme.spacing(1),
}));

const StyleDate = styled(Typography)(({ theme }) => ({
 // position: "absolute",
  // top: theme.spacing(1),
  // right: theme.spacing(1),
  display: "flex",
  gap: theme.spacing(1),
  background: theme.palette.secondary.main,
  fontSize: '12px',
  fontWeight: 'bold',
  color: '#ffffff',
  padding: '5px',
  justifyContent: 'center',
  borderRadius: '20px',
  marginBottom: '15px',
}));

const JobStyle = styled(Typography)(() => ({
  background: '#bdbdbd',
  padding: '5px',
  margin: '5px auto 5px',
  width: '90%',
  color: '#242105',
  borderRadius: '20px',
}));

const AddressStyle = styled(Typography)(() => ({
  color: '#242105',
  fontSize: '11px',
}));

const DescriptionStyle = styled(Typography)(() => ({
  padding: '10px 0'
}));


const VacancyStyle = styled(Typography)(({ theme }) => ({
  color: theme.palette.appBarColour.light,
  fontSize: '12px',
  borderRadius: '50%',
  background: '#403f3d',
  width: '30px',
  height: '30px',
  position: 'absolute',
  left: '18px',
  top: '134px',
  paddingTop: '7px'
}));



const JobAdminListComponent: React.FC = () => {
  const [jobs, setJobs] = useState<JobType[]>([]);
  const { categories } = useJobCategories();
  const { showError } = useErrorAlert();
  useAxiosErrorHandler(showError);
  const { confirm } = useDialog();

  const fetchJobs = async () => {
    try {
      const res = await httpService.get<ApiResponse>("/jobs");

      if (res.status) {
        const { data } = res;
        setJobs([...data]);
      } else {
        // optional: show a toast or alert here
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    const controller = new AbortController();

    fetchJobs();
    return () => {
      controller.abort(); // Cancel fetch on unmount
    };
  }, []);

  const deleteHandler = async (id: number | string) => {
    confirm({
      title: "Delete Job",
      content: "Are you sure you want to delete this Job?",
      onConfirm: async () => {
        try {
          const res = await httpService.delete<ApiResponse>(`/jobs/${id}`);

          if (res.status) {
            fetchJobs();
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
      {jobs.map((item) => {
        return (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item?.id}>
            <StyledCard style={{borderRadius: '20px', position: 'relative'}}>
              <Actions>
                <IconButton
                  size="small"
                  onClick={() => deleteHandler(item.id)}
                  color="error"
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 6,
                    backgroundColor: "rgba(255,255,255,0.8)",
                    "&:hover": {
                      backgroundColor: "rgba(255,0,0,0.8)",
                      color: "white",
                    },
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                {/* <IconButton
                  size="small"
                  onClick={() => deleteHandler(item.id)}
                  color="error"
                  sx={{
                    position: "absolute",
                    top: 7,
                    left: -233,
                    // right: 150,
                    backgroundColor: "rgba(255,255,255,0.8)",
                    "&:hover": {
                      backgroundColor: "rgba(255,0,0,0.8)",
                      color: "white",
                    },
                  }}
                >
                  <EditIcon />
                </IconButton> */}
              </Actions>
              <StyledCardContent>
                <StyleDate>
                  {item.created_at &&
                    format(new Date(item.created_at), "dd MMM yyyy")}
                </StyleDate>
                <CategoryChip
                  label={
                    categories &&
                    categories?.find((cat) => cat?.id == item?.type)?.title
                  }
                  size="small"
                />
                 <DescriptionStyle variant="body2" color="text.secondary">
                  {item.company}
                </DescriptionStyle>
                <JobStyle variant="body2">{item.title}</JobStyle>
                <DescriptionStyle variant="body2">{item.description}</DescriptionStyle>
                {/* <TypeVacancyStyle variant="body2">{item.type}</TypeVacancyStyle> */}
                <VacancyStyle variant="body2">{item.total_vacancy}</VacancyStyle>
                <AddressStyle variant="body2">{item.city}</AddressStyle>
                <AddressStyle variant="body2">{item.state}</AddressStyle>
                <AddressStyle variant="body2">{item.country}</AddressStyle>
               
              </StyledCardContent>
            </StyledCard>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default JobAdminListComponent;
