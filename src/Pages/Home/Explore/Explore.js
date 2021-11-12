import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';

import ExploreProducts from '../ExploreProducts/ExploreProducts'
import { Container } from 'react-bootstrap';


const Explore = () => {
    const [exploreProducts, setExploreProducts] = useState([]);
    useEffect(() => {
        fetch('https://floating-coast-75168.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setExploreProducts(data))
    }, [])
    return (
        <Container>
            <Typography>
                Our Available Cra Collections

            </Typography>
            <Box sx={{ flexGrow: 1 }}>

                <Grid container spacing={2}>


                    {

                        exploreProducts.map(product => <ExploreProducts
                            key={product._id}
                            product={product}
                        ></ExploreProducts>)

                    }



                </Grid>
            </Box>

        </Container >






    );
};

export default Explore;