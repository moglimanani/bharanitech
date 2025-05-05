import { Box, ListItemButton, styled } from "@mui/material";

export const AccordianWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: 'transparent',
    padding: '0px',
    // ' .MuiListItemButton-root': {
    //     backgroundColor: 'red',
    //     display: 'flex',
    //     alignItems: 'flex-start'
    // },
    // 'nav': {
    //     '& > .MuiListItemButton-root': {
    //         backgroundColor: 'green'
    //     },
    //     '& > .MuiCollapse-vertical': {
    //         '&  .MuiList-root': {
    //             backgroundColor: 'yellow',
    //             ' & > .MuiListItemButton-root': {
    //                 backgroundColor: 'blue',
    //                 display: 'flex',
    //                 alignItems: 'flex-start'
    //             },
    //         },

    //     }
    // }
}))

export const ListItemButtonStyled = styled(ListItemButton)(({theme})=>({
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