import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import {sendSlide4Data} from "../../../actions"

import Baseslide from "../baseslide.js";



class Proximity extends Component {
	constructor(props) {
    super(props)
	    this.state = {
	      	proximity: this.props.proximity,
	      	proximityMessage: ""
	    }
 	}

	handleChange = (proximity) => {
	    this.setState({
	      proximity: proximity
	    })

	    if (this.state.proximity === 0) {
	    	this.setState({
	    		proximityMessage: "Decision maker is external and has limited availability"
	    	})
	    }

	    if (this.state.proximity === 5) {
	    	this.setState({
	    		proximityMessage: "Decision maker is not part of the team - but readily available"
	    	})
	    }

	    if (this.state.proximity === 10) {
	    	this.setState({
	    		proximityMessage: "Decision maker is an integrated part of the team"
	    	})
	    }
  	}

  	handleNext = () => {
  		this.props.sendSlide4Data(this.state.proximity);
  		this.props.history.push("/bureaucracy");
  	}

  	handleBack = () => {
  		this.props.history.push("/competence");
  	}

	render() {
		return (
			<div>
				<Baseslide handleNext={this.handleNext} handleBack={this.handleBack}>
					<div className="slide-4">
						<div className="slide-box-main proximity">
							<div className="instructions">
								<h2>Proximity to decision maker</h2>
								<p>Rate how close the team's decision maker is to the team. Closeness refers to both the decision maker's physical proximity and how easy it is for him or her to interact with the team.</p>
							</div>
							<div className="slide-wrapper">
								<p className="slider-headline">Rate the proximity to decision maker</p>
								<Slider min={0} max={10} value={this.state.proximity} tooltip={false} orientation='horizontal' onChange={this.handleChange}/>
				            	<p className="slider-value">{this.state.proximity}</p>
				            	<p className="proximity-message">{this.state.proximityMessage}</p>
							</div>
						</div>
					</div>
				</Baseslide>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		teamMembers: state.teamMembers,
		proximity: state.proximity
	}
};

const mapDispatchToProps = {sendSlide4Data};

export default connect(mapStateToProps, mapDispatchToProps)(Proximity);
