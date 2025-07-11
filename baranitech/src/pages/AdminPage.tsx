import { UseRequireUserSession } from "../hooks/useRequireUserSession";
import { UseRestoreUserSession } from "../hooks/useRestoreUserSession";
import { Grid } from "@mui/material";
import {
  AdminButtonStyled,
  AdminStyled,
  AdminTitleStyled,
  WrapperAdminStyled,
} from "./styles";
import { useNavigate } from "react-router";
import CollectionsIcon from "@mui/icons-material/Collections";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";

export default function AdminPage() {
  UseRequireUserSession();
  UseRestoreUserSession();
  const navigate = useNavigate();

  return (
    <Grid>
      <Grid size={12} sx={{ mb: 5 }}>
        <AdminTitleStyled>Home</AdminTitleStyled>
      </Grid>
      <WrapperAdminStyled container>
        <Grid size={{ xs: 12, md: 3 }}>
          <AdminStyled onClick={() =>
            navigate(import.meta.env.VITE_ROUTE_ADMIN_GALLERY_URL)
          }>
            <div>Gallery</div>
            <div>
              <AdminButtonStyled>
                <CollectionsIcon sx={{ fontSize: "8em" }} />
              </AdminButtonStyled>
            </div>
            {/* <button onClick={()=>navigate(import.meta.env.VITE_ROUTE_ADMIN_GALLERY_URL)}> Read More </button>     */}
          </AdminStyled>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <AdminStyled>
            <div>Resources</div>
            <div>
              <AdminButtonStyled
                onClick={() =>
                  navigate(import.meta.env.VITE_ROUTE_ADMIN_RESOURCE_URL)
                }
              >
                <AutoStoriesIcon sx={{ fontSize: "8em" }} />
              </AdminButtonStyled>
            </div>

            {/* <button onClick={()=>navigate(import.meta.env.VITE_ROUTE_ADMIN_RESOURCE_URL)}> Read More </button>     */}
          </AdminStyled>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <AdminStyled>
            <div>Career</div>
            <div>
              <AdminButtonStyled
                onClick={() =>
                  navigate(import.meta.env.VITE_ROUTE_ADMIN_JOBS_URL)
                }
              >
                <WorkOutlineIcon sx={{ fontSize: "8em" }} />
              </AdminButtonStyled>
            </div>

            {/* <button onClick={()=>navigate(import.meta.env.VITE_ROUTE_ADMIN_JOBS_URL)}> Read More </button>     */}
          </AdminStyled>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <AdminStyled>
            <div>Training</div>
            <div>
              <AdminButtonStyled
                onClick={() =>
                  navigate(import.meta.env.VITE_ROUTE_ADMIN_TRAINING_URL)
                }
              >
                <CastForEducationIcon sx={{ fontSize: "8em" }} />
              </AdminButtonStyled>
            </div>

            {/* <button onClick={()=>navigate(import.meta.env.VITE_ROUTE_ADMIN_TRAINING_URL)}> Read More </button>     */}
          </AdminStyled>
        </Grid>
      </WrapperAdminStyled>
    </Grid>
  );
}
