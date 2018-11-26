import React, { Component } from 'react';

class Memberinput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.teammember.id,
			name: this.props.teammember.name,
			placeholder: this.props.teammember.placeholder
		}
	}

	handleNameChange = (e) => {
		this.setState({
			name: e.target.value
		}, this.handleMemberChange)
	}

	handleMemberChange = () => this.props.onMemberChange(this.state);

	render() {
		return (
			<div>
				<input value={this.state.name} placeholder={this.state.placeholder} onChange={this.handleNameChange} className="input-standard member-input" ></input>
			</div>
		);
	}
}

export default Memberinput;
