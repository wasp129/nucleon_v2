import React, { Component } from 'react';
import Baseslide from "../slides/baseslide";
import logo_primary_black from "../../assets/images/logos/nucleon_logo_primary_black.png";

class Dashboard extends Component {
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
								<li>Your teams</li>
								<li>Profile</li>
								<li>Learn more</li>
							</ul>
							<ul className="menu-item-logout">
								<li>Log out</li>
							</ul>
						</div>
					</div>
					<div className="dashboard-content">
						{this.props.children}
					</div>
				</div>
			</Baseslide>
		);
	}
}

export default Dashboard;
