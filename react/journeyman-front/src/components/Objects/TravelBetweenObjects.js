import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';


const TravelBetweenObjects = props => {
    return (
        <div className="centerElements" style={{ marginLeft: '40px' }}>
            <ArrowDownwardIcon fontSize="large" />
            <Typography variant="body1" style={{ marginLeft: '38px' }}>4 hours by</Typography>
            <Icon color='primary'
                style={{ display: 'inline-block', marginLeft: '5px' }}>
                drive_eta
            </Icon>
        </div>
    )
}

export default TravelBetweenObjects;