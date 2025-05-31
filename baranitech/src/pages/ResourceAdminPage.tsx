import { NavLink, Outlet } from "react-router";
import { UseRequireUserSession } from "../hooks/useRequireUserSession";
import { UseRestoreUserSession } from "../hooks/useRestoreUserSession";
import { Grid, Container } from "@mui/material";
import { AdminTitleStyled, GalleyAdminStyled, LearningResourcesStyled, WrapperAdminStyled } from "./styles";

export default function ResourceAdminPage() {
  UseRequireUserSession();
  UseRestoreUserSession();

  return (
    <Container>
      <Grid size={12} sx={{mb: 5}}>
         <AdminTitleStyled>
            Resources Admin Page
          </AdminTitleStyled>
      </Grid>
      <WrapperAdminStyled container>
        <Grid size={12}>
          
          <GalleyAdminStyled>
          <nav>
              <NavLink to=".">Resources</NavLink>
              <NavLink to={`add`}>Add New</NavLink>
            </nav>
            </GalleyAdminStyled>
            <div style={{margin: '0 0 30px'}}>
              <Outlet />
            </div>
        
        </Grid>
      </WrapperAdminStyled>
    </Container>
  );
}
