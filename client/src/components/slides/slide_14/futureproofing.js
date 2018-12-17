import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import {sendSlide14Data} from "../../../actions"

import Baseslide from "../baseslide.js";



class Futureproofing extends Component {
	constructor(props) {
    super(props)
	    this.state = {
	    	futureproofing: this.props.futureProofing
	    }
 	}

 	componentDidMount() {
 		if (this.state.futureproofing === 0) {
	    	this.setState({
	    		futureproofingMessage: "Not at all true"
	    	})
	    }

	    if (this.state.futureproofing === 5) {
	    	this.setState({
	    		futureproofingMessage: "Somewhat true"
	    	})
	    }

	    if (this.state.futureproofing === 10) {
	    	this.setState({
	    		futureproofingMessage: "Completely true"
	    	})
	    }
 	}

	handleChange = (futureproofing) => {
	    this.setState({
	      futureproofing: futureproofing
	    })

	    if (this.state.futureproofing === 0) {
	    	this.setState({
	    		futureproofingMessage: "Not at all true"
	    	})
	    }

	    if (this.state.futureproofing === 5) {
	    	this.setState({
	    		futureproofingMessage: "Somewhat true"
	    	})
	    }

	    if (this.state.futureproofing === 10) {
	    	this.setState({
	    		futureproofingMessage: "Completely true"
	    	})
	    }
  	}

  	handleNext = () => {
  		this.props.sendSlide14Data(this.state.futureproofing);
  		this.props.history.push("/summary");
  	}

  	handleBack = () => {
  		this.props.history.push("/reusability");
  	}

	render() {
		return (
			<div>
				<Baseslide handleNext={this.handleNext} handleBack={this.handleBack}>
					<div className="slide-12">
						<div className="slide-box-main futureproofing">
							<div className="instructions">
								<h2>Architecture</h2>
								<p>Please evaluate to which extent the following is true in your organization.</p>
							</div>
							<div className="slide-wrapper">
								<p className="slider-headline">There is complete traceability between business processes, services, and data.</p>
								<Slider min={0} max={10} value={this.state.futureproofing} tooltip={false} orientation='horizontal' onChange={this.handleChange}/>
				            	<p className="slider-value">{this.state.futureproofing}</p>
				            	<p className="futureproofing-message">{this.state.futureproofingMessage}</p>
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
		reusability: state.reusability,
		futureProofing: state.futureProofing
	}
};

const mapDispatchToProps = {sendSlide14Data};

export default connect(mapStateToProps, mapDispatchToProps)(Futureproofing);
