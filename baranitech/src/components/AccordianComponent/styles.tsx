import { Box, ListItemButton, styled } from "@mui/material";

export const AccordianWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: 'transparent',
    padding: '0px',
    marginLeft: '16px'
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
    backgroundColor: 'white',
    color: 'red',
    '& > [class*="MuiListItemIcon-root"]': {
        color: 'red'
    }
}))