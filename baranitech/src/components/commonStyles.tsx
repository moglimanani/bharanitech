import { Box, styled } from "@mui/material";

export const ActionWrapper = styled(Box)(({theme}) => ({
    right: '8px',
    position: 'absolute',
    'button': {
        marginRight: "8px",
        backgroundColor: "rgba(255,255,255,0.8)",
        color: theme.palette.appBarColour.main,
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.8)",
        },
    }
}))