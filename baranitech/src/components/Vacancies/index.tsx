import { Grid } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import { GridColorStyled, IconBadgeStyled, ItemRight, JobsStyled, VacanciesStyled } from "./styles";
import { useJobCategories } from "../../contexts/jobCategoryContext";
import { useEffect, useState } from "react";
import { useAllJobs } from "../../contexts/allJobsContext";
import { JobsType } from "../../types/jobs";

function Vacancies() {

  const [jobs, setJobs] = useState<JobsType[]>([])
  const { categories } = useJobCategories()
  const { allJobs } = useAllJobs()

  useEffect(() => {
    if (Array.isArray(allJobs)) {
      const sortedArr = [...allJobs].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      const unqiueBylatest: JobsType[] = Array.from(new Map(sortedArr?.map((data: JobsType) => [data.type, data]))?.values())
      setJobs(unqiueBylatest)
    }
  }, [allJobs])


  return (
    <Grid container justifyContent='center'>
      <ItemRight>
        <VacanciesStyled variant="h5">Vacancies:  </VacanciesStyled>
      </ItemRight>
      {
        jobs && categories?.map((item) => (
          <GridColorStyled spacing={2} key={`jobCat${item.id}`}>
            <Grid>
              <JobsStyled align='left'>{item.title}</JobsStyled>
            </Grid>
            <Grid>
              <IconBadgeStyled badgeContent={jobs?.find((jItem: JobsType) => jItem?.type === item.id)?.total_vacancy ?? 0} color="primary"  >
                <WorkIcon color="action" />
              </IconBadgeStyled>
            </Grid>
          </GridColorStyled>
        ))
      }

    </Grid>
  );
}

export default Vacancies;