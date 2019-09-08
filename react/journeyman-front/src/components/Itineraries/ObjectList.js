import React from 'react';

import './Itineraries.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';


class ObjectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeObject: {}
        }
    }

    changeInfo(e, visitObject) {
        this.setState({
            activeObject: visitObject
        });
    }

    render() {
        const { objects } = this.props;
        const { activeObject } = this.state;

        return (
            <List>
                {objects.map(row =>
                    <React.Fragment>
                        <ListItem alignItems="flex-start" className='itineraries-list'>
                            <ListItemAvatar>
                                <Avatar src={row.image} classes={{ root: 'item-image' }}>
                                    {/* <Icon color='primary'>location_city</Icon> */}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={row.title}
                                secondary={
                                    <React.Fragment>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <Icon color='primary' style={{ display: 'inline-block' }}>access_time</Icon>
                                            <Typography component="span" color="textPrimary" style={{ display: 'inline-block', margin: '2px 0 0 10px' }}>
                                                {row.time}
                                            </Typography>
                                        </div>
                                        {row.description.substr(0, 200) + '...'}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                )}
            </List>


            // <Table>
            //     <TableHead>
            //         <TableRow>
            //             <TableCell>Object</TableCell>
            //             <TableCell align={"right"}>Distance from previous</TableCell>
            //             <TableCell>Time needed</TableCell>
            //         </TableRow>
            //     </TableHead>
            //     <TableBody>
            //         {objects.map(row => {
            //             return (
            //                 <TableRow key={row.id} selected={activeObject && row.id === activeObject.id}
            //                     onClick={(e) => this.changeInfo(e, row)}
            //                     style={{ cursor: "pointer" }}>
            //                     <TableCell component="th" scope="row">
            //                         {row.title}
            //                     </TableCell>
            //                     <TableCell align={"right"}>{row.distance}</TableCell>
            //                     <TableCell align={"right"}>{row.time}</TableCell>
            //                 </TableRow>
            //             )
            //         })}
            //     </TableBody>
            // </Table>
        )
    }
}

export default ObjectList