import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const ConfirmModal = ({ displayProduct, openOrderConfirm, handleOrderConfirmClose }) => {
    const { name, price } = displayProduct;
    const { user } = useAuth();
    const initialInfo = { CustomerName: user.displayName, email: user.email, phone: '', status: 'pending' }
    const [confirmOrdergInfo, setConfirmOrderInfo] = useState(initialInfo);
    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...confirmOrdergInfo }
        newInfo[field] = value;
        // console.log(newInfo)
        setConfirmOrderInfo(newInfo)
    }
    const handleOrderSubmit = e => {
        // collect the data 
        const myOrder = {
            ...confirmOrdergInfo,
            price,

            ProductName: name,


        }
        console.log(myOrder)
        fetch('https://floating-coast-75168.herokuapp.com/myOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // setBookingSuccess(true)

                    handleOrderConfirmClose();
                }
                console.log(data)
            })

        e.preventDefault()

    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openOrderConfirm}
            onClose={handleOrderConfirmClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openOrderConfirm}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h5" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleOrderSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 2 }}
                            id="outlined-size-small"
                            defaultValue={price}
                            size="small"
                        />

                        <TextField

                            sx={{ width: '90%', m: 2 }}
                            id="outlined-size-small"
                            name="CustomertName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />

                        <TextField
                            sx={{ width: '90%', m: 2 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 2 }}
                            id="outlined-size-small"
                            name='phone'
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 2 }}
                            id="outlined-size-small"
                            name='Status'
                            onBlur={handleOnBlur}
                            defaultValue="Pending"
                            size="small"
                        />


                        <Button type="submit" variant="contained">Submit</Button>




                    </form>



                </Box>
            </Fade>
        </Modal>

    );
};

export default ConfirmModal;