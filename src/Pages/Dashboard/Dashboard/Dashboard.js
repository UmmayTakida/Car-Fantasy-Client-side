import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';
import AdminRoute from '../../Home/Login/AdminRoute/AdminRoute';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';




const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user, admin, logout } = useAuth()


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const boxStyle = {
        p: 2,
        m: 3
    }

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none' }} to="/home"> <Button sx={boxStyle} variant="contained" color="inherit">Home</Button></Link>

            {/* <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link> */}






            {
                admin && <Box >
                    <Link to={`${url}/addNewAdmin`}><Button sx={boxStyle} variant="contained" color="inherit">Add New Admin</Button></Link>
                    <Link to={`${url}/addNewProduct`}><Button sx={boxStyle} variant="contained" color="inherit">Add New Product</Button></Link>
                    <Link to={`${url}/manageProducts`}><Button sx={boxStyle} variant="contained" color="inherit">Manage Products</Button></Link>
                    <Link to={`${url}/manageAllOrders`}><Button sx={boxStyle} variant="contained" color="inherit">Manage All Orders</Button></Link>

                </Box>
            }
            {
                !admin && <Box>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/myOrders`}><Button sx={boxStyle} variant="contained" color="inherit">My Orders</Button></Link>
                    <br />
                    <Link to={`${url}/pay`}><Button sx={boxStyle} variant="contained" color="inherit">Payment</Button></Link>
                    <br />
                    <Link to={`${url}/reviews`}><Button sx={boxStyle} variant="contained" color="inherit">Give Reviews</Button></Link>

                </Box>
            }
            {user?.email ?
                <Box>
                    <Button onClick={logout} variant="contained" color="inherit">logout</Button>
                </Box>
                :
                <NavLink to="/login">   <Button color="inherit">Login</Button>
                </NavLink>
            }





            <Divider />

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>

                    <AdminRoute path={`${path}/addNewProduct`}>
                        <AddNewProduct></AddNewProduct>

                    </AdminRoute>
                    <AdminRoute path={`${path}/addNewAdmin`}>

                        <MakeAdmin></MakeAdmin>

                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>

                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>


                    </AdminRoute>
                    <Route path={`${path}/myOrders`}>

                        <MyOrders></MyOrders>

                    </Route>
                    <Route path={`${path}/pay`}>

                        <Pay></Pay>

                    </Route>
                    <Route path={`${path}/reviews`}>

                        <Review></Review>

                    </Route>


                </Switch>


            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
