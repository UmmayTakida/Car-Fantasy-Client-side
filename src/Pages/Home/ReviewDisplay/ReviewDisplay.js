import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const ReviewDisplay = () => {
    const [value, setValue] = React.useState();
    const [review, setReview] = useState([])
    useEffect(() => {

        fetch('https://floating-coast-75168.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))

    }, [])

    console.log(review)


    return (
        <>
            <Typography sx={{ color: 'blue', m: 2 }} variant="h4" gutterBottom component="div">
                Reviews From Our Precious Client
            </Typography>
            <Grid container spacing={2}>
                {
                    review.map(singleReview =>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3}>
                                <Typography variant="h5" gutterBottom component="div">
                                    Name: {singleReview.name}
                                </Typography>
                                <Typography variant="h5" gutterBottom component="div">
                                    Email: {singleReview.email}
                                </Typography>
                                <Typography variant="h5" gutterBottom component="div">
                                    Feedback:  {singleReview.des}
                                </Typography>
                                <Typography variant="h5" gutterBottom component="div">
                                    Rating: {singleReview.rate}/5
                                </Typography>
                                <Typography component="legend">Rating </Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />

                            </Paper>

                        </Grid>
                    )
                }

            </Grid>
        </>
    );
};

export default ReviewDisplay;