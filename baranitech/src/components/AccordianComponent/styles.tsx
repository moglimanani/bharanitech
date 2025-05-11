import { Box, ListItemButton, styled } from "@mui/material";

export const AccordianWrapper = styled(Box)(() => ({
    backgroundColor: 'transparent',
    padding: '0px'
}))

export const ListItemButtonStyled = styled(ListItemButton)(()=>({
    backgroundColor: '#C4F4FF',
    marginBottom: '2px',
    borderRadius: '20px',
    color: '#4d4d4d',
    '& > [class*="MuiListItemIcon-root"]': {
        color: '#127B93',
        minWidth: '35px',
    },
    '&:hover': {
        backgroundColor: "#ffffff",
    },
}))