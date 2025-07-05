import {
    Toolbar,
    Typography,
    Box,
    styled,
    IconButton,
    List,
    ListItemText,
    Chip
} from '@mui/material';

import { NavLink } from 'react-router';

export const ActiveLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.appBarColour.light,
    letterSpacing: '1px',
    '&.active': {
        color: theme.palette.appBarColour.dark,
    }
}))
export const ListItemTextStyled = styled(ListItemText)(() => ({
    letterSpacing: '1px'
}))

export const LogoStyled = styled('img')(({ theme }) => ({
    width: '100px',
    height: '100px',
    [theme.breakpoints.down('sm')]: {
        width: '60px',
        height: '60px',
    }
}))

export const BrandNameStyled = styled(Typography)(({ theme }) => ({
    fontSize: '2.2em',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '15px',
    paddingTop: '0px',
    color: theme.palette.common.white,
    fontFamily: 'Poetsen One',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.3em',
        paddingTop: '0px'
    },[theme.breakpoints.down('md')]: {
        fontSize: '1.3em',
        paddingTop: '0px'
    }
}))

export const AppBarjusitfyStyled = styled('div')(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    justifyContent: 'right',
    alignContent: 'flex-end',
    textAlign: 'right',
}))



export const AppBarStyled = styled(Box)(() => ({
    // backgroundColor: theme.palette.appBarColour.main
    // background: 'yellow',
}))

export const ChipStyled = styled(Chip)(({ theme }) => ({
    // backgroundColor: theme.palette.appBarColour.main
    background: theme.palette.flashPrimaryBGColor.main,
    color: theme.palette.appBarColour.main,
    "& > svg > path": {
        color: theme.palette.appBarColour.main,
    },
    '&:hover': {
        color: theme.palette.appBarColour.main,
        background: theme.palette.appBarColour.light,
    }

}))

export const IconButtonStyled = styled(IconButton)(({ theme }) => ({
    color: theme.palette.common.white,
    'svg': {
        fontSize: '1.5em'
    }
}))

export const MobileMenuListStyled = styled(List)(({ theme }) => ({
    // color: theme.palette.common.white,
    // 'svg': {
    //     fontSize: '1.5em'
    // }
    'a': {
        color: theme.palette.appBarColour.main,
        display: 'flex',
        alignItems: 'center'
    }
}))

export const MenusBoxStyled = styled(Box)(({ theme }) => ({
    //backgroundColor: theme.palette.common.white,
    backgroundColor: theme.palette.appBarColour.light,
    padding: '8px 16px',
    borderRadius: '8px',
    gap: '8px',
    fontFamily: 'Quintessential',
    fontSize: '0.88em',
    fontWeight: 'bold',
    'a': {
        color: theme.palette.appBarColour.main,
        '::after': {
            content: '"|"',
            margin: '8px'
        },
        '&:last-child': {
            '::after': {
                content: '""',
                margin: '0px'
            },
        },
        '&.active': {
            color: theme.palette.appBarColour.main,
            textDecoration: 'underline'
        }
    }
}))

export const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingTop: '20px',
    [theme.breakpoints.up('sm')]: {
        paddingBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }
}))
