import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);


    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    return (

        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>

                    <form onSubmit={handleLoginSubmit}>

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>

                        <NavLink style={{ textDecoration: "none" }} to="/register"><Button variant="text">New User? Please Register</Button></NavLink>


                    </form>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Successfully Login</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}


                </Grid>
                <Grid item xs={12} md={6}>


                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;