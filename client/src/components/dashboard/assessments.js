import React, { Component } from 'react';
import Dashboard from "./dashboard";
import Modal from 'react-responsive-modal';

import edit from "../../assets/images/icons/edit.png";
import remove from "../../assets/images/icons/delete.png";
import download from "../../assets/images/icons/download.png";

// import { PDFExport } from '@progress/kendo-react-pdf';
import axios from 'axios';

class Assessments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allAssessments: [],
			open: false,
			userName: "",
			name: "",
			id: ""
		}
	};

	componentDidMount() {
		this.getUser();
		this.getAll();
	};

	exportPDF = () => {
    	this.resume.save();
	}

	getAll = () => {
		axios.get("assessment/getAll")
		.then((response) => {
		    this.setState ({
		    	allAssessments: response.data.assessment
		    })
		})
	};

	getUser = () => {
	    axios.get('/user/').then(response => {
	    	if (response.data.user) {
	        this.setState({
	          loggedIn: true,
	          userName: response.data.user.name
	        })
	        if (window.location.pathname === "/") {
	        	this.props.history.push("/start");
	        }
	      } else {
	        this.setState({
	          loggedIn: false,
	          userName: null
	        })
	        if (window.location.pathname !== "/" && window.location.pathname !== "/signup") {
	        	this.props.history.push("/");
	        }
	      }
	    })
  	}

	handleDelete = (id) => {
		axios.delete("/assessment/delete/" + id)
        	.then((response) => {
          		this.getAll();
        	})
	};

	handleUpdate = (id, name) => {
		axios.put("/assessment/update/" + id, {
			name: name
		}).then((response) => {
			this.onCloseModal();
			this.getAll();
		})
	}	

	handleNameChange = (e) => {
		this.setState({
			name: e.target.value
		})
	}

	onOpenModal = (name, id) => {
    	this.setState({
    		name: name,
    		id: id,
    		open: true
    	});
  	};

  	onCloseModal = () => {
    	this.setState({
    		open: false
    	});
  	};

	render() {
		return (
			<Dashboard>
				<div className="headline">
					<h2>Welcome, {this.state.userName}.</h2>
					<h3 className="assessment-header">Your Assessments:</h3>
				</div>
				<div className="assessment-wrapper">
					<div className="dashboard-scroll">
						{[...this.state.allAssessments].reverse().map(assessment =>
							<div className="assessment" key={assessment._id}>
								<div className="assessment-content">
									<p>{assessment.name}</p>
								</div>
								<div className="actions">
									<img className="action-icon edit" src={edit} alt="Edit" onClick={() => {this.onOpenModal(assessment.name, assessment._id)}}/>
									<img className="action-icon delete" src={remove} alt="Delete" onClick={() => {this.handleDelete(assessment._id)}}/>
									<img className="action-icon download" src={download} alt="Download" onClick={this.exportPDF}/>
								</div>
								<Modal className="modal" open={this.state.open} onClose={this.onCloseModal} center>
									<p className="assessment-headline">Please enter a new name.</p>
	          						<input className="assessment-edit input-standard" onChange={this.handleNameChange} value={this.state.name}></input>
	          						<button className="assessment-button" onClick={() => {this.handleUpdate(this.state.id, this.state.name)}}>OK</button>
	       						</Modal>
							</div>
						)}
					</div>
				</div>
			</Dashboard>
		);
	}
}

export default Assessments;
