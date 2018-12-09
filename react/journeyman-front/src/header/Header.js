import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";
import AppName from './AppName';

const pageNameStyle = {
	fontSize: "1.5rem",
	color: "inherit",
	textAlign: "left"
};

class Header extends Component {
	render() {
		return (
			<AppBar position="static">
				<Toolbar>
					<IconButton color="inherit" aria-label="Menu">
						<MenuIcon/>
					</IconButton>
					<AppName color="inherit">
						<NavLink to="/" style={{color:"inherit"}}>Journeyman</NavLink>
					</AppName>
					<Icon>arrow_forward_ios</Icon>
					<Typography variant={"body1"} style={{...pageNameStyle, flexGrow: 1, marginLeft: 15}}>
						Page name
					</Typography>
					<Button color="inherit"><NavLink to="/itinerary" style={{color:"inherit"}}>Itinerary</NavLink></Button>
					<Button color="inherit">Build your trip</Button>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		)
	}
}

export default Header;
