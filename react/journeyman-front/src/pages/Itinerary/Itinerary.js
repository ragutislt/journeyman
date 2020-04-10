import React from 'react';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import MapContainer from "../MapContainer";
import { fetch } from "../../data/DataProvider";
import Layout from "../../layout/Layout";
import ObjectList from '../../components/Objects/ObjectList'
import { Paper } from '@material-ui/core';
import ItineraryTitle from './ItineraryTitle';
import ItineraryStats from './ItineraryStats';
import TransportType from './TransportType';
import Icon from '@material-ui/core/Icon';

class Itinerary extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			objects: null,
			activeObject: null
		};
	}

	componentDidMount() {
		fetch("objects.json", (data) => {
			this.setState({
				objects: data
			});
		})
	}

	changeInfo(e, visitObject) {
		this.setState({
			activeObject: visitObject
		});
	}

	removeObject = () => {
		this.setState({
			objects: this.state.objects.filter(obj => obj.id !== this.state.activeObject.id),
			activeObject: null
		})
	};

	render() {
		const { objects, activeObject } = this.state;

		if (!objects) return <Layout pageName="Itinerary" />;

		return (
			<Layout pageName="Itinerary">
				<ItineraryTitle/>
				<TransportType/>
				<div>
					<Grid container spacing={40} style={{ minHeight: "90vh" }}>
						<Grid item={true} xs>
							<Paper>
								<ObjectList objects={objects} />
							</Paper>
						</Grid>
						<Grid item={true} xs>
							<ItineraryStats/>
						</Grid>
					</Grid>
					<Grid spacing={40} container>
						<Grid container>
							<Grid item xs={12} lg={6}>
								<Typography variant={"button"}>Total distance:
									888km</Typography>
							</Grid>
							<Grid item xs={12} lg={6}>
								<Typography variant={"button"}>Time estimated:
									9 days</Typography>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<div style={{
								alignText: "center",
								width: "100%",
								minHeight: "70vh",
								position: "relative",
							}}>
								<MapContainer points={objects} />
							</div>
						</Grid>
					</Grid>
				</div>
			</Layout>
		);
	}
}

export default Itinerary;