import React, { Component } from 'react';
import Baseslide from "../baseslide.js";

class Competence extends Component {

	handleNext = () => {
    	this.props.history.push("/page4");
	}

	handleBack = () => {
		this.props.history.push("/page2");
	}

	render() {
		return (
			<Baseslide handleNext={this.handleNext} handleBack={this.handleBack}>
				<div>
					<h2>Hello world!</h2>
				</div>
			</Baseslide>
		);
	}
}

export default Competence;
