import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const ItineraryStats = props => {
    return (
        <div>
            Here are some stats for you:
            <Typography variant='body1'>Total distance - 888km</Typography>
            <Typography variant='body1'>Estimated time of trip - 9 days</Typography>
        </div>
    )
}

export default ItineraryStats;