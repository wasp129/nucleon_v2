import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RadioGroup, RadioButton } from 'react-radio-buttons';

import {sendSlide7Data} from "../../../actions"

import Baseslide from "../baseslide.js";


class MethodUserInvovlement extends Component {
	constructor(props) {
		super(props)

		this.state = {
			methodStatements: this.props.methods
		}
	}

  	handleNext = () => {
  		this.props.sendSlide7Data(this.state.methodStatements);
  		this.props.history.push("/method/releaseprocess");
  	}

  	handleBack = () => {
  		this.props.history.push("/culture");
  	}

  	handleSelect = (value, questionId) => {
        this.state.methodStatements.map(item => {
            if (item.id === questionId) {
                item.answer = value;
            }
            return item;
        });
    }

	render() {
		return (
			<div>
				<Baseslide handleNext={this.handleNext} handleBack={this.handleBack}>
					<div className="slide-7">
						<div className="slide-box-main method">
							<div className="instructions">
								<h2>Method - User involvement</h2>
								<p>In this section we would like to assess the agility of your team on a scale from 1-5. In doing so, we can estimate the extent to which the team benefits from agile development. For each of the categories below, please select the statement most applicable for your team.</p>
							</div>
							<div>
								<div className="radio-group">
									<p className="radio-group-statement"></p>
									<RadioGroup onChange={value => this.handleSelect(value, this.state.methodStatements[0].id)} vertical="true">
										<RadioButton pointColor="#5c85f1" value="1">
											1) Requirements are handed over as formal requirement specifications from someone outside the team.
										</RadioButton>
										<RadioButton pointColor="#5c85f1" value="2">
											2) Requirements are continuously prioritized in a steering committee or similar overseer.
										</RadioButton>
										<RadioButton pointColor="#5c85f1" value="3">
											3) Team has a dedicated product owner proxy.
										</RadioButton>
										<RadioButton pointColor="#5c85f1" value="4">
											4) Team has a dedicated product owner with extensive user/business understanding.
										</RadioButton>
										<RadioButton pointColor="#5c85f1" value="5">
											5) Team and product owner get direct and continuous feedback from users on features via AB-testing or other measurable uses/feedback.
										</RadioButton>
									</RadioGroup>
								</div>
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
		bureaucracy: state.bureaucracy,
		cultureQuestions: state.cultureQuestions,
		methods: state.methods
	}
};

const mapDispatchToProps = {sendSlide7Data};

export default connect(mapStateToProps, mapDispatchToProps)(MethodUserInvovlement);
