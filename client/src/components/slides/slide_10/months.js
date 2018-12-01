import React, { Component } from 'react';
import { connect } from 'react-redux';

import {sendSlide10Data} from "../../../actions"

import MonthInput from "./monthinput"
import Baseslide from "../baseslide.js";

class MethodMonths extends Component {
	constructor(props) {
		super(props);
		this.state = {
			teamMembers: this.props.teamMembers
		}
	}

	handleNext = () => {
		// this.props.history.push("/")
		this.props.sendSlide10Data(this.state.teamMembers);
		console.log(this.props);
	}

	handleBack = () => {
		this.props.history.push("/method/qualityassurance")
	}

	handleMemberchange = (newMember) => {
		this.state.teamMembers.map(curr => {
			if (curr.id === newMember.id) {
				curr.months = newMember.months;
			}
			return curr;
		})
	}

	render() {
		return (
			<Baseslide handleNext={this.handleNext} handleBack={this.handleBack}>
				<div className="slide-10">
						<div className="slide-box-main months">
							<div className="instructions">
								<h2>Method - Experience</h2>
								<p>In this section we would like to assess the agility of the team as well as how long the individual members have worked together. In doing so, we can analyze both the extent to which the team benefits from agile development and how well the local practises are anchored.</p>
							</div>
							<div className="scroll-wrap scroll-months">
								<div className="scrollable">
									<p className="month-instructions">Input the number of months each member<br/>has been part of the team you are currently assessing</p>
									{this.state.teamMembers.map(member => 
										<MonthInput key={member.id} member={member} onMemberChange={this.handleMemberchange}/>
									)}
								</div>
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
		proximity: state.proximity,
		bureaucracy: state.bureaucracy,
		cultureQuestions: state.cultureQuestions,
		methods: state.methods,
		months: state.months,
	}
};

const mapDispatchToProps = {sendSlide10Data};

export default connect(mapStateToProps, mapDispatchToProps)(MethodMonths);
