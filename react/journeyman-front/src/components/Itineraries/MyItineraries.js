import React from 'react';

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

class MyItineraries extends React.Component {
    render() {
        return (
            <Grid container>
                <Typography variant="h6">
                    My Itineraries
             </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align={"right"}>Total Distance</TableCell>
                            <TableCell>Time estimated</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {objects.map(row => { */}
                        {/* // return ( */}
                        {/*  */}
                        <TableRow key={1}
                            // onClick={(e) => this.changeInfo(e, row)}
                            style={{ cursor: "pointer" }}>
                            <TableCell component="th" scope="row">
                                <Link to="/itinerary">Spain trip</Link>
                            </TableCell>
                            <TableCell align={"right"}>1000</TableCell>
                            <TableCell align={"right"}>7 days</TableCell>
                        </TableRow>
                        {/* </Link> */}
                        {/* ) */}
                        {/* })} */}
                    </TableBody>
                </Table>
            </Grid>
        )
    }
}

export default MyItineraries;