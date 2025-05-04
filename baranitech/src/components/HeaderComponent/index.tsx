import React from "react";
// import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AppBarStyled } from "./styles";

interface HeaderProps {
  title: string;
}

const HeaderComponent: React.FC<HeaderProps> = ({ title }) => {
  return (
    <AppBarStyled position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBarStyled>
  );
};

export default HeaderComponent;
