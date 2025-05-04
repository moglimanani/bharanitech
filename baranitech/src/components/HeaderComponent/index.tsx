import React from "react";
import { AppBarStyled, ToolbarStyled, TypographyStyled } from "./styles";

interface HeaderProps {
  title: string;
}

const HeaderComponent: React.FC<HeaderProps> = ({ title }) => {
  return (
    <AppBarStyled position="static">
      <ToolbarStyled>
        <TypographyStyled>
          {title}
        </TypographyStyled>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default HeaderComponent;
