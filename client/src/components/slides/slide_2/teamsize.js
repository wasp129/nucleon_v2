import React, { Component } from 'react';
import Baseslide from "../baseslide.js";

class Teamsize extends Component {

	handleNext = () => {
    	this.props.history.push("/page3");
	}

	handleBack = () => {
		this.props.history.push("/");
	}

	render() {
		return (
			<Baseslide handleNext={this.handleNext} handleBack={this.handleBack}>
				<div className="slide-2">
					<h2>Hello world!</h2>
				</div>
			</Baseslide>
		);
	}
}

export default Teamsize;