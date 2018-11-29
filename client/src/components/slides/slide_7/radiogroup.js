import React, { Component } from 'react';

import { RadioGroup, RadioButton } from 'react-radio-buttons';

class Radiogroup extends Component {

	// handleSelect = (value) => {
 //        this.props.onSelect(this.props.id, value);
 //    }

	render() {
		return (
			<div className="radio-group">
				<p className="radio-group-statement"></p>
				<RadioGroup onChange={this.handleSelect} vertical>
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
		);
	}
}

export default Radiogroup;
