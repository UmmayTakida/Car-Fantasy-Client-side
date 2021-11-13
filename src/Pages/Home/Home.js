import { Container } from '@mui/material';
import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
// import Header from '../Shared/Header/Header';
import Products from './Products/Products';
import ReviewDisplay from './ReviewDisplay/ReviewDisplay';

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <Products></Products>
            <ReviewDisplay></ReviewDisplay>
            <AboutUs></AboutUs>
            <Footer></Footer>

        </Container>
    );
};

export default Home;