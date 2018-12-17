import React, { Component } from 'react';
import { connect } from 'react-redux';

// import {sendSlide14Data} from "../../../actions"
import axios from 'axios';

import Baseslide from "../baseslide.js";

class Summary extends Component {
	constructor(props) {
    super(props)
	    this.state = {
	    	teamMembers: this.props.teamMembers,
	    	proximity: parseInt(this.props.proximity),
	    	bureaucracy: parseInt(this.props.bureaucracy),
	    	cultureQuestions: this.props.cultureQuestions,
	    	methods: this.props.methods,
	    	legacy: this.props.legacy,
	    	architecture: parseInt(this.props.architecture),
	    	reusability: parseInt(this.props.reusability),
	    	futureProofing: parseInt(this.props.futureProofing),
	    	name: this.props.name
	    }
 	}

 	componentDidMount() {
 		console.log(this.state);
 	}

 	handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/assessment/save', {
                name: this.state.name,
                teamMembers: this.state.teamMembers,
		    	proximity: this.state.proximity,
		    	bureaucracy: this.state.bureaucracy,
		    	cultureQuestions: this.props.cultureQuestions,
		    	methods: this.props.methods,
		    	legacy: this.props.legacy,
		    	architecture: this.state.architecture,
		    	reusability: this.state.reusability,
		    	futureProofing: this.state.futureProofing
            })
            .then(response => {
                console.log(response)
                if (!response.data.error) {
                    console.log('Successfully saved assessment.')
                } else {
                    console.log("Error saving assessment: ", response.data.error)
                }
            }).catch(error => {
                console.log("Error saving assessment: ", error)
            })
    }

	render() {
		return (
			<div>
				<Baseslide>
					<div className="end-slide">
						<div className="slide-box-main summary">
							<div className="instructions">
								<h2>Results</h2>
								<p>Your answers:</p>
							</div>
							<div className="slide-wrapper">
								<button onClick={this.handleSubmit}>Upload results</button>
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
		name: state.name,
		teamMembers: state.teamMembers,
		proximity: state.proximity,
		bureaucracy: state.bureaucracy,
		cultureQuestions: state.cultureQuestions,
		methods: state.methods,
		legacy: state.legacy,
		architecture: state.architecture,
		reusability: state.reusability,
		futureProofing: state.futureProofing
	}
};

// const mapDispatchToProps = {sendSlide14Data};

export default connect(mapStateToProps)(Summary);
