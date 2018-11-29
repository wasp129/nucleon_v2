import React, { Component } from 'react';
import { connect } from 'react-redux';

import Baseslide from "../baseslide.js";
import Radiogroup from "./radiogroup";

class Method extends Component {

  	handleNext = () => {

  	}

  	handleBack = () => {
  		this.props.history.push("/culture");
  	}

  	handleSelect = () => {
        
    };

	render() {
		return (
			<div>
				<Baseslide handleNext={this.handleNext} handleBack={this.handleBack}>
					<div className="slide-7">
						<div className="slide-box-main method">
							<div className="instructions">
								<h2>Method</h2>
								<p>In this section we would like to assess the agility of your team on a scale from 1-5. In doing so, we can estimate the extent to which the team benefits from agile development. For each of the categories below, please select the statement most applicable for your team.</p>
							</div>
							<div>
								<Radiogroup/>
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
		cultureQuestions: state.cultureQuestions
	}
};

// const mapDispatchToProps = {sendSlide6Data};

export default connect(mapStateToProps)(Method);
