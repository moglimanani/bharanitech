import { Link, NavLink, Outlet } from "react-router";
import GalleryList, { GalleryItem } from "../components/GalleryList";
import { UseRequireUserSession } from "../hooks/useRequireUserSession";
import { UseRestoreUserSession } from "../hooks/useRestoreUserSession";
import { Grid, Container } from "@mui/material";
import {
  AdminTitleStyled,
  GalleyAdminStyled,
  LearningResourcesStyled,
  NavAdminStyled,
  WrapperAdminStyled,
} from "./styles";

const mockItems: GalleryItem[] = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  title: `Gallery Item ${index + 1}`,
  imageUrl: `https://source.unsplash.com/random/400x300?sig=${index + 1}`,
}));

export default function GalleryAdminPage() {
  UseRequireUserSession();
  UseRestoreUserSession();

  return (
    <Container>
      <WrapperAdminStyled container>
        <Grid size={12}>
          <AdminTitleStyled>Gallery Admin Page</AdminTitleStyled>
          <GalleyAdminStyled>
            <nav>
              <NavLink to=".">Gallery</NavLink>
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
