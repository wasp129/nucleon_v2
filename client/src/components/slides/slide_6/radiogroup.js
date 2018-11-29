import React, { Component } from 'react';

import { RadioGroup, RadioButton } from 'react-radio-buttons';

class Radiogroup extends Component {

	handleSelect = (value) => {
        this.props.onSelect(this.props.id, value);
    }

  	// handleSelect = (selectedRadioId) => {
   //      this.props.onSelect(selectedRadioId, this.props.questionId);
   //  }

	render() {
		return (
			<div className="radio-group">
				<p className="radio-group-statement">{this.props.statement}</p>
				<RadioGroup onChange={this.handleSelect} horizontal>
					<RadioButton pointColor="#5c85f1" value="1">
						Strongly disagree
					</RadioButton>
					<RadioButton pointColor="#5c85f1" value="2">
						Disagree
					</RadioButton>
					<RadioButton pointColor="#5c85f1" value="3">
						Somewhat disagree
					</RadioButton>
					<RadioButton pointColor="#5c85f1" value="4">
						Don't know
					</RadioButton>
					<RadioButton pointColor="#5c85f1" value="5">
						Somewhat agree
					</RadioButton>
					<RadioButton pointColor="#5c85f1" value="6">
						Agree
					</RadioButton>
					<RadioButton pointColor="#5c85f1" value="7">
						Strongly agree
					</RadioButton>
				</RadioGroup>
			</div>
		);
	}
}

export default Radiogroup;
