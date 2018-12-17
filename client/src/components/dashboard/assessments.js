import React, { Component } from 'react';
import Dashboard from "./dashboard";

import edit from "../../assets/images/icons/edit.png";
import remove from "../../assets/images/icons/delete.png";
import download from "../../assets/images/icons/download.png";

import axios from 'axios';

class Assessments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allAssessments: []
		}
	}

	componentDidMount() {
	  this.getAll();
	}

	getAll = () => {
		axios.get("assessment/getAll")
		.then((response) => {
		    console.log(response.data.assessment);
		    this.setState ({
		    	allAssessments: response.data.assessment
		    })
		})
	}

	handleDelete = (id) => {
		axios.delete("/assessment/delete/" + id)
          .then((response) => {
            this.getAll();
          })
	}

	render() {
		return (
			<Dashboard>
				<div className="headline">
					<h2>Your Assessments</h2>
				</div>
				<div className="assessment-wrapper">
					{[...this.state.allAssessments].reverse().map(assessment =>
						<div className="assessment" key={assessment._id}>
							<div className="assessment-content">
								<p>{assessment.name}</p>
							</div>
							<div className="actions">
								<img className="action-icon edit" src={edit} alt="Edit"/>
								<img className="action-icon delete" src={remove} alt="Delete" onClick={() => {this.handleDelete(assessment._id)}}/>
								<img className="action-icon download" src={download} alt="Download"/>
							</div>
						</div>
					)}
				</div>
			</Dashboard>
		);
	}
}

export default Assessments;
