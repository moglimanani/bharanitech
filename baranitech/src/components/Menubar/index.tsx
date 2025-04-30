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
import { usePostsContext } from '../../contexts/postContext';
import { Link, NavLink, useMatch, useParams } from 'react-router';

const menuItems = [
  { path: '/', name: 'Home' },
  { path: '/aboutus', name: 'About Us' },
  { path: '/resources', name: 'Resources' },
  { path: '/jobs', name: 'Jobs' },
  { path: '/trainings', name: 'Trainings' },
  { path: '/login', name: 'Login' },
  { path: '/contact', name: 'Contact Us' },
  { path: '/testimonial', name: 'Testimonials' }
];

const MenuBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { posts } = usePostsContext()
  const params = useParams()
  const match = useMatch('/')
  console.log('params', params, match);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const ActiveLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.appBarColour.light,
    '&.active': {
      color: theme.palette.appBarColour.dark
    }
  }))

  const LogoStyled = styled('img')(({ theme }) => ({
    width: '50px',
    height: '50px'
  }))
  const BrandNameStyled = styled(Typography)(({ theme }) => ({
    fontSize: '1.5em',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '15px'
  }))
  const AppBarStyled = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.appBarColour.main
  }))




  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Mogli Developers
      </Typography>
      <List>
        {menuItems.map((item, id) => (
          <ListItem key={`menuItem-${id}`} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={item.path}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBarStyled position="static">
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1 }} align='left' display='flex'>
            <LogoStyled src='/logo.jpeg' alt='Barani Tech logo' loading='lazy' />
            <BrandNameStyled sx={{ flexGrow: 1 }} align='left' display='flex'>
              Barani Tech
            </BrandNameStyled>
          </Typography>
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map((item, id) => (
                <ActiveLink key={`mobileMenuItem-${id}`} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                } to={item.path}>
                  {item.name}
                </ActiveLink>

              ))}
            </Box>
          )}
        </Toolbar>
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
