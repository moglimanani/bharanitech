import React from 'react';
import {
  Card,
  CardContent,
  Grid,
  Container,
  Box,
  Stack,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { AdminTitleStyled, LearnButtonStyled, ParaStyled, TitleStyled } from './styles';
import { useAllJobs } from '../contexts/allJobsContext';

const StyledCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  //boxShadow: theme.shadows[3],
  //borderRadius: theme.shape.borderRadius,
  borderRadius: '20px',
}));

const JobsListPage: React.FC = () => {
const { allJobs } = useAllJobs()

  return (
    <Container sx={{ mt: 1 }}>
      <AdminTitleStyled variant="h4" gutterBottom>
        Job Openings
      </AdminTitleStyled>
      <Grid container spacing={3}>
        {allJobs.map((job) => {
          const isLocation = job.city && job.country
          
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={job.id} style={{ marginBottom: '30px' }}>
              <StyledCard>
                <CardContent>
                <Stack spacing={1} sx={{ alignItems: 'flex-end' }}>
              <Stack direction="row" spacing={1}>
              <Chip label={job.total_vacancy ?? 0} color="info" variant="outlined" />
             
              </Stack>

            </Stack>
                  <TitleStyled variant="h6" gutterBottom>
                    {job.title}
                  </TitleStyled>
                  <ParaStyled variant="body2" color="text.secondary">
                    <strong>{job.company ?? "XXXX"}</strong>
                  </ParaStyled>
                  <ParaStyled variant="body2" color="text.secondary">
                    {isLocation ? job.city + ', ' + job.country : 'XXXXXX' }
                  </ParaStyled>
                  <ParaStyled variant="body2" sx={{ mt: 2 }} color="text.secondary">
                    {job.description}
                  </ParaStyled>
                  <ParaStyled variant="body2" sx={{ mt: 2 }} color="text.secondary">
                    Posted Date: {new Date(job.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}       
                  </ParaStyled>
                </CardContent>
                <Box sx={{ padding: 2 }}>
                  <LearnButtonStyled fullWidth variant="contained" color="primary">
                    Apply Now
                  </LearnButtonStyled>
                </Box>
              </StyledCard>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  );
};

export default JobsListPage;
