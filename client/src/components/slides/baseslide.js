import React, { Component } from 'react';
import bluedots from "../../assets/images/blue_dots.png";

class Baseslide extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="wrapper">
				<img className="blue-dots" src={bluedots}/>
				{this.props.children}
			</div>
		);
	}
}

export default Baseslide;