import {
    Toolbar,
    Typography,
    Box,
    styled,
    IconButton,
    List,
    ListItemText
} from '@mui/material';

import { NavLink } from 'react-router';

export const ActiveLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.appBarColour.light,
     letterSpacing: '1px',
    '&.active': {
        color: theme.palette.appBarColour.dark
    }
}))
export const ListItemTextStyled = styled(ListItemText)(({ theme }) => ({
    letterSpacing: '1px'
}))

export const LogoStyled = styled('img')(({ theme }) => ({
    width: 'auto',
    height: 'auto'
}))

export const BrandNameStyled = styled(Typography)(({ theme }) => ({
    fontSize: '2.2em',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '15px',
    color: theme.palette.common.white,
    fontFamily: 'monoton',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.3em',
    }
}))

export const AppBarStyled = styled(Box)(({ theme }) => ({
    // backgroundColor: theme.palette.appBarColour.main
   // background: 'yellow',
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
    'a':{
        color: theme.palette.appBarColour.main,
        display: 'flex',
        alignItems: 'center'
    }
}))

export const MenusBoxStyled = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
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
    [theme.breakpoints.up('sm')]: {
        paddingTop: '40px',
        paddingBottom: '20px',
    }
}))
