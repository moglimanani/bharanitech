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
  ParaStyledOverflow,
  TypeStyled,
  DateStyled,
  ChipStyled
} from "./styles";
import { useAllJobs } from "../contexts/allJobsContext";
import { useDialog } from "../contexts/dialogContext";
import { useNavigate } from "react-router";
import WorkIcon from '@mui/icons-material/Work';
import PaginatedList from "../components/PaginatedList";

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

  const filteredJobs = allJobs.map((job) => {
    const isLocation = job.city && job.country;

    return (
        <StyledCard>
          <CardContent>
            <Stack spacing={0} sx={{ alignItems: "flex-end" }}>
              <Stack direction="row" spacing={0}>
                <ChipStyled
                  label={job.total_vacancy ?? 0}
                  icon={<WorkIcon />}
                />

              </Stack>
            </Stack>
            <DateStyled>
              {new Date(job.created_at).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </DateStyled>
            <TitleStyled variant="h6" gutterBottom>
              {job.title}
            </TitleStyled>
            <TypeStyled>
              {job.category.title.replace(/-/g, ' ')}
            </TypeStyled>
            <ParaStyled variant="body2" color="text.secondary">
              <strong>{job.company ?? "XXXX"}</strong>
            </ParaStyled>
            <ParaStyledOverflow
              variant="body2"
              sx={{ pb: 1, lineHeight: 1 }}
              color="text.secondary"
            >
              {job.description}
            </ParaStyledOverflow>
            <ParaStyledOverflow variant="body2" color="text.secondary">
              {isLocation ? job.city + ", " + job.country : "XXXXXX"}
            </ParaStyledOverflow>
          </CardContent>
          <Box sx={{ p: '0 16px 0' }}>
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
    );
  })

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
          <PaginatedList items={filteredJobs}
            itemsPerPage={9}
            renderItem={(item, index) => (
              <Box key={index}>
                {item}
              </Box>

            )}
          />

        )}
    </Container>
  );
};

export default JobsListPage;
