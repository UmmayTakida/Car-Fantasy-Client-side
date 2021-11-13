import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CircularProgress } from '@mui/material';
import Button from '@mui/material/Button';
const MyOrders = () => {
    const { user, isLoading } = useAuth();



    const [orders, setorders] = useState([]);
    useEffect(() => {

        const url = `https://floating-coast-75168.herokuapp.com/myOrders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setorders(data));
    }, [user.email])
    const handleDeleteOrder = id => {
        const proceed = window.confirm('are u sure ,you want to delete')
        if (proceed) {
            const url = `https://floating-coast-75168.herokuapp.com/allOrders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingOrders = orders.filter(order => order._id !== id)
                        setorders(remainingOrders)
                    }
                    console.log(data)
                })
        }
    }

    if (isLoading) {
        return <CircularProgress />
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.CustomerName}
                                </TableCell>
                                <TableCell align="right">{row.ProductName
                                }</TableCell>
                                <TableCell align="right">{row.price

                                }</TableCell>
                                <TableCell align="right">{row.Phone}</TableCell>
                                <TableCell align="right"><Button onClick={() => handleDeleteOrder(row._id)}>Cancel Order</Button></TableCell>



                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>



        </div>
    );
};

export default MyOrders;