import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container } from '@mui/material';
import ConfirmModal from '../ConfrimModal/ConfirmModal';
// import { Link } from 'react-router-dom';

const PlaceOrder = () => {
    const [displayProduct, setDisplayProduct] = useState([]);
    const [openOrderConfirm, setOpenOrderConfirm] = useState(false);
    const handleOrderConfirmOpen = () => setOpenOrderConfirm(true);
    const handleOrderConfirmClose = () => setOpenOrderConfirm(false);

    const { id } = useParams();
    useEffect(() => {
        const url = `https://floating-coast-75168.herokuapp.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDisplayProduct(data))
    }, [])
    return (
        <Container >

            <Grid item xs={12}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={displayProduct?.img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {displayProduct?.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {displayProduct?.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <h4>Price:{displayProduct?.price}</h4>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>

                        <Button onClick={handleOrderConfirmOpen} variant="contained" size="small" color="primary">
                            confirm For Order
                        </Button>

                    </CardActions>
                </Card>
            </Grid>

            <ConfirmModal
                displayProduct={displayProduct}
                openOrderConfirm={openOrderConfirm}
                handleOrderConfirmClose={handleOrderConfirmClose}

            ></ConfirmModal>
        </Container>
    );
};

export default PlaceOrder;