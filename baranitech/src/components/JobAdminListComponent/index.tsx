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
import { ActionWrapper } from "../commonStyles";
import { useNavigate } from "react-router";
import EditIcon from '@mui/icons-material/Edit';
import { formatCurrency } from "../../helper";
import PaginatedList from "../PaginatedList";
import { DateStyled, TitleStyled, TypeStyled } from "../../pages/styles";

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
  salary: number;
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
  minHeight: '45px',
  color: '#242105',
  borderRadius: '20px',
}));

const AddressStyle = styled(Typography)(() => ({
  color: 'red',
  fontSize: '11px',
}));

const DescriptionStyle = styled(Typography)(() => ({
  margin: '10px 0',
  lineHeight: '1.5em',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  justifyContent: 'center',
  minHeight: '40px',
  verticalAlign: 'middle'
}));


const VacancyStyle = styled(Typography)(({ theme }) => ({
  // borderRadius: '50%',
  // background: '#403f3d',
  paddingBottom: '10px',
}));

const VacancyStylePara = styled(Typography)(({ theme }) => ({
  paddingBottom: '10px',
  fontSize: '1.1rem',
}));

const JobAdminListComponent: React.FC = () => {
  const [jobs, setJobs] = useState<JobType[]>([]);
  const { categories } = useJobCategories();
  const { showError } = useErrorAlert();
  const navigate = useNavigate();
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

  const constructJobs = jobs.map((item) => {
    return (
      <StyledCard style={{ borderRadius: '20px', position: 'relative', boxSizing: 'border-box', }} key={item.id}>
        <ActionWrapper>
          <IconButton
            aria-label="edit"
            size="small"
            onClick={() => navigate(`edit/${item.id}`)}
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
        <StyledCardContent>
          <DateStyled>
          {item.created_at &&
              format(new Date(item.created_at), "dd MMM yyyy")}
          </DateStyled>
          <TypeStyled sx={{mt: '40px', marginBottom: '15px'}}>
            {categories &&
              categories?.find((cat) => cat?.id == item?.type)?.title}
          </TypeStyled>
          {/* <CategoryChip
            label={
              categories &&
              categories?.find((cat) => cat?.id == item?.type)?.title
            }
            size="small"
          /> */}
          <VacancyStylePara variant="body2" color="text.secondary">
            {item.company ?? 'Company details not found.'}
          </VacancyStylePara>
          <TitleStyled sx={{textAlign: 'center',p:0 }}>
          {item.title}
          </TitleStyled>
          <DescriptionStyle variant="body2">{item.description}</DescriptionStyle>
          {/* <TypeVacancyStyle variant="body2">{item.type}</TypeVacancyStyle> */}
          <VacancyStyle variant="body2">Salary : {formatCurrency(item.salary ?? 0)}/-  </VacancyStyle>
          <VacancyStyle variant="body2">Vacancy : {item.total_vacancy}  </VacancyStyle>
          <AddressStyle variant="body2">📍 {item.city} {item.state} {item.country}</AddressStyle>
         

        </StyledCardContent>
      </StyledCard>
    );
  })

  return (
    <Grid container spacing={3}>
      <PaginatedList items={constructJobs}
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

export default JobAdminListComponent;
