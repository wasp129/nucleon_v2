import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import {sendSlide13Data} from "../../../actions"

import Baseslide from "../baseslide.js";



class Reusability extends Component {
	constructor(props) {
    super(props)
	    this.state = {
	    	reusability: this.props.reusability
	    }
 	}

 	componentDidMount() {
 		if (this.state.reusability === 0) {
	    	this.setState({
	    		reusabilityMessage: "Not at all true"
	    	})
	    }

	    if (this.state.reusability === 5) {
	    	this.setState({
	    		reusabilityMessage: "Somewhat true"
	    	})
	    }

	    if (this.state.reusability === 10) {
	    	this.setState({
	    		reusabilityMessage: "Completely true"
	    	})
	    }
 	}

	handleChange = (reusability) => {
	    this.setState({
	      reusability: reusability
	    })

	    if (this.state.reusability === 0) {
	    	this.setState({
	    		reusabilityMessage: "Not at all true"
	    	})
	    }

	    if (this.state.reusability === 5) {
	    	this.setState({
	    		reusabilityMessage: "Somewhat true"
	    	})
	    }

	    if (this.state.reusability === 10) {
	    	this.setState({
	    		reusabilityMessage: "Completely true"
	    	})
	    }
  	}

  	handleNext = () => {
  		this.props.sendSlide13Data(this.state.reusability);
  		this.props.history.push("/futureproofing");
  	}

  	handleBack = () => {
  		this.props.history.push("/architecture");
  	}

	render() {
		return (
			<div>
				<Baseslide handleNext={this.handleNext} handleBack={this.handleBack}>
					<div className="slide-12">
						<div className="slide-box-main reusability">
							<div className="instructions">
								<h2>Architecture</h2>
								<p>Please evaluate to which extent the following is true in your organization.</p>
							</div>
							<div className="slide-wrapper">
								<p className="slider-headline">Developers know exactly how services are documented, versioned, and exhibited.</p>
								<Slider min={0} max={10} value={this.state.reusability} tooltip={false} orientation='horizontal' onChange={this.handleChange}/>
				            	<p className="slider-value">{this.state.reusability}</p>
				            	<p className="reusability-message">{this.state.reusabilityMessage}</p>
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
		name: state.name,
		teamMembers: state.teamMembers,
		proximity: state.proximity,
		bureaucracy: state.bureaucracy,
		cultureQuestions: state.cultureQuestions,
		methods: state.methods,
		months: state.months,
		legacy: state.legacy,
		architecture: state.architecture,
		reusability: state.reusability
	}
};

const mapDispatchToProps = {sendSlide13Data};

export default connect(mapStateToProps, mapDispatchToProps)(Reusability);
