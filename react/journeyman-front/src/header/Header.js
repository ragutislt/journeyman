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
import Drawer from "@material-ui/core/Drawer/Drawer";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ContactSupport from '@material-ui/icons/ContactSupport';

const pageNameStyle = {
	fontSize: "1.5rem",
	color: "inherit",
	textAlign: "left"
};

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			drawerActive: false
		}
	}

	toggleDrawer = () => {
		this.setState({
			drawerActive: !this.state.drawerActive
		})
	};

	render() {
		const {pageName} = this.props;

		const sideList = (
			<div>
				<List>
					<ListItem button key="profile">
						<ListItemIcon>
							<AccountCircle/>
						</ListItemIcon>
						<ListItemText primary={"My Profile"}/>
					</ListItem>
				</List>
				<Divider/>
				<List>
					<ListItem button key="contact">
						<ListItemIcon>
							<ContactSupport/>
						</ListItemIcon>
						<ListItemText primary={"Contact us"}/>
					</ListItem>
				</List>
			</div>
		);

		return (
			<div>
				<AppBar position="static">
					<Toolbar>
						<IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
							<MenuIcon/>
						</IconButton>
						<AppName color="inherit">
							<NavLink to="/" style={{color: "inherit"}}>Journeyman</NavLink>
						</AppName>
						{pageName ? (
								<div style={{flexGrow: 1, marginLeft: 15, textAlign: "left"}}>
									<Icon style={{
										display: "inline-block",
										verticalAlign: "middle"
									}}>arrow_forward_ios</Icon>
									<Typography variant={"body1"}
									            style={{
										            ...pageNameStyle,
										            display: "inline-block",
										            verticalAlign: "middle"
									            }}>
										{pageName}
									</Typography>
								</div>
							)
							: <div style={{flexGrow: 1}}/>}
						<Button color="inherit"><NavLink to="/itinerary"
						                                 style={{color: "inherit"}}>Itinerary</NavLink></Button>
						<Button color="inherit">Build your trip</Button>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>


				<Drawer anchor="left" open={this.state.drawerActive} onClose={this.toggleDrawer}>
					<div
						tabIndex={0}
						role="button"
						onClick={this.toggleDrawer}
						onKeyDown={this.toggleDrawer}
					>
						{sideList}
					</div>
				</Drawer>
			</div>
		)
	}
}

export default Header;
