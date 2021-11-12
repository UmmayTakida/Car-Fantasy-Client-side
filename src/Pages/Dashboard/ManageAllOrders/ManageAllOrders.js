import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Button from '@restart/ui/esm/Button';
import { useParams } from 'react-router';
import Button from '@restart/ui/esm/Button';
const ManageAllOrders = () => {
    const { id } = useParams();
    const [AllOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://floating-coast-75168.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    const handleUpdateStatus = e => {

        const updateStatus = e.target.value;
        const updateOrders = { status: updateStatus }
        setAllOrders(updateOrders)

    }

    const handleUpdateOrders = e => {
        // const updateStatus = e.target.value;
        // const updateOrders = { status: updateStatus }
        const url = `https://floating-coast-75168.herokuapp.com/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated successfully')
                    setAllOrders({})
                }
            })
        e.preventDefault();

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
                                    <Button onSubmit={handleUpdateOrders}> <input onChange={handleUpdateStatus} type="text" value={row.status} /></Button>
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




