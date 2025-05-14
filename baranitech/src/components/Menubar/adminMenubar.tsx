import React, { memo, useState } from 'react';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink, useMatch, useParams } from 'react-router';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import {ActiveLink, LogoStyled, BrandNameStyled, AppBarStyled, MenusBoxStyled, ToolbarStyled, IconButtonStyled, MobileMenuListStyled} from './styles'

const menuItems = [
  { path: import.meta.env.VITE_ROUTE_ADMIN_URL, name: 'Home' },
  { path: import.meta.env.VITE_ROUTE_ADMIN_GALLERY_URL, name: 'Gallery' },
  { path: import.meta.env.VITE_ROUTE_ADMIN_RESOURCE_URL, name: 'Resources' },
  { path: '/jobs', name: 'Jobs' },
  { path: '/trainings', name: 'Trainings' },
  // { path: '/login', name: 'Login' },
  { path: '/contact', name: 'Contact Us' },
  // { path: '/testimonial', name: 'Testimonials' }
];

const MenuBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const params = useParams()
  const match = useMatch('/')
  console.log('params', params, match);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
                <ActiveLink key={`mobileMenuItem-${id}`} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                } to={item.path}>
                  {item.name}
                </ActiveLink>

              ))}
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
