import React from 'react';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

class TransportType extends React.Component {
    render() {
        return (
            <div style={{ height: '50px', justifyContent: 'left' }} className="centerElements">
                <Typography variant="subtitle1">
                    Transport:
                </Typography>
                <Icon color='primary'
                    style={{ display: 'inline-block', marginLeft: '15px' }}>
                    drive_eta
                </Icon>
                <Typography variant="body1" style={{marginLeft: '5px'}}>
                    Car
                </Typography>
            </div>
        )
    }
}

export default TransportType;