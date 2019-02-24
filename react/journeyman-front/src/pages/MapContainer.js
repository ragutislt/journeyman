import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polyline, google} from 'google-maps-react';
import {getCenterFromCoordinates} from "../utils/Position";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";

class MapContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			center: {},
			activeMarker: {},
			showInfoWindow: false
		};
	}

	componentDidUpdate(prevProps, prevState) {
		/*if (this.state.center === prevState.center) {
			const geocoder = new this.props.google.maps.Geocoder();

			let center = {};

			geocoder.geocode({'address': "Spain"}, (results, status) => {
				center = {
					lat: results[0].geometry.location.lat(),
					lng: results[0].geometry.location.lng()
				};
				this.setState({
					center: center
				});
			});
		}*/
	}

	onMarkerClick = (props, marker) => {
		this.setState({
			activeMarker: marker,
			showInfoWindow: true
		});
	};

	render() {
		const {points} = this.props;

		const center = getCenterFromCoordinates(points.map(p => p.coordinates));

		return (
			center.lat && center.lng ?
				<Map
					google={this.props.google}
					initialCenter={center}
					zoom={6}
					style={{
						width: "95.5vw",
						height: "70vh",
						left: "50%",
						top: "50%",
						transform: "translate(-50%,-50%)"
					}}>
					{points.map(object => {
						return (
							<Marker
								key={object.id}
								title={object.title}
								name={object.title}
								position={object.coordinates}
								onClick={this.onMarkerClick}
							/>
						)
					})}

					<Polyline
						path={points.map(p => p.coordinates)}
						strokeColor="#0000FF"
						strokeOpacity={0.8}
						strokeWeight={2} />

					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showInfoWindow}>
						<Paper>
							<Typography
								variant='headline'
								component='h4'>
								{this.state.activeMarker.title}
							</Typography>
						</Paper>
					</InfoWindow>
				</Map>
				: <p>Loading...</p>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyApFIzdthXjm-G51oNYQmfrThmEaghwV-4"
})(MapContainer)