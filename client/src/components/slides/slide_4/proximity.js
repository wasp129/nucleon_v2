import React, { Component } from 'react';
import { connect } from 'react-redux';

import Baseslide from "../baseslide.js";



class Proximity extends Component {

	componentDidMount() {
		console.log(this.props.teamMembers);
	}
	render() {
		return (
			<div>
				<Baseslide>
					<h2>Hello world</h2>
				</Baseslide>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		teamMembers: state.teamMembers
	}
};


export default connect(mapStateToProps)(Proximity);