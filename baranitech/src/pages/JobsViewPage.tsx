import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Paper, Button, Stack, Chip } from '@mui/material';
import { styled } from '@mui/system';
import { useAllTrainings } from '../contexts/allTrainingsContext';
import { TrainingType } from '../types/trainings';
import { AboutUsTitleStyled, BackButtonStyled } from './styles';
import { useDialog } from '../contexts/dialogContext';
import { TrainingRegisterForm } from '../components/TrainingRegisterForm';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SchoolIcon from '@mui/icons-material/School';
import theme from '../theme';
import { formatCurrency } from '../helper';
import { useAllJobs } from '../contexts/allJobsContext';
import { JobsType } from '../types/jobs';
import { JobsRegisterForm } from '../components/JobsRegisterForm';

// Styled Components
const Container = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',
  margin: '20px 0 30px',
  textAlign: 'left',
  //padding: theme.spacing(2),
}));
const ContainerBox = styled(Box)(({ theme }) => ({
  margin: '0',
  [theme.breakpoints.up('sm')]: {
    margin: '0 30px',
  }
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '16px 0px',
  backgroundColor: '#f9f9f9',
  borderRadius: '12px',
  position: 'relative',
  textAlign: 'center'
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.appBarColour.main,
  fontWeight: 'bold',
  textTransform: 'capitalize',
  padding: '5px 10px 5px',
  marginTop: '10px',
}));
const StyledTypographyCategory = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 'bold',
  textTransform: 'capitalize',
  padding: '15px 10px',
  marginTop: '10px',
  background: '#2e7d32',
  fontSize: '1.2em',
}));
const StyledTypographyTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.appBarColour.main,
  fontWeight: 'bold',
  padding: '5px 10px 5px',
  margin: '10px',
  fontSize: '2.2em',
  textTransform: 'uppercase'
}));

const StyledDiv = styled('div')(({ theme }) => ({
  color: theme.palette.secondary.main,
  // fontSize: '14px',
  padding: '5px 10px 5px',
  textTransform: 'capitalize',

}));

const StyledDivPage = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0px 16px'
}));

export const LearnButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: ".88rem",
  color: theme.palette.appBarColour.light,
  background: theme.palette.appBarColour.main,
  border: '1px solid #484848',
  borderRadius: "20px",
  margin: "10px 0 20px",
  padding: "10px 20px",
  transition: 'all 0.2s',
  '&:hover': {
    border: '1px solid #484848',
    color: theme.palette.appBarColour.main,
    backgroundImage: 'linear-gradient(to top, #a8edea 0%,rgb(216, 214, 221) 100%)'
  }
}));

const StyledSpanPage = styled('span')(({ theme }) => ({
  marginRight: '10px',
  borderRadius: '12px',
  color: '#820e49',
  fontSize: '2.5em'
}));

const StyledSpanRetPage = styled('span')(({ theme }) => ({
  marginRight: '5px',
  borderRadius: '12px',
  textDecoration: 'line-through',
  fontSize: '1.5em'
}));


const JobsViewPage: React.FC = () => {
  const [jobs, setJobs] = useState<JobsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {allJobs} = useAllJobs();
  const { confirm } = useDialog()
  const navigate = useNavigate()
  const { jid } = useParams();

  useEffect(() => {
    if (!jid) return;
    const found = allJobs.find((job: JobsType) => +job.id === +jid);

    if (found) {
      setJobs(found);
      setLoading(false);
    } else {
      setError('Training not found');
    }

  }, [jid]);

  const isLocation =  jobs?.city && jobs?.state && jobs?.country;
  return (
    <ContainerBox>
      <AboutUsTitleStyled>Training</AboutUsTitleStyled>
      <Container>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : jobs ? (
          <StyledPaper elevation={3}>
            <Stack spacing={1} sx={{ alignItems: 'flex-end', paddingRight: '16px' }}>
              <Stack direction="row" spacing={1}>

                {<Chip label={jobs.total_vacancy} color="success" variant="filled" />}
              </Stack>

            </Stack>
            <SchoolIcon sx={{ color: theme.palette.appBarColour.main, fontSize: '4em' }} />
            <div style={{ position: 'absolute', top: '21px', color: '#fff', fontSize: '.90em', background: '#484848', padding: '0 10px', borderRadius: '12px', left: '16px' }}>
              {jobs.created_at}
            </div>
            <StyledTypographyTitle>
              {jobs.title}
            </StyledTypographyTitle>
            <StyledTypographyCategory>
              {jobs.category.title.replace(/-/g, ' ')}
            </StyledTypographyCategory>
            {/* <StyledDiv>
              <span>{jobs.description}</span>
            </StyledDiv> */}
            <StyledDiv>
              <div
                dangerouslySetInnerHTML={{ __html: jobs.description }}
              />
            </StyledDiv>

              {isLocation && (
                <StyledDiv><span>Location:  {jobs.city}, {jobs.state}, {jobs.country}</span></StyledDiv>
              )}
              
            <StyledDiv>
              <span>Instructor: Ezhumalai</span>
            </StyledDiv>
            <hr />
            <StyledDivPage>
              {/* <LearnButtonStyled onClick={() => navigate(`${import.meta.env.VITE_ROUTE_TRAININGS_URL}`)}>{`<<`} Back to Training page</LearnButtonStyled> */}
              <LearnButtonStyled
                startIcon={<EditNoteIcon />}
                onClick={() => confirm({
                  bgvariant: 'light', title: `Application: ${jobs.title}`,
                  content: <JobsRegisterForm id={jobs.id} />,
                  onConfirm: () => { },
                  onCancel: () => { },
                  hideButtons: true
                })}>Apply</LearnButtonStyled>

              <BackButtonStyled aria-label="back" onClick={() =>
                navigate(`${import.meta.env.VITE_ROUTE_JOBS_URL}`)}>
                <ReplyAllIcon />
              </BackButtonStyled>
            </StyledDivPage>

          </StyledPaper>
        ) : (
          <Typography>No training found.</Typography>
        )}
      </Container>
    </ContainerBox>
  );
};

export default JobsViewPage;
