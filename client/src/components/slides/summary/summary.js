import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PDFExport } from '@progress/kendo-react-pdf';

import axios from 'axios';

import Baseslide from "../baseslide";

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
	    	name: this.props.name,
	    	showBackButton: false
	    }
 	}

 	componentDidMount() {
 		this.handleSubmit();
 	}

 	exportPDF = () => {
    	this.resume.save();
    	this.setState({
    		showBackButton: true
    	})
	}

	backToDashboard = () => {
		this.props.history.push("./dashboard")
	}

 	handleSubmit = () => {
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
		let backbutton;
		if (this.state.showBackButton) {
			backbutton = <button onClick={this.backToDashboard}>Back to dashboard</button>
		}
		return (
			<div>
				<Baseslide>
					<div className="summary-slide">
						<div className="slide-box-main summary">
							<div className="instructions">
								<h2>Finished</h2>
								<p>Your Nucleon™ number, calculated on the basis on your input, is 1 - which indicates that you are performing better than 6 % of comparable teams.</p>
							</div>
							<div className="slide-wrapper">
								<p className="summary-end-text">Driving high-performance teams is all about continuous focus and improvement.</p>
								<p className="summary-end-text">A report showing the factors leading to your result, a "laundry list" of your most important focus points and a prioritized heatmap, has been saved to your dashboard.<br/><br/>To download your report, please click "Download now". You can also download it later from your dashboard.</p>
								<button onClick={this.exportPDF}>Download now</button>
								{backbutton}
							</div>
						</div>
						<div className="pdf-wrapper">
							<PDFExport paperSize={'Letter'} fileName="nucleon_assessment.pdf" title="" subject="" keywords="" ref={(r) => this.resume = r}>
			        			<div style={{
			        				   color: "black",	
							           height: 792,
							           width: 612,
							           padding: 'none',
							           backgroundColor: 'white',
							           boxShadow: '5px 5px 5px black',
							           margin: 'auto',
							           overflowX: 'hidden',
							           overflowY: 'hidden'}}>
			                			{this.state.name}
			        			</div>	
			 				</PDFExport>
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


export default connect(mapStateToProps)(Summary);