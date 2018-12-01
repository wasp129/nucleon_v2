import React, { Component } from 'react';

class MonthInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.member.id,
			name: this.props.member.name,
			months: this.props.member.months,
		}
	}

	handleMonthsIncrement = () => {
		this.setState((prevState) => {
			return {
				months: prevState.months + 1
			}
		}, this.handleMemberChange);
		
	}

	handleMonthsDecrement = () => {
		if (this.state.months === 1) {
			return;
		} else {
			this.setState((prevState) => {
				return {
					months: prevState.months - 1
				}
			}, this.handleMemberChange);
		}
	}

	handleManualMonthsChange = (e) => {
		this.setState({
			months: parseInt(e.target.value)
		}, this.handleMemberChange)
	}

	handleMemberChange = () => this.props.onMemberChange(this.state);

	render() {
		return (
			<div>
				<div className="input-box">
					<p className="teammember-name">{this.state.name}</p>
					<div className="months-wrapper">
						<button className="months-button" onClick={this.handleMonthsDecrement}>-</button>
						<input className="input-months" onChange={this.handleManualMonthsChange} value={this.state.months}></input>
						<button className="months-button" onClick={this.handleMonthsIncrement}>+</button>
					</div>
				</div>
			</div>
		);
	}
}

export default MonthInput;
