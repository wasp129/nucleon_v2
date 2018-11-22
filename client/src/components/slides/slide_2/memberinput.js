import React, { Component } from 'react';

class Memberinput extends Component {
	render() {
		let teamMembers = this.props.teamMembers;
		let onNameChange = this.props.onNameChange;
		return (
			<div>
				{teamMembers.map(teamMember =>
					<input className=" input-standard member-input" onChange={e => onNameChange(e, teamMember.id)} key={teamMember.id} placeholder={teamMember.placeholder}></input>
				)}
			</div>
		);
	}
}

export default Memberinput;
