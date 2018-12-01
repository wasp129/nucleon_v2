import React, { Component } from 'react';
import { connect } from 'react-redux';

import {sendSlide3Data} from "../../../actions";

import Baseslide from "../baseslide.js";
import CompetenceInput from "./competenceInput";


class Competence extends Component {
	constructor(props) {
		super(props);
		this.state = {
			teamMembers: this.props.teamMembers
		}
		console.log(this.props.teamMembers)
	}

	handleNext = () => {
		this.props.sendSlide3Data(this.state.teamMembers);
    	this.props.history.push("/proximity");
	}

	handleBack = () => {
		this.props.history.push("/teamsize");
	}

	handleMemberchange = (newMember) => {
		this.state.teamMembers.map(curr => {
			if (curr.id === newMember.id) {
				curr.competence = newMember.competence;
				curr.salary = newMember.salary;
			}
			return curr;
		})
	}

	render() {
		return (
			<Baseslide handleNext={this.handleNext} handleBack={this.handleBack}>
				<div className="slide-3">
						<div className="slide-box-main competence">
							<div className="instructions">
								<h2>Current competence level</h2>
								<p>Assessing the overall competence level of people is difficult. Nevertheless, we would like you to indicate your gut-feeling of each team member’s overall competence level.</p>
							</div>
							<div className="scroll-wrap scroll-competence">
								<div className="scrollable">
									{this.state.teamMembers.map(member => 
										<CompetenceInput key={member.id} member={member} onMemberChange={this.handleMemberchange}/>
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

const mapDispatchToProps = {sendSlide3Data};

export default connect(mapStateToProps, mapDispatchToProps)(Competence);
