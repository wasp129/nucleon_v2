import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
	render() {
		return (
			<div className="navbar">
				<button className="back-button" onClick={this.props.handleBack}>Back</button>
				<button className="next-button" onClick={this.props.handleNext}>Next</button>
			</div>
		);
	}
}

export default Navbar;