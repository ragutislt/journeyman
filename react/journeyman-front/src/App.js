import React, { Component } from 'react';
import {
	Route,
	HashRouter
} from "react-router-dom";
import Itinerary from './pages/Itinerary';
import VisitObject from './pages/VisitObject';
import Home from './pages/Home';
import './App.scss';

import { Provider } from 'react-redux'
import store from './reduxConfig';

import { initItineraries } from './reducers';

class App extends Component {

	componentDidMount() {
		store.dispatch((initItineraries()));
	}

	render() {
		return (
			<Provider store={store}>
				<HashRouter>
					<div className="App">
						<Route path="/" exact component={Home} />
						<Route path={"/itinerary"} component={Itinerary} />
						<Route path={"/object"} component={VisitObject} />
					</div>
				</HashRouter>
			</Provider>
		);
	}
}

export default App;
