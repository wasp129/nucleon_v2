import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import {sendSlide12Data} from "../../../actions"

import Baseslide from "../baseslide.js";



class Architecture extends Component {
	constructor(props) {
    super(props)
	    this.state = {
	    	architecture: this.props.architecture
	    }
 	}

 	componentDidMount() {
 		if (this.state.architecture === 0) {
	    	this.setState({
	    		architectureMessage: "Not at all true"
	    	})
	    }

	    if (this.state.architecture === 5) {
	    	this.setState({
	    		architectureMessage: "Somewhat true"
	    	})
	    }

	    if (this.state.architecture === 10) {
	    	this.setState({
	    		architectureMessage: "Completely true"
	    	})
	    }
 	}

	handleChange = (architecture) => {
	    this.setState({
	      architecture: architecture
	    })

	    if (this.state.architecture === 0) {
	    	this.setState({
	    		architectureMessage: "Not at all true"
	    	})
	    }

	    if (this.state.architecture === 5) {
	    	this.setState({
	    		architectureMessage: "Somewhat true"
	    	})
	    }

	    if (this.state.architecture === 10) {
	    	this.setState({
	    		architectureMessage: "Completely true"
	    	})
	    }
  	}

  	handleNext = () => {
  		this.props.sendSlide12Data(this.state.architecture);
  		this.props.history.push("/reusability");
  	}

  	handleBack = () => {
  		this.props.history.push("/legacy");
  	}

	render() {
		return (
			<div>
				<Baseslide handleNext={this.handleNext} handleBack={this.handleBack}>
					<div className="slide-12">
						<div className="slide-box-main architecture">
							<div className="instructions">
								<h2>Architecture</h2>
								<p>Please evaluate to which extent the following is true in your organization.</p>
							</div>
							<div className="slide-wrapper">
								<p className="slider-headline">Developers have a good architecture of existing services via a Service Repository or the like.</p>
								<Slider min={0} max={10} value={this.state.architecture} tooltip={false} orientation='horizontal' onChange={this.handleChange}/>
				            	<p className="slider-value">{this.state.architecture}</p>
				            	<p className="architecture-message">{this.state.architectureMessage}</p>
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
		architecture: state.architecture
	}
};

const mapDispatchToProps = {sendSlide12Data};

export default connect(mapStateToProps, mapDispatchToProps)(Architecture);
