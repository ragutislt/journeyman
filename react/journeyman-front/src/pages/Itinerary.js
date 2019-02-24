import React from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import MapContainer from "./MapContainer";
import {fetch} from "../data/DataProvider";
import Layout from "../layout/Layout";

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
		const {objects, activeObject} = this.state;

		if (!objects) return <Layout pageName="Itinerary"/>;

		return (
			<Layout pageName="Itinerary">
				<div>
					<Grid container spacing={40} style={{minHeight: "90vh"}}>
						<Grid item={true} xs>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>Object</TableCell>
										<TableCell align={"right"}>Distance from previous</TableCell>
										<TableCell>Time needed</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{objects.map(row => {
										return (
											<TableRow key={row.id} selected={activeObject && row.id === activeObject.id}
											          onClick={(e) => this.changeInfo(e, row)}
											          style={{cursor: "pointer"}}>
												<TableCell component="th" scope="row">
													{row.title}
												</TableCell>
												<TableCell align={"right"}>{row.distance}</TableCell>
												<TableCell align={"right"}>{row.time}</TableCell>
											</TableRow>
										)
									})}
								</TableBody>
							</Table>
						</Grid>
						<Grid item={true} xs>
							{activeObject && activeObject.id ?
								(
									<Card>
										<CardActionArea>
											<CardMedia style={{height: 150}}
											           image={activeObject.image}
											           title={activeObject.title}
											/>
											<CardContent>
												<Typography gutterBottom variant="h5" component="h2" align={"left"}>
													{activeObject.title}
												</Typography>
												<Typography component="p" align={"left"}>
													{activeObject.description}
												</Typography>
											</CardContent>
										</CardActionArea>
										{/*<Divider variant={"middle"}/>*/}
										<CardActions>
											<Button size="small" color="primary" onClick={this.removeObject}>
												Remove
											</Button>
											<Link href={activeObject.url} target="_blank">
												<Button size="small" color="primary">
													Learn More
												</Button>
											</Link>
										</CardActions>
									</Card>
								) : <Typography component="p">
									Select an object from the table to see it's description
								</Typography>}
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
								<MapContainer points={objects}/>
							</div>
						</Grid>
					</Grid>
				</div>
			</Layout>
		);
	}
}

export default Itinerary;