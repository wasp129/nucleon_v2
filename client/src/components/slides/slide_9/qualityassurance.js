import React, { Component } from 'react';
import { connect } from 'react-redux';

import {sendSlide9Data} from "../../../actions"

import { RadioGroup, RadioButton } from 'react-radio-buttons';

import Baseslide from "../baseslide.js";


class MethodQualityAssurance extends Component {
	constructor(props) {
		super(props)

		this.state = {
			methodStatements: this.props.methods
		}
	}

  	handleNext = () => {
  		this.props.sendSlide9Data(this.state.methodStatements);
  		this.props.history.push("/method/months");
  	}

  	handleBack = () => {
  		this.props.history.push("/method/releaseprocess");
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
							<div className="instructions method-instructions">
								<h2>Method - Quality assurance</h2>
								<p>In this section we would like to assess the agility of your team on a scale from 1-5. In doing so, we can estimate the extent to which the team benefits from agile development. For each of the categories below, please select the statement most applicable for your team.</p>
							</div>
							<div>
								<div className="scroll-wrap scroll-involvement">
									<div className="scrollable">
										<div className="radio-group">
											<p className="radio-group-statement"></p>
											<RadioGroup onChange={value => this.handleSelect(value, this.state.methodStatements[2].id)} vertical="true">
												<RadioButton pointColor="#5c85f1" value="1">
													1) The project is under pressure, so everybody expects quality issues after release.
												</RadioButton>
												<RadioButton pointColor="#5c85f1" value="2">
													2) Manual test by testing departments secures quality.
												</RadioButton>
												<RadioButton pointColor="#5c85f1" value="3">
													3) There is a dedicated tester in the team with quality responsibility who secures quality in the product manually.
												</RadioButton>
												<RadioButton pointColor="#5c85f1" value="4">
													4) The team aims for technical excellence through best practices like Test-Driven-Development, automated build, test, deploy, continuous integration, zero-defect mindset etc.
												</RadioButton>
												<RadioButton pointColor="#5c85f1" value="5">
													5) The team has complete control of the agile practices and can fix and release a complex production error within minutes, without worrying about consequences.
												</RadioButton>
											</RadioGroup>
										</div>
									</div>
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
		name: state.name,
		methods: state.methods
	}
};

const mapDispatchToProps = {sendSlide9Data};

export default connect(mapStateToProps, mapDispatchToProps)(MethodQualityAssurance);
