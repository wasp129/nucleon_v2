import React, { Component } from 'react';
import { connect } from 'react-redux';

import {sendSlide6Data} from "../../../actions"

import Baseslide from "../baseslide.js";
import Radiogroup from "./radiogroup";

class Culture extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cultureQuestions: this.props.cultureQuestions
		}
	}

  	handleNext = () => {
  		this.props.sendSlide6Data(this.state.cultureQuestions);
  		this.props.history.push("/method/userinvolvement");
  	}

  	handleBack = () => {
  		this.props.history.push("/bureaucracy");
  	}

  	handleSelect = (questionId, radioId) => {
        const newQuestions = this.state.cultureQuestions.map(item => {
            if (item.id === questionId) {
                item.radioId = radioId;
            }
            return item;
        });
        this.setState({
        	cultureQuestions: newQuestions
        })
    };

	render() {
		return (
			<div>
				<Baseslide handleNext={this.handleNext} handleBack={this.handleBack}>
					<div className="slide-6">
						<div className="slide-box-main culture">
							<div className="instructions">
								<h2>Culture</h2>
								<p>Please assess the general culture of the team by answering the following 12 questions:</p>
							</div>
							<div className="scroll-wrap scroll-culture">
								<div className="scrollable">
									{this.state.cultureQuestions.map(question =>
										<Radiogroup key={question.id} id={question.id} statement={question.statement} radioId={question.radioId} onSelect={this.handleSelect}/>
									)}	
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
		name: state.name,
		cultureQuestions: state.cultureQuestions
	}
};

const mapDispatchToProps = {sendSlide6Data};

export default connect(mapStateToProps, mapDispatchToProps)(Culture);
