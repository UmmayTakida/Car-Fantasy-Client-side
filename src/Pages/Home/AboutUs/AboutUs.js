import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import "./About.css"

const AboutUs = () => {

    return (
        <Container className="container">
            <Typography variant="h2" gutterBottom component="div">Control Your Car-Buying Experience
            </Typography>
            <Typography variant="h5" gutterBottom component="div">
                At TrueCar, you're in charge of the process from start to finish. Here's how.
            </Typography>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6}>
                    <Typography variant="h3" gutterBottom component="div">
                        Build Your Deal With Confidence

                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        Get a personalized offer from a dealer online, including manufacturer incentives and discounts. Next, build a custom deal that includes the value of your trade-in and monthly payments.
                    </Typography>


                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" gutterBottom component="div">
                        Choose From Close to a Million Used Cars


                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        Get access to our extensive selection of pre-owned vehicles for sale across the US, and see price ratings based on similar used car listings in your area, so you know when you’re getting a great deal.


                    </Typography>

                </Grid>

            </Grid>
        </Container>
    );
};

export default AboutUs;