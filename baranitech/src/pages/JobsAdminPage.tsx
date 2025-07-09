import { NavLink, Outlet } from "react-router";
import { UseRequireUserSession } from "../hooks/useRequireUserSession";
import { UseRestoreUserSession } from "../hooks/useRestoreUserSession";
import { Grid } from "@mui/material";
import { AdminTitleStyled, GalleyAdminStyled, WrapperAdminStyled } from "./styles";
import PostAddIcon from '@mui/icons-material/PostAdd';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

export default function JobsAdminPage() {
  UseRequireUserSession();
  UseRestoreUserSession();

  return (
    <Grid>
      <Grid size={12} sx={{ mb: 5 }}>
        <AdminTitleStyled>
          Jobs Admin Page
        </AdminTitleStyled>
      </Grid>
      <WrapperAdminStyled container>

        <Grid size={12}>
          <GalleyAdminStyled>
            <nav>
              <NavLink to="." end={false}><FormatListNumberedIcon />  Jobs</NavLink>
              <NavLink to={`add`} className="boxer" end={false}><PostAddIcon />  Add New</NavLink>
              <NavLink to={`candidates`} end={false}><PersonSearchIcon />  Candidates</NavLink>
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
