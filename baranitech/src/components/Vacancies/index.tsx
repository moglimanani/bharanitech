import { Grid } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import { BadgeStyled, Item, ItemRight, JobsStyled, VacanciesStyled } from "./styles";

function Vacancies() {

    return ( 
        <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <ItemRight>
            <VacanciesStyled variant="h5">Vacancies:  </VacanciesStyled>
          </ItemRight>
        </Grid>
        <Grid size={{ xs: 12, sm: 8 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Item>
                <Grid container>
                  <Grid size={10}>
                    <JobsStyled align='left' variant="h6">Site Engineers  </JobsStyled>
                  </Grid>
                  <Grid size={2}>
                    <BadgeStyled badgeContent={14} color="primary">
                      <WorkIcon color="action" />
                    </BadgeStyled>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
            <Grid size={{ xs: 12, sm: 3 }}>
              <Item>
                <Grid container>
                  <Grid size={10}>
                    <JobsStyled align='left' variant="h6">Technicians </JobsStyled>
                  </Grid>
                  <Grid size={2}>
                    <BadgeStyled badgeContent={24} color="primary">
                    <WorkIcon color="action" />
                    </BadgeStyled>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
            <Grid size={{ xs: 12, sm: 3 }}>
              <Item>
                <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  <Grid size={10}>
                    <JobsStyled align='left' variant="h6">QA  </JobsStyled>
                  </Grid>
                  <Grid size={2}>
                    <BadgeStyled badgeContent={34} color="primary">
                    <WorkIcon color="action" />
                    </BadgeStyled>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
     );
}

export default Vacancies;