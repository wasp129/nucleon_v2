import React, { Component } from 'react';
import Navbar from "../_common/navbar";
import bluedots from "../../assets/images/blue_dots.png";
import logo from "../../assets/images/logos/nucleon_logo_90deg.png";

import axios from 'axios';

class Baseslide extends Component {
	constructor() {
		super()
	    this.state = {
	      loggedIn: false,
	      email: null
	    }
	}

	componentDidMount() {
    	this.getUser()
	}

	updateUser (userObject) {
		this.setState(userObject)
	}

	getUser() {
	    axios.get('/user/').then(response => {
	      	console.log(response.data)
	    	if (response.data.user) {
	      	console.log('Get User: There is a user saved in the server session: ')
	        this.setState({
	          loggedIn: true,
	          email: response.data.user.email
	        })
	      } else {
	        console.log('Get user: no user');
	        this.setState({
	          loggedIn: false,
	          email: null
	        })
	      }
	    })
  	}

	render() {
		const pathname = window.location.pathname;
		let navbar;

		if (pathname !== "/") {
			navbar = <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} handleNext={this.props.handleNext} handleBack={this.props.handleBack}/>
		}

		if (this.state.loggedIn) {
			console.log("WELCOME" + this.state.email);
		}

		return (
			<div className="wrapper">
				<img className="logo-fade" src={logo} alt="logo"/>
				<img className="blue-dots" src={bluedots} alt="blue dots"/>
				{this.props.children}
				{navbar}
			</div>
		);
	}
}

export default Baseslide;