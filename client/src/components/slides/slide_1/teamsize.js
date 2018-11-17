import React, { Component } from 'react';
import logo_main from "../../../assets/images/logos/nucleon_logo_primary.png"
import Baseslide from "../baseslide.js";

class Teamsize extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="slide-1">
				<Baseslide>
					<div className="container">
						<div className="welcome-message">
							<div className="logo">
								<img className="logo_main" src={logo_main} alt="logo"/>
							</div>
							<div className="welcome-text">
								<p>The Nucleon formula measures the effectiveness of any IT organization in three broad areas.</p>
								<p className="highlight">People, Organization and Complexity.</p>
							</div>
							<a className="start-button" href="#">Start</a>
						</div>
					</div>
				</Baseslide>	
			</div>

		);
	}
}

export default Teamsize;