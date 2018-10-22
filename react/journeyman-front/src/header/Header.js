import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class Header extends Component {
	render() {
		return (<header className="App-header">
			<Button variant="contained" color="primary">
				Hello World
			</Button>
		</header>);
	}
}

export default Header;
