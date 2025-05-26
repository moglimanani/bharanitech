import { NavLink, Outlet } from "react-router";
import { UseRequireUserSession } from "../hooks/useRequireUserSession";
import { UseRestoreUserSession } from "../hooks/useRestoreUserSession";
import { Grid, Container } from "@mui/material";
import { AdminTitleStyled, GalleyAdminStyled, } from "./styles";

export default function TrainingAdminPage() {
  UseRequireUserSession();
  UseRestoreUserSession();

  return (
    <Container>
      <Grid container>
        <Grid size={12}>
          <AdminTitleStyled>
            Trainings Admin Page
          </AdminTitleStyled>
          <GalleyAdminStyled>
            <nav style={{ padding: "1rem" }}>
              <NavLink to=".">Trainings</NavLink> |{" "}
              <NavLink to={`add`}>Add new Training</NavLink>
            </nav>
            <div style={{ margin: "0 30px" }}>
              <Outlet />
            </div>
          </GalleyAdminStyled>
        </Grid>
      </Grid>
    </Container>
  );
}
