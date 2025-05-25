import { Grid } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import { BadgeStyled, GridColorStyled, GridParaStyled, IconBadgeStyled, IconStyled, Item, ItemRight, JobsStyled, VacanciesStyled } from "./styles";

function Vacancies() {

    return ( 
      <Grid container>
         <ItemRight>
             <VacanciesStyled variant="h5">Vacancies:  </VacanciesStyled>
         </ItemRight>
        <GridColorStyled spacing={2}>
               <Grid>
                <JobsStyled align='left'>Site Engineers  </JobsStyled>
               </Grid>
               <Grid>
                   <IconBadgeStyled badgeContent={14} color="primary"  >
                      <WorkIcon color="action"/>
                    </IconBadgeStyled>
               </Grid>
         </GridColorStyled>
         <GridColorStyled spacing={2}>
               <Grid>
                <JobsStyled align='left'>Technicians  </JobsStyled>
               </Grid>
               <Grid>
                   <IconBadgeStyled badgeContent={10} color="primary"  >
                      <WorkIcon color="action"/>
                    </IconBadgeStyled>
               </Grid>
         </GridColorStyled>
         <GridColorStyled spacing={2}>
               <Grid>
                <JobsStyled align='left'>QA  </JobsStyled>
               </Grid>
               <Grid>
                   <IconBadgeStyled badgeContent={30} color="primary"  >
                      <WorkIcon color="action"/>
                    </IconBadgeStyled>
               </Grid>
         </GridColorStyled>
         
         
      </Grid>
      //   <Grid container spacing={2}>
      //   <Grid size={{ xs: 12, sm: 4 }}>
      //     <ItemRight>
      //       <VacanciesStyled variant="h5">Vacancies:  </VacanciesStyled>
      //     </ItemRight>
      //   </Grid>
      //   <Grid>
      //     <Grid container>
      //            <Grid>
      //               <JobsStyled align='left'>Site Engineers  </JobsStyled>
      //             </Grid>
      //             <Grid>
      //               <IconBadgeStyled badgeContent={14} color="primary"  >
      //                 <WorkIcon color="action"/>
      //               </IconBadgeStyled>
      //             </Grid>
      //     </Grid>
          
      //   </Grid>
      //   {/* <GridParaStyled>
      //     <Grid container spacing={2}>
      //       <Grid size={{ xs: 4, sm: 12 }}>
      //         <Item>
      //           <Grid container>
      //             <Grid size={10}>
      //               <JobsStyled align='left'>Site Engineers  </JobsStyled>
      //             </Grid>
      //             <Grid size={2}>
      //               <IconBadgeStyled badgeContent={14} color="primary"  >
      //                 <WorkIcon color="action"/>
      //               </IconBadgeStyled>
      //             </Grid>
      //           </Grid>
      //         </Item>
      //       </Grid>
      //       <Grid size={{ xs: 4, sm: 12 }}>
      //         <Item>
      //           <Grid container>
      //             <Grid size={10}>
      //               <JobsStyled align='left'>Technicians </JobsStyled>
      //             </Grid>
      //             <Grid size={2}>
      //               <IconBadgeStyled badgeContent={24} color="primary">
      //               <WorkIcon color="action" />
      //               </IconBadgeStyled>
      //             </Grid>
      //           </Grid>
      //         </Item>
      //       </Grid>
      //       <Grid size={{ xs: 4, sm: 12 }}>
      //         <Item>
      //           <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"}>
      //             <Grid size={10}>
      //               <JobsStyled align='left' >QA  </JobsStyled>
      //             </Grid>
      //             <Grid size={2}>
      //               <IconBadgeStyled badgeContent={34} color="primary">
      //               <WorkIcon color="action" />
      //               </IconBadgeStyled>
      //             </Grid>
      //           </Grid>
      //         </Item>
      //       </Grid>
      //     </Grid>
      //   </GridParaStyled> */}
      // </Grid>
     );
}

export default Vacancies;