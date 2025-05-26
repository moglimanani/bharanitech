import { NavLink, Outlet } from "react-router";
import { UseRequireUserSession } from "../hooks/useRequireUserSession";
import { UseRestoreUserSession } from "../hooks/useRestoreUserSession";
import { Grid, Container } from "@mui/material";
import { AdminTitleStyled, GalleyAdminStyled, } from "./styles";

export default function TrainingRegisteredAdminPage() {
  UseRequireUserSession();
  UseRestoreUserSession();

  return (
    <Container>
      <Grid container>
        <Grid size={12}>
          <AdminTitleStyled>
            Trainings Registered Admin Page
          </AdminTitleStyled>
          <GalleyAdminStyled>
            <div style={{ margin: "0 30px" }}>
              <Outlet />
            </div>
          </GalleyAdminStyled>
        </Grid>
      </Grid>
    </Container>
  );
}
