import React, {Component} from 'react';
import Layout from "../layout/Layout";
import Grid from '@material-ui/core/Grid';

import MyItineraries from '../components/Itineraries/MyItineraries';

class Home extends Component {
	render() {
		return (
			<Layout>
				<Grid container>
					<Grid item lg={6}>
						<MyItineraries/>
					</Grid>
					<Grid item>
						
					</Grid>
				</Grid>
			</Layout>
		);
	}
}

export default Home;