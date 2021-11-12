import { Container } from '@mui/material';
import React from 'react';
import Header from '../Shared/Header/Header';
import Products from './Products/Products';

const Home = () => {
    return (
        <Container>
            <Header></Header>
            <Products></Products>

        </Container>
    );
};

export default Home;