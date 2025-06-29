import React, { memo, useState } from 'react';
import {
  Typography,
  Drawer,
  ListItem,
  ListItemButton,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import {ActiveLink, LogoStyled, AppBarStyled, MenusBoxStyled, ToolbarStyled, IconButtonStyled, MobileMenuListStyled, ListItemTextStyled, BrandNameStyled} from './styles'

const menuItems = [
  { path: '/', name: 'Home' },
  { path: '/aboutus', name: 'About Us' },
  { path: '/resources', name: 'Resources' },
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
  const navigate = useNavigate()

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
                <LabelImportantIcon /> <ListItemTextStyled primary={item.name} />
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
          <Typography variant="h6" onClick={() => { navigate(import.meta.env.VITE_ROUTE_HOME_URL);}} sx={{ flexGrow: 1, cursor: 'pointer' }}  display='flex' alignItems='center'>
            <LogoStyled src='/logo.png' alt='Barani Tech logo' loading='lazy' />
            <BrandNameStyled align='left' display='flex'>
              Barani Tech
            </BrandNameStyled>
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
