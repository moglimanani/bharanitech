import { UseRequireUserSession } from "../hooks/useRequireUserSession"
import { UseRestoreUserSession } from "../hooks/useRestoreUserSession"
import {
  Grid,
  Container
} from "@mui/material";
import { AdminStyled, LearningResourcesStyled } from "./styles";
import { useNavigate } from "react-router";


export default function AdminPage() {
  UseRequireUserSession()
  UseRestoreUserSession()
  const navigate = useNavigate()
  
  return (
    <Container sx={{ mt: 1 }}>
       <Grid container>
      <Grid size={12}>
        <LearningResourcesStyled>
          Admin
        </LearningResourcesStyled>
       
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <AdminStyled>
          <div>Gallery</div>
          <div></div>
          <button onClick={()=>navigate(import.meta.env.VITE_ROUTE_ADMIN_GALLERY_URL)}> Read More </button>    
        </AdminStyled>  
        
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <AdminStyled>
          <div>Recources</div>
          <button onClick={()=>navigate(import.meta.env.VITE_ROUTE_ADMIN_RESOURCE_URL)}> Read More </button>    
        </AdminStyled>  
        
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <AdminStyled>
          <div>Job</div>
          <button onClick={()=>navigate(import.meta.env.VITE_ROUTE_ADMIN_JOBS_URL)}> Read More </button>    
        </AdminStyled>  
          
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <AdminStyled>
           <div>Training</div>
          <button onClick={()=>navigate(import.meta.env.VITE_ROUTE_ADMIN_TRAINING_URL)}> Read More </button>    
        </AdminStyled>  
       
      </Grid>
    </Grid>
    </Container>
   
  )
}
