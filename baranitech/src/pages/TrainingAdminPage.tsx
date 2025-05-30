import { NavLink, Outlet } from "react-router";
import { UseRequireUserSession } from "../hooks/useRequireUserSession";
import { UseRestoreUserSession } from "../hooks/useRestoreUserSession";
import { Grid, Container } from "@mui/material";
import { AdminTitleStyled, GalleyAdminStyled, WrapperAdminStyled, } from "./styles";

export default function TrainingAdminPage() {
  UseRequireUserSession();
  UseRestoreUserSession();

  return (
    <Container>
      <WrapperAdminStyled container>
        <Grid size={12}>
          <AdminTitleStyled>
            Trainings Admin Page
          </AdminTitleStyled>
          <GalleyAdminStyled>
          <nav>
              <NavLink to=".">Trainings</NavLink>
              <NavLink to={`add`}>Add New</NavLink>
            </nav>
            </GalleyAdminStyled>
            <div style={{ margin: "0 0 30px" }}>
              <Outlet />
            </div>
          
        </Grid>
      </WrapperAdminStyled>
    </Container>
  );
}
