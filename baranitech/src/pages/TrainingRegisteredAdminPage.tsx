import { Outlet } from "react-router";
import { UseRequireUserSession } from "../hooks/useRequireUserSession";
import { UseRestoreUserSession } from "../hooks/useRestoreUserSession";
import { Grid } from "@mui/material";
import { AdminTitleStyled, WrapperAdminStyled } from "./styles";

export default function TrainingRegisteredAdminPage() {
  UseRequireUserSession();
  UseRestoreUserSession();

  return (
    <Grid>
      <Grid size={12} sx={{ mb: 5 }}>
        <AdminTitleStyled>Trainings Registered Admin Page</AdminTitleStyled>
      </Grid>
      <WrapperAdminStyled container>
        <Grid size={12}>
          {/* <GalleyAdminStyled>
          </GalleyAdminStyled> */}
          <div style={{ margin: "0 0 30px" }}>
            <Outlet />
          </div>
        </Grid>
      </WrapperAdminStyled>
    </Grid>
  );
}
