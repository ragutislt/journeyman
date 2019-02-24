import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";

class Layout extends React.Component {
	render() {
		return (
			<div>
				<Header pageName={this.props.pageName}/>
				<div id="content" style={{maxWidth: "100vw", padding: 25}}>
					{this.props.children}
				</div>
				<Footer/>

			</div>
		);
	}
};

export default Layout;