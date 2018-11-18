import React, { Component } from 'react';
import bluedots from "../../assets/images/blue_dots.png";

class Baseslide extends Component {
	render() {
		return (
			<div className="wrapper">
				<img className="blue-dots" src={bluedots} alt="blue dots"/>
				{this.props.children}
			</div>
		);
	}
}

export default Baseslide;