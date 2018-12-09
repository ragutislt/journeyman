import React, {Component} from 'react';
import {
	Route,
	HashRouter
} from "react-router-dom";
import Itinerary from './content/Itinerary';
import VisitObject from './content/VisitObject';
import './App.scss';
import Header from './header/Header';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<div className="App">
					<Header/>
					<div id="content" style={{maxWidth: 1440, padding: 25}}>
						{/*<Route path="/" component={}/>*/}
						<Route path={"/itinerary"} component={Itinerary}/>
						<Route path={"/object"} component={VisitObject}/>
					</div>
					{/*<Footer/>*/}
				</div>
			</HashRouter>
		);
	}
}

export default App;
