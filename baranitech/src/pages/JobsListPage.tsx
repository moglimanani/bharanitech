import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Container,
  Box,
  Stack,
  Chip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  AdminTitleStyled,
  LearnButtonStyled,
  ParaStyled,
  TitleStyled,
} from "./styles";
import { useAllJobs } from "../contexts/allJobsContext";
import { useDialog } from "../contexts/dialogContext";
import { useNavigate } from "react-router";

const StyledCard = styled(Card)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  //boxShadow: theme.shadows[3],
  //borderRadius: theme.shape.borderRadius,
  borderRadius: "20px",
  position: 'relative',
}));



const JobsListPage: React.FC = () => {
  const { allJobs } = useAllJobs();
  const { confirm } = useDialog()
  const navigate = useNavigate()

  return (
    <Container sx={{ mt: 1, p: { xs: 0, md: '8px 24px' } }}>
      <AdminTitleStyled variant="h4" gutterBottom>
        Careers
      </AdminTitleStyled>
      {
        !allJobs || allJobs.length === 0 && (
          <Typography margin={3}>Sorry, No job available at this time.</Typography>
        )
      }
      {
        !(!allJobs || allJobs.length === 0) && (
          <Grid container spacing={3}>
            {allJobs.map((job) => {
              const isLocation = job.city && job.country;

              return (
                <Grid
                  size={{ xs: 12, sm: 6, md: 4 }}
                  key={job.id}
                  style={{ marginBottom: "30px" }}
                >
                  <StyledCard>
                    <CardContent>
                      <Stack spacing={1} sx={{ alignItems: "flex-end" }}>
                        <Stack direction="row" spacing={1}>
                          <Chip
                            label={job.total_vacancy ?? 0}
                            color="info"
                            variant="outlined"
                          />
                        </Stack>
                      </Stack>
                      <div style={{ position: 'absolute', top: '21px', color: '#fff', fontSize: '.90em', background: '#484848', padding: '0 10px', borderRadius: '12px', }}>
                        {new Date(job.created_at).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                      <TitleStyled variant="h6" gutterBottom>
                        {job.title}
                      </TitleStyled>
                      <ParaStyled variant="body2" color="text.secondary">
                        <strong>{job.company ?? "XXXX"}</strong>
                      </ParaStyled>
                      <ParaStyled variant="body2" color="text.secondary">
                        {isLocation ? job.city + ", " + job.country : "XXXXXX"}
                      </ParaStyled>
                      <ParaStyled
                        variant="body2"
                        sx={{ mt: 2 }}
                        color="text.secondary"
                      >
                        {job.description}
                      </ParaStyled>

                    </CardContent>
                    <Box sx={{ padding: 2 }}>
                      <LearnButtonStyled
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => navigate(`${import.meta.env.VITE_ROUTE_JOBS_URL}/${job.id}`)}
                      >
                        Details
                      </LearnButtonStyled>
                    </Box>
                  </StyledCard>
                </Grid>
              );
            })}
          </Grid>
        )}
    </Container>
  );
};

export default JobsListPage;
