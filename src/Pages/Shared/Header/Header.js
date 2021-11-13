import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../../../hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    const { user, logout } = useAuth();
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 5, px: 3 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" edge="start" component="div" sx={{ flexGrow: 1 }}>
                        Cars fantasy
                    </Typography>
                    <Link to="/explore"><Button variant="contained" color="inherit">Explore</Button></Link>
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none' }} to="/dashboard">   <Button color="inherit" variant="contained">Dashboard</Button>
                                </NavLink>
                                <Button color="inherit"> <p>{user.displayName}</p></Button>


                                <Button onClick={logout} color="inherit">logout</Button>
                            </Box>

                            :
                            <NavLink style={{ textDecoration: 'none' }} to="/login">   <Button variant="contained" color="inherit">Login</Button>
                            </NavLink>

                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;