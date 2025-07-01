import { Grid } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import { GridColorStyled, IconBadgeStyled, JobsStyled, VacanciesStyledMain } from "./styles";
import { useJobCategories } from "../../contexts/jobCategoryContext";
import { useEffect, useState } from "react";
import { useAllJobs } from "../../contexts/allJobsContext";

function Vacancies() {

  const [jobs, setJobs] = useState<Record<number, number>>({})
  const { categories } = useJobCategories()
  const { allJobs } = useAllJobs()

  useEffect(() => {
    if (Array.isArray(allJobs)) {
      const sortedArr = [...allJobs].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
      const added = sortedArr.reduce<Record<number, number>>((acc, item) => {
        acc[item.category.id] = (acc[item.category.id] || 0) + item.total_vacancy
        return acc 
      }, {})
      
      // const unqiueBylatest: JobsType[] = Array.from(new Map([...sortedArr]?.map((data: JobsType) => [data.type, data]))?.values())
      
      setJobs(added)
    }
  }, [allJobs])


  return (
    <VacanciesStyledMain container justifyContent='center'>
      {/* <ItemRight>
        <VacanciesStyled variant="h5">Vacancies:  </VacanciesStyled>
      </ItemRight> */}
      {
        jobs && categories?.map((item) => (
          <GridColorStyled spacing={1} key={`jobCat${item.id}`}>
            <Grid>
              <JobsStyled align='left'>{item.title}</JobsStyled>
            </Grid>
            <Grid>
              <IconBadgeStyled badgeContent={jobs[item.id] == null ? 0 : jobs[item.id]} color="primary" showZero max={99999}>
                <WorkIcon color="action" />
              </IconBadgeStyled>
            </Grid>
          </GridColorStyled>
        ))
      }

    </VacanciesStyledMain>
  );
}

export default Vacancies;