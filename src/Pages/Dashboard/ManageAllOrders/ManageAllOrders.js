import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
const ManageAllOrders = () => {

    const [AllOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://floating-coast-75168.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    const handleDeleteOrders = id => {
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
                        const remainingOrders = AllOrders.filter(order => order._id !== id)
                        setAllOrders(remainingOrders)
                    }
                    console.log(data)
                })
        }
    }



    return (
        <div>
            <h3>See All Orders</h3>


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
                        {AllOrders.map((row) => (
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
                                <TableCell align="right">
                                    {row.status}

                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => handleDeleteOrders(row._id)} variant="contained" size="small" color="primary">Delete Order</Button>

                                </TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>







        </div >
    );
};

export default ManageAllOrders;




