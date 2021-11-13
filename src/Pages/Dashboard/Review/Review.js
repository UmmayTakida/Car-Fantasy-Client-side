import React, { useState } from 'react';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import useAuth from '../../../hooks/useAuth';






const Review = () => {
    const [opinion, setOpinion] = useState('')
    const [rating, setRating] = useState('')
    const { user } = useAuth();


    const handleText = (e) => {
        setOpinion(e.target.value)


    }

    const handleRating = (e) => {
        setRating(e.target.value)
    }

    const handleReview = (e) => {
        const review = { name: user.displayName, email: user.email, des: opinion, rate: rating }
        fetch('https://floating-coast-75168.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
            })



        e.preventDefault();
    }

    return (
        <div >
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <form onSubmit={handleReview}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Give Your FeedBack
                        </Typography>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Name:  {user.displayName}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Email:{user.email}
                        </Typography>
                        <TextField
                            onBlur={handleText}
                            sx={{ width: '100%', m: 1 }}
                            required
                            type='text'
                            id="standard-basic"
                            label="your opinion"
                            variant="standard"

                        /> <br />
                        <TextField
                            onBlur={handleRating}
                            sx={{ width: '100%', m: 1 }}
                            required
                            type='number'
                            id="standard-basic"
                            label="Give rating within 1 to 5"
                            variant="standard"

                        /> <br />
                        <Button type='submit'>place review</Button>

                    </form>

                </Grid>

            </Grid>



        </div>
    );
};

export default Review;






