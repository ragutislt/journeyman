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


class Itinerary extends React.Component {
	render() {
		return (
			<div>
				<Typography variant={"h1"} style={{fontSize: "3rem", marginBottom: "1em"}}>Itinerary</Typography>
				<Grid container spacing={40}>
					<Grid item={true} xs>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Object</TableCell>
									<TableCell numeric>Distance from previous</TableCell>
									<TableCell>Time needed</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow key={1}>
									<TableCell component="th" scope="row">
										Mini Holywood
									</TableCell>
									<TableCell numeric>70</TableCell>
									<TableCell numeric>4 hours</TableCell>
								</TableRow>
								<TableRow key={2}>
									<TableCell component="th" scope="row">
										Valencia
									</TableCell>
									<TableCell numeric>240</TableCell>
									<TableCell numeric>5 days</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</Grid>
					<Grid item={true} xs>
						<Card>
							<CardActionArea>
								<CardMedia style={{height: 150}}
									image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Town_square_in_Mini_Hollywood.jpg/1920px-Town_square_in_Mini_Hollywood.jpg"
									title="Mini Hollywood"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2" align={"left"}>
										Mini Hollywood
									</Typography>
									<Typography component="p" align={"left"}>
										In Tabernas, the only desert in Europe, are the authentic westerns scenarios, turned into the most original Mediterranean Theme Park with Live Shows, a huge Zoological Reserve with more than 800 animals of 200 different species, Pool Areas and a large range of Restaurants, Educational Activities and Events and Celebrations management

										In our Theme Park located in Almería (Spain) you can enjoy guided tours and workshops for children. Make your entry or our annual subscription.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									Remove
								</Button>
								<Button size="small" color="primary">
									Learn More
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Itinerary;