import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const ManageProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://floating-coast-75168.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    const handleDeleteProduct = id => {
        const proceed = window.confirm('are u sure ,you want to delete')
        if (proceed) {
            const url = `https://floating-coast-75168.herokuapp.com/products/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingProducts = allProducts.filter(order => order._id !== id)
                        setAllProducts(remainingProducts)
                    }
                    console.log(data)
                })
        }
    }
    return (
        <Container>
            <Grid container spacing={2} >

                {
                    allProducts.map(product =>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={product.img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.description}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <h4>Price:{product.price}</h4>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>

                                    <Button onClick={() => handleDeleteProduct(product._id)} variant="contained" size="small" color="primary">
                                        Delete Poduct
                                    </Button>

                                </CardActions>
                            </Card>

                        </Grid>
                    )
                }

            </Grid>
        </Container>

    );
};

export default ManageProducts;