import React from 'react';
import Typography from '@material-ui/core/Typography';

const style = {
    textAlign: 'left',
    fontSize: '2rem',
    marginBottom: '1rem'
}

class ItineraryTitle extends React.Component {
    render() {
        // TODO make this into an editable input field that executes http request upon modification
        return (
            <Typography variant='h1' color='primary' style={style}>
                Name your itinerary...
			</Typography>
        )
    }
}

export default ItineraryTitle;