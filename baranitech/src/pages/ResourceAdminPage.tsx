import { NavLink, Outlet } from "react-router";
import { UseRequireUserSession } from "../hooks/useRequireUserSession";
import { UseRestoreUserSession } from "../hooks/useRestoreUserSession";
import { Grid, Container } from "@mui/material";
import { GalleyAdminStyled, LearningResourcesStyled } from "./styles";

export default function ResourceAdminPage() {
  UseRequireUserSession();
  UseRestoreUserSession();

  return (
    <Container>
      <Grid container>
        <Grid size={12}>
          <LearningResourcesStyled>
            Resources Admin Page
          </LearningResourcesStyled>
          <GalleyAdminStyled>
            <nav style={{ padding: "1rem" }}>
              <NavLink to=".">Resources</NavLink> |{" "}
              <NavLink to={`add`}>Add New</NavLink>
            </nav>
            <div style={{ margin: "30px" }}>
              <Outlet />
            </div>
          </GalleyAdminStyled>
        </Grid>
      </Grid>
    </Container>
  );
}
