import React, { Component } from 'react';

class CompetenceInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.member.id,
			name: this.props.member.name,
			competence: this.props.member.competence,
			salary: this.props.salary
		}
	}

	handleCompetenceIncrement = () => {
		this.setState((prevState) => {
			return {
				competence: prevState.competence + 1
			}
		}, this.handleMemberChange);
	}

	handleCompetenceDecrement = () => {
		this.setState((prevState) => {
			return {
				competence: prevState.competence - 1
			}
		}, this.handleMemberChange);
	}

	handleManualCompetenceChange = (e) => {
		this.setState({
			competence: parseInt(e.target.value)
		}, this.handleMemberChange)
	}

	handleSalaryChange = (e) => {
		this.setState({
			salary: parseInt(e.target.value)
		}, this.handleMemberChange)
	}

	handleMemberChange = () => this.props.onMemberChange(this.state);

	render() {
		return (
			<div>
				<div className="input-box">
					<p className="teammember-name">{this.state.name}</p>
					<input className="input-salary" placeholder="Monthly salary (USD)" onChange={this.handleSalaryChange}></input>
					<div className="competence-wrapper">
						<button className="competence-button" onClick={this.handleCompetenceDecrement}>-</button>
						<input className="input-competence" onChange={this.handleManualCompetenceChange} value={this.state.competence}></input>
						<button className="competence-button" onClick={this.handleCompetenceIncrement}>+</button>
					</div>
				</div>
			</div>
		);
	}
}

export default CompetenceInput;
