import React from 'react';

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

import { Itinerary } from '../../objects';
import Loading from '../Loading';

import { connect } from "react-redux";

class MyItineraries extends React.Component {
    render() {
        const { myItineraries } = this.props;
        if (!myItineraries) {
            return <Loading />;
        }

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
                        {myItineraries.map(row => {
                            return (
                                <TableRow key={1}
                                    // onClick={(e) => this.changeInfo(e, row)}
                                    style={{ cursor: "pointer" }}>
                                    <TableCell component="th" scope="row">
                                        <Link to={"/itinerary/" + row.id}>{row.title}</Link>
                                    </TableCell>
                                    <TableCell align={"right"}>{row.totalDistance}</TableCell>
                                    <TableCell align={"right"}>{row.duration}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        myItineraries: state.itineraries.myItineraries ? state.itineraries.myItineraries.map(i => Object.assign(new Itinerary(), i)) : []
    };
};

export default connect(mapStateToProps)(MyItineraries);