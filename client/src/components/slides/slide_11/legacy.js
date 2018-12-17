import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import {sendSlide11Data} from "../../../actions"

import { RadioGroup, RadioButton } from 'react-radio-buttons';

import Baseslide from "../baseslide.js";

class Legacy extends Component {
	constructor(props) {
		super(props);
		this.state = {
			legacy: {},
			historicReasons: this.props.legacy.historicReasons,
			effort: this.props.legacy.effort,
			graveyard: this.props.legacy.graveyard
		}
	}

	static getDerivedStateFromProps(nextProps) {
        return {
            legacy: nextProps.legacy
        }
    }

	handleHistoricChange = (historicReasons) => {
	    this.setState({
	      historicReasons: historicReasons
	    })
	    this.props.sendSlide11Data({ ...this.state.legacy, historicReasons: historicReasons });
  	}

  	handleEffortChange = (effort) => {
  		this.setState({
  			effort: effort
  		})
  		this.props.sendSlide11Data({ ...this.state.legacy, effort: effort });
  	}

  	handleSelect = (value) => {
  		this.setState({
  			graveyard: value
  		})
  		this.props.sendSlide11Data({ ...this.state.legacy, graveyard: value });
  	}

	handleNext = () => {
		this.props.history.push("/architecture")
	}

	handleBack = () => {
		this.props.history.push("/method/months")
	}

	render() {
		return (
			<Baseslide handleNext={this.handleNext} handleBack={this.handleBack}>
				<div className="slide-11">
					<div className="slide-box-main legacy">
						<div className="instructions">
							<h2>Legacy</h2>
							<p>In your opinion, what share of your team's systems are state of the art, and have strategic value for the businesses future development?</p>
						</div>
						<div className="slide-wrapper">
							<p className="slider-headline">1) Select the percent share of your team's application landscape that is kept "alive" for historical reasons.</p>
							<Slider min={0} max={100} value={this.state.historicReasons} tooltip={false} orientation='horizontal' onChange={this.handleHistoricChange}/>
							<p className="slider-value">{this.state.historicReasons + " %"}</p>

							<p className="slider-headline">2) Select the percent share of your team's time/effort allocated to supporting non-strategic systems.</p>
							<Slider min={0} max={100} value={this.state.effort} tooltip={false} orientation='horizontal' onChange={this.handleEffortChange}/>
							<p className="slider-value">{this.state.effort + " %"}</p>
						</div>
						<div className="radio-group">
							<p className="radio-group-statement">3) Does your company have a specific team that converts legacy to the "graveyard" (e.g. kills or renews old systems)?</p>
							<RadioGroup onChange={this.handleSelect} horizontal>
								<RadioButton pointColor="#5c85f1" value="1">
									Yes
								</RadioButton>
								<RadioButton pointColor="#5c85f1" value="2">
									No
								</RadioButton>
							</RadioGroup>
						</div>
					</div>	
				</div>
			</Baseslide>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		teamMembers: state.teamMembers,
		name: state.name,
		proximity: state.proximity,
		bureaucracy: state.bureaucracy,
		cultureQuestions: state.cultureQuestions,
		methods: state.methods,
		months: state.months,
		legacy: state.legacy
	}
};

const mapDispatchToProps = {sendSlide11Data};

export default connect(mapStateToProps, mapDispatchToProps)(Legacy);
