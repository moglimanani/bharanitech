import { NavLink, Outlet } from "react-router";
import { UseRequireUserSession } from "../hooks/useRequireUserSession";
import { UseRestoreUserSession } from "../hooks/useRestoreUserSession";
import { Grid, Container } from "@mui/material";
import { GalleyAdminStyled, LearningResourcesStyled } from "./styles";

export default function JobsAdminPage() {
  UseRequireUserSession();
  UseRestoreUserSession();

  return (
    <Container>
      <Grid container>
        <Grid size={12}>
          <LearningResourcesStyled>
            Jobs Admin Page
          </LearningResourcesStyled>
          <GalleyAdminStyled>
            <nav style={{ padding: "1rem" }}>
              <NavLink to=".">Jobs</NavLink> |{" "}
              <NavLink to={`add`}>Add new Job</NavLink>
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
