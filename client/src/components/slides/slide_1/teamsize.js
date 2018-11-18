import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo_main from "../../../assets/images/logos/nucleon_logo_primary.png"
import Baseslide from "../baseslide.js";

class Teamsize extends Component {
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
							<Link className="start-button" to='/page2'>Start</Link>
						</div>
					</div>
				</Baseslide>	
			</div>

		);
	}
}

export default Teamsize;