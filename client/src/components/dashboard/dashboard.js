import React, { Component } from 'react';
import Baseslide from "../slides/baseslide";
import {withRouter} from 'react-router-dom';
import logo_primary_black from "../../assets/images/logos/nucleon_logo_primary_black.png";

class Dashboard extends Component {
	
	handleNext = () => {
		this.props.history.push("/start");
	}

	render() {
		return (
			<Baseslide>
				<div className="dashboard">
					<div className="menu-left">
						<div className="logo-box">
							<img className="logo" src={logo_primary_black} alt="Nucleon"/>
						</div>
						<div className="menu-items">
							<ul>
								<li>Your assessments</li>
								<li>Learn more</li>
							</ul>
							<ul className="menu-item-logout">
								<li>Log out</li>
							</ul>
						</div>
					</div>
					<div className="dashboard-content">
						<div>
							{this.props.children}
						</div>
						<div className="button-wrapper">
							<button onClick={this.handleNext} className="new-assessment-button">New assessment</button>
						</div>
					</div>
				</div>
			</Baseslide>
		);
	}
}

export default withRouter(Dashboard);
