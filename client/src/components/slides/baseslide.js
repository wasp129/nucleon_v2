import React, { Component } from 'react';
import Navbar from "../_common/navbar";
import Topmenu from "../_common/topmenu";
import bluedots from "../../assets/images/blue_dots.png";
import logo from "../../assets/images/logos/nucleon_logo_90deg.png";
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class Baseslide extends Component {
	constructor() {
		super()
	    this.state = {
	      loggedIn: false,
	      name: null
	    }
	}

	componentWillMount() {
    	this.getUser();
	}

	updateUser = (userObject) => {
		this.setState(userObject)
	}

	getUser = () => {
	    axios.get('/user/').then(response => {
	    	if (response.data.user) {
	        this.setState({
	          loggedIn: true,
	          name: response.data.user.name
	        })
	        if (window.location.pathname === "/") {
	        	this.props.history.push("/start");
	        }
	      } else {
	        this.setState({
	          loggedIn: false,
	          name: null
	        })
	        if (window.location.pathname !== "/" && window.location.pathname !== "/signup") {
	        	this.props.history.push("/");
	        }
	      }
	    })
  	}

	render() {
		const pathname = window.location.pathname;
		let navbar;
		let topmenu;

		if (pathname !== "/start" && pathname !== "/" && pathname !== "/signup" && pathname !== "/dashboard") {
			navbar = <Navbar handleNext={this.props.handleNext} handleBack={this.props.handleBack}/>
		}

		if (this.state.loggedIn) {
			topmenu = <Topmenu loggedIn={this.state.loggedIn} user={this.state.name} updateUser={this.updateUser} handleLogout={this.props.handleLogout}/>
		}

		return (
			<div className="wrapper">
				<img className="logo-fade" src={logo} alt="logo"/>
				<img className="blue-dots" src={bluedots} alt="blue dots"/>
				{this.props.children}
				{topmenu}
				{navbar}
			</div>
		);
	}
}

export default withRouter(Baseslide);