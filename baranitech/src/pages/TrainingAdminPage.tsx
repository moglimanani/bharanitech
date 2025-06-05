import { NavLink, Outlet } from "react-router";
import { UseRequireUserSession } from "../hooks/useRequireUserSession";
import { UseRestoreUserSession } from "../hooks/useRestoreUserSession";
import { Grid } from "@mui/material";
import {
  AdminTitleStyled,
  GalleyAdminStyled,
  WrapperAdminStyled,
} from "./styles";
import PostAddIcon from '@mui/icons-material/PostAdd';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

export default function TrainingAdminPage() {
  UseRequireUserSession();
  UseRestoreUserSession();

  return (
    <Grid>
      <Grid size={12} sx={{ mb: 5 }}>
        <AdminTitleStyled>Trainings Admin Page</AdminTitleStyled>
      </Grid>
      <WrapperAdminStyled container>
        <Grid size={12}>
          <GalleyAdminStyled>
            <nav>
              <NavLink to="."><FormatListNumberedIcon />  Trainings</NavLink>
              <NavLink to={`add`}><PostAddIcon />  Add New</NavLink>
            </nav>
          </GalleyAdminStyled>
          <hr />

          <div style={{ margin: "20px 0" }}>
            <Outlet />
          </div>
        </Grid>
      </WrapperAdminStyled>
    </Grid>
  );
}
