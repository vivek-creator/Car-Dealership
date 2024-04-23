import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import image from '../assets/image.png';

const ResponsiveAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledAppBar = styled(AppBar)({
    background: '#2d2d2d',
    height: 80,
  });

  const handleMenuClick = (pageURL) => {
    navigate(pageURL);
    handleClose();
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleMenuClick('/login')}>Login</MenuItem>
          <MenuItem onClick={() => handleMenuClick('/profile')}>Profile</MenuItem>
          <MenuItem onClick={() => handleMenuClick('/account')}>Account</MenuItem>
          <MenuItem onClick={() => handleMenuClick('/logout')}>Logout</MenuItem>
          <MenuItem onClick={() => handleMenuClick('/dashboard')}>Dashboard</MenuItem>
        </Menu>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <img src={image} alt="Car Dealers Logo" height={80} width={150}/>
          </Link>
        </Typography>
        <Button color="inherit" onClick={() => handleMenuClick('/cars')}>Cars</Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default ResponsiveAppBar;



// import * as React from 'react';
// import { AppBar, styled, Toolbar, Box, IconButton, 
//   Typography, Menu, Container, Avatar, Button, 
//   Tooltip, MenuItem } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import AdbIcon from '@mui/icons-material/Adb';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import image from '../assets/image.png';
// import { routhPath } from '../routes/route';
// //import LoginPage from '../pages/LoginPage';


// const pages = ['Cars', 'LoginPage', 'Brands'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const pageRoutes = {
//   Cars: '/Cars',
//   LoginPage:   '/LoginPage',
//   // Brands: '/Brands',
// };

// const settingRoutes = {
  
//   Profile:     '/Profile',
//   AccountPage: '/AccountPage',
//   Dashboard:   '/Dashboard',
//   Logout:      '/',
// };

// function ResponsiveAppBar() {
 
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const navigate = useNavigate(); // Declare navigate using useNavigate

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };
//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const handlePageClick = (page) => {
//     navigate(pageRoutes[page]);
//     handleCloseNavMenu();
//   };

//   const handleSettingClick = (setting) => {
//     navigate(settingRoutes[setting]);
//     handleCloseUserMenu();
//   };

 


//   return (
//          <StyledAppBar position="static"> 
//             <Container maxWidth="xl">
//               <Toolbar disableGutters>
//                 <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//                 <Typography
//                   variant="h6"
//                   noWrap
//                   component="a"
//                   href="#"
//                   sx={{
//                     mr: 2,
//                     display: { xs: 'none', md: 'flex' },
//                     fontFamily: 'monospace',
//                     fontWeight: 700,
//                     letterSpacing: '.3rem',
//                     color: 'inherit',
//                     textDecoration: 'none',
//                   }}
//                 > 
//                   <Button onClick={() => navigate(routhPath.home)} style={{ padding: 0 }}>
//                    <img src={image} alt="Car Dealers Logo" height={80} width={150}/>
//                   </Button>
                 
//                 </Typography>
  
//                 <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                   <IconButton size="large" aria-label="navigation menu" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
//                     <MenuIcon />
//                    </IconButton>
              
//                     <Menu
//                     id="menu-appbar"
//                     anchorEl={anchorElNav}
//                     anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//                     keepMounted
//                     transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//                     open={Boolean(anchorElNav)}
//                     onClose={handleCloseNavMenu}
//                   >
//                     {pages.map((page) => (
//                       <MenuItem key={page} onClick={handleCloseNavMenu}>
//                         {/* <Typography textAlign="center">{page}</Typography> */}
//                         {pages.map((page) => (
//                           <MenuItem key={page} onClick={() => handlePageClick(page)}> 
//                             <Typography textAlign="center">{page}</Typography>
//                           </MenuItem>
//                         ))}
//                       </MenuItem>
//                     ))}
//                   </Menu>
//                 </Box>
    
//                 {/* Main navigation for larger screens */}
//                 <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                   {pages.map((page) => (
//                     <Button key={page}  onClick={() => handlePageClick(page)} 
//                     sx={{ my: 2, color: 'white', display: 'block' }}>
//                       {page}
//                     </Button>
//                   ))}
//                 </Box>
//                 {/* User menu */}
//                 <Box sx={{ flexGrow: 0 }}>
//                   <Tooltip title="Open settings">
//                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                       <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
//                     </IconButton>
//                   </Tooltip>
//                   <Menu
//                     id="menu-appbar"
//                     anchorEl={anchorElUser}
//                     anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//                     keepMounted
//                     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//                     sx ={{ right: '0px !important', top: '38px', left: 1200}}
//                     open={Boolean(anchorElUser)}
//                     onClose={handleCloseUserMenu}
//                   >
//                    {settings.map((setting) => (
//                       <MenuItem key={setting} onClick={() => handleSettingClick(setting)}> 
//                         <Typography textAlign="center">{setting}</Typography>
//                       </MenuItem>
//                     ))}
//                   </Menu>
//                 </Box>
//               </Toolbar>
//             </Container>
//            </StyledAppBar>
//         );
//       }

// export default ResponsiveAppBar;


