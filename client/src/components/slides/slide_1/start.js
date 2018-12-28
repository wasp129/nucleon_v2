import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo_main from "../../../assets/images/logos/nucleon_logo_primary.png"
import {sendSlide1Data} from "../../../actions";
import Baseslide from "../baseslide.js";

class Start extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
		}
	}

	componentDidMount() {
		this.Input.focus();
	}

	handleStartClick = () => {
		this.props.sendSlide1Data(this.state.name);
    	this.props.history.push("/teamsize");
	}

	handleNamechange = (e) => {
		this.setState({
			name: e.target.value
		})
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
								<p>Before we start, please give your assessment a name.</p>
							</div>
							<input ref={(input) => { this.Input = input; }} onChange={this.handleNamechange} className="input-standard name-input"></input>
							<button className="start-button" onClick={this.handleStartClick}>Start</button>
						</div>
					</div>
				</Baseslide>	
			</div>

		);
	}
}

const mapStateToProps = (state) => {
	return {
		name: state.name
	}
};

const mapDispatchToProps = {sendSlide1Data};

export default connect(mapStateToProps, mapDispatchToProps)(Start);