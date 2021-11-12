import React, { useEffect, useState } from 'react';
// import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Product from '../Product/Product';
import { Container, Grid } from '@mui/material';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://floating-coast-75168.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))


    }, [])
    const showProducts = products.slice(0, 6);

    return (



        <Container>

            <Box sx={{ flexGrow: 1 }}>
                <h2>Our Popular Products</h2>
                <Grid container spacing={2} >
                    {
                        showProducts.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>

            </Box>
        </Container>


    );
};

export default Products;