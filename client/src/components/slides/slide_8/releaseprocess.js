import React, { Component } from 'react';
import { connect } from 'react-redux';

import {sendSlide8Data} from "../../../actions"

import { RadioGroup, RadioButton } from 'react-radio-buttons';

import Baseslide from "../baseslide.js";


class MethodReleaseProcess extends Component {
	constructor(props) {
		super(props)

		this.state = {
			methodStatements: this.props.methods
		}
	}

	componentDidMount() {
		console.log(this.props);
	}

  	handleNext = () => {
  		this.props.sendSlide8Data(this.state.methodStatements);
  		this.props.history.push("/method/qualityassurance");
  	}

  	handleBack = () => {
  		this.props.history.push("/method/userinvolvement");
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
								<h2>Method - Release process</h2>
								<p>In this section we would like to assess the agility of your team on a scale from 1-5. In doing so, we can estimate the extent to which the team benefits from agile development. For each of the categories below, please select the statement most applicable for your team.</p>
							</div>
							<div>
								<div className="radio-group">
									<p className="radio-group-statement"></p>
									<RadioGroup onChange={value => this.handleSelect(value, this.state.methodStatements[1].id)} vertical="true">
										<RadioButton pointColor="#5c85f1" value="1">
											1) Team has no release process.
										</RadioButton>
										<RadioButton pointColor="#5c85f1" value="2">
											2) Team is delivering at the end of a project.
										</RadioButton>
										<RadioButton pointColor="#5c85f1" value="3">
											3) Team has incremental releases internally and involves users sporadically.
										</RadioButton>
										<RadioButton pointColor="#5c85f1" value="4">
											4) Team delivers batches of functionality to the users in cycles e.g. monthly.
										</RadioButton>
										<RadioButton pointColor="#5c85f1" value="5">
											5) Team delivers by themselves a few features to users frequently e.g. daily.
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

const mapDispatchToProps = {sendSlide8Data};

export default connect(mapStateToProps, mapDispatchToProps)(MethodReleaseProcess);
