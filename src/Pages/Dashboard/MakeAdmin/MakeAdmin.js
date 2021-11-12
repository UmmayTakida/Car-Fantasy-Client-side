import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://floating-coast-75168.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);

                }

            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make An admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">make Admin</Button>

            </form>
            {success && <Alert severity="success">Made Admin Successfully</Alert>}

        </div>
    );
};

export default MakeAdmin;