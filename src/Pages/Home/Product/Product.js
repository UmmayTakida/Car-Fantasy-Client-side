import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
    const { _id, name, price, description, img } = product;

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h4>Price:{price}</h4>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {
                        <Link to={`/placeorder/${_id}`}><Button variant="contained" size="small" color="primary">
                            Buy Now
                        </Button></Link>
                    }
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;