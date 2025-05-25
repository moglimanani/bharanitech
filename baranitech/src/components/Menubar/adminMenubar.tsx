import React, { memo, useRef, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  styled,
  ListItemIcon,
  Collapse,
  Chip,
  Avatar,
  Popper,
  ClickAwayListener,
  Paper,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink, useMatch, useParams } from 'react-router';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { ActiveLink, LogoStyled, BrandNameStyled, AppBarStyled, MenusBoxStyled, ToolbarStyled, IconButtonStyled, MobileMenuListStyled, ChipStyled } from './styles'
import { useUser } from '../../contexts/userContext';
import { Logout, Person } from '@mui/icons-material';

const menuItems = [
  { path: import.meta.env.VITE_ROUTE_ADMIN_URL, name: 'Home' },
  { path: import.meta.env.VITE_ROUTE_ADMIN_GALLERY_URL, name: 'Gallery' },
  { path: import.meta.env.VITE_ROUTE_ADMIN_RESOURCE_URL, name: 'Resources' },
  { path: import.meta.env.VITE_ROUTE_ADMIN_JOBS_URL, name: 'Jobs' },
  { path: import.meta.env.VITE_ROUTE_ADMIN_TRAINING_URL, name: 'Trainings' },
  { path: '/candidates', name: 'Candidates' },
];

const MenuBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logutOpen, setLogoutOpen] = React.useState(false);
  const { user, logout } = useUser()
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const params = useParams()
  const match = useMatch('/')
  console.log('params', user);
  const anchorRef = useRef<HTMLDivElement | null>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!logutOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>

      </Typography>
      <MobileMenuListStyled>
        {menuItems.map((item, id) => (
          <ListItem key={`menuItem-${id}`} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={item.path}>
                <LabelImportantIcon /> <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </MobileMenuListStyled>
    </Box>
  );

  const handleToggle = () => {
    setLogoutOpen(prev => !prev);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as Node)) {
      return;
    }
    setLogoutOpen(false);
  };

  return (
    <>
      <AppBarStyled position="static">
        <ToolbarStyled>
          {isMobile && (
            <IconButtonStyled
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButtonStyled>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1 }} display='flex' alignItems='flex-start'>
            <LogoStyled src='/logo.png' alt='Barani Tech logo' loading='lazy' />
            {/* <BrandNameStyled sx={{ flexGrow: 1 }} align='left' display='flex'>
              Barani Tech
            </BrandNameStyled> */}
          </Typography>
          {!isMobile && (
            <MenusBoxStyled>
              {menuItems.map((item, id) => (
                <ActiveLink  key={`mobileMenuItem-${id}`} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                } to={item.path}>
                  {item.name}
                </ActiveLink>

              ))}
              {/* <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="a"
                aria-labelledby="nested-list-subheader" */}
              {/* > */}
              <ActiveLink key="logout" to="#">

                <ChipStyled
                  ref={anchorRef}
                  avatar={<Person />}
                  label={user?.username}
                  onClick={handleToggle}
                  sx={{ cursor: 'pointer' }}
                />

                <Popper open={logutOpen} anchorEl={anchorRef.current} placement="bottom-start" disablePortal>
                  <ClickAwayListener onClickAway={handleClose}>
                    <Paper elevation={3}>
                      <List component="nav" dense>
                        <ListItemButton onClick={() =>{logout();}}>
                          <ListItemIcon><Logout /></ListItemIcon>
                          <ListItemText primary="Logout" />
                        </ListItemButton>
                      </List>
                    </Paper>
                  </ClickAwayListener>
                </Popper>
              </ActiveLink>
              {/* <ListItemButton onClick={handleUserClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                  {logutOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton> */}

              {/* </List> */}
            </MenusBoxStyled>
          )}
        </ToolbarStyled>
      </AppBarStyled>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default memo(MenuBar);
