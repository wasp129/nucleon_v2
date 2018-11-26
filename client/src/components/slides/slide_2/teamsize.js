import React, { Component } from 'react';
import { connect } from 'react-redux';

import TeamMember from "../../_common/models/teammembers";

import {sendSlide2Data} from "../../../actions"

import Baseslide from "../baseslide.js";
import Memberinput from "./memberinput";

class Teamsize extends Component {
	constructor(props) {
		super(props);
		this.state = {
			teamMembers: this.props.teamMembers
		}
	}

	increaseMemberAmount = () => {
		if (this.state.teamMembers.length === 20) {
			return;
		} else {
			this.setState (prevState => ({
				teamMembers: [...prevState.teamMembers, new TeamMember ("", "Type name here")]
			}))
		}
	}

	decreaseMemberAmount = () => {
		if (this.state.teamMembers.length === 2) {
			return;
		} else {
			this.setState (prevState => ({
				teamMembers: prevState.teamMembers.slice(0, -1)
			}))
		}
	}

	handleMemberchange = (newMember) => {
		this.state.teamMembers.map(curr => {
			if (curr.id === newMember.id) {
				curr.name = newMember.name;
			}
			return curr;
		})
	}


	handleNext = () => {
		this.props.sendSlide2Data(this.state.teamMembers);
    	this.props.history.push("/competence");
	}

	handleBack = () => {
		this.props.history.push("/");
	}

	render() {
		return (
			<Baseslide handleNext={this.handleNext} handleBack={this.handleBack}>
				<div className="slide-2">
					<div className="slide-box-main team-members">
						<div className="instructions">
							<h2>Your team</h2>
							<p>In this section we would like to know the number of people in your team, to analyze the effect of team size on your Nucleon score. Enter the number of people in your team, and their names.</p>
						</div>
						<p className="team-number-text">Number of people in your team</p>
						<button className="decrease-members" onClick={this.decreaseMemberAmount}>-</button>
						<p className="team-number">{this.state.teamMembers.length}</p>
						<button className="increase-members" onClick={this.increaseMemberAmount}>+</button>
						<div className="scroll-wrap scroll-teamsize">
							<div className="scrollable">
								{this.state.teamMembers.map(teamMember =>
									<Memberinput key={teamMember.id} className="input-standard member-input" teammember={teamMember} onMemberChange={this.handleMemberchange}/>
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
		teamMembers: state.teamMembers
	}
};

const mapDispatchToProps = {sendSlide2Data};

export default connect(mapStateToProps, mapDispatchToProps)(Teamsize);