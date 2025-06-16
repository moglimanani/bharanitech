import { Box, ListItemButton, ListItemButtonProps, styled } from "@mui/material";

interface ListItemButtonStyledProps extends ListItemButtonProps {
  to?: string;
  end?: boolean;
}

export const AccordianWrapper = styled(Box)(() => ({
    backgroundColor: 'transparent',
    padding: '0px'
}))

export const ListItemButtonStyled = styled(ListItemButton)<ListItemButtonStyledProps>(({theme})=>({
    backgroundColor: theme.palette.flashPrimaryBGColor.main,
    marginBottom: '2px',
    borderRadius: '20px',
    '& div > span': {
        fontSize: '.88em',
    },
    color: theme.palette.secondary.main,
    '& > [class*="MuiListItemIcon-root"]': {
        color: theme.palette.appBarColour.main,
        minWidth: '35px',
    },
    '&:hover': {
        backgroundColor: "#ffffff",
    },
}))