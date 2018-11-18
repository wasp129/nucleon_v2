import React, { Component } from 'react';
import Navbar from "../_common/navbar";
import bluedots from "../../assets/images/blue_dots.png";

class Baseslide extends Component {
	render() {
		const pathname = window.location.pathname;
		let navbar;

		if (pathname !== "/") {
			navbar = <Navbar handleNext={this.props.handleNext} handleBack={this.props.handleBack}/>
		}

		return (
			<div className="wrapper">
				<img className="blue-dots" src={bluedots} alt="blue dots"/>
				{this.props.children}
				{navbar}
			</div>
		);
	}
}

export default Baseslide;