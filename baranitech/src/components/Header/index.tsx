// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Button,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Box,
//   useTheme,
//   useMediaQuery,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// const navItems = ['Home', 'About', 'Services', 'Contact'];

// const Header: React.FC = () => {
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         Barani Tech
//       </Typography>
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemText primary={item} />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       <AppBar position="static" color="primary">
//         <Toolbar>
//           {isMobile && (
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               onClick={handleDrawerToggle}
//               sx={{ mr: 2 }}
//             >
//               <MenuIcon />
//             </IconButton>
//           )}
//           <Typography variant="h6" sx={{ flexGrow: 1 }} align='left'>
//           Barani Tech
//           </Typography>
//           {!isMobile && (
//             <Box>
//               {navItems.map((item) => (
//                 <Button key={item} color="inherit">
//                   {item}
//                 </Button>
//               ))}
//             </Box>
//           )}
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="left"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{ keepMounted: true }}
//       >
//         {drawer}
//       </Drawer>
//     </>
//   );
// };

// export default Header;
