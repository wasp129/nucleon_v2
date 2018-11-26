import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import {sendSlide5Data} from "../../../actions"

import Baseslide from "../baseslide.js";

class Bureaucracy extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bureaucracy: this.props.bureaucracy
		}
	}

	handleChange = (bureaucracy) => {
	    this.setState({
	      bureaucracy: bureaucracy
	    })
  	}

  	handleNext = () => {
  		this.props.sendSlide5Data(this.state.bureaucracy);
  	}

  	handleBack = () => {
  		console.log(this.props);
  	}

	render() {
		return (
			<div>
				<Baseslide handleNext={this.handleNext} handleBack={this.handleBack}>
					<div className="slide-5">
						<div className="slide-box-main bureaucracy">
							<div className="instructions">
								<h2>Bureaucracy</h2>
								<p>In this section we would like you to estimate the amount of time spent on work not directly linked to 'production tasks', i.e. administrative tasks, reporting, internal meetings, etc.</p>
							</div>
							<div className="slide-wrapper">
								<p className="slider-headline">Select what percent of the team's time is spent on activities unrelated to strict performance?</p>
								<Slider min={0} max={100} value={this.state.bureaucracy} tooltip={false} orientation='horizontal' onChange={this.handleChange}/>
								<p className="slider-value">{this.state.bureaucracy + " %"}</p>
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
		proximity: state.proximity,
		bureaucracy: state.bureaucracy
	}
};

const mapDispatchToProps = {sendSlide5Data};

export default connect(mapStateToProps, mapDispatchToProps)(Bureaucracy);
