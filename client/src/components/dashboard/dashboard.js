import React, { Component } from 'react';
import Baseslide from "../slides/baseslide";
import { TimelineLite } from "gsap/all";
import CSSPlugin from 'gsap/CSSPlugin';
import {withRouter} from 'react-router-dom';
import logo_primary_black from "../../assets/images/logos/nucleon_logo_primary_black.png";

const C = CSSPlugin; // necessary for animations to work...

class Dashboard extends Component {
	constructor() {
		super();

		this.state = {
			clicked: false
		}

		this.burgerMenu = null;
		this.sideMenu = null;
		this.burgerTween = new TimelineLite({ paused:true });
		this.sideMenuTween = new TimelineLite({paused: true });
	}

	componentDidMount() {
        this.burgerTween
	        .to(".line-mid", 0.5, { x: -100, backgroundColor: "black", ease: "Power4.easeOut" })
			.to(".line-top", 0.5, { rotation: "+=45", y: 8, backgroundColor: "black", ease: "Power4.easeOut" }, "-=0.5")
			.to(".line-bottom", 0.5, { rotation: "-=45", y: -8, backgroundColor: "black", ease: "Power4.easeOut" }, "-=0.5")

		this.sideMenuTween
			.to(".menu-left", 0.5, {left: 0, ease: "Power4.easeOut" })
			.to(".overlay", 0.5, {opacity: 1, display: "block", ease: "Power4.easeOut" }, "-=0.5")
    }

    handleBurgerClick = () => {
    	if (!this.state.clicked) {
    		this.burgerTween.play();
    		this.sideMenuTween.play();
    		this.setState({
    			clicked: true
    		})
    	} else {
    		this.burgerTween.reverse();
    		this.sideMenuTween.reverse();
    		this.setState({
    			clicked: false
    		})
    	}
    }

    handleOverlayClick = () => {
    	this.burgerTween.reverse();
    	this.sideMenuTween.reverse();
    }

	handleNext = () => {
		this.props.history.push("/start");
	}

	render() {
		return (
			<Baseslide>
				<div className="dashboard">
					<div onClick={this.handleBurgerClick} ref={div => this.burgerMenu = div} className="burger-menu">
						<div className="line line-top"></div>
						<div className="line line-mid"></div>
						<div className="line line-bottom"></div>
					</div>

					<div className="menu-left" ref={div => this.sideMenu = div}>
						<div className="logo-box">
							<img className="logo" src={logo_primary_black} alt="Nucleon"/>
						</div>
						<div className="menu-items">
							<ul>
								<li>Your assessments</li>
								<li>Learn more</li>
							</ul>
							<ul className="menu-item-logout">
								<li>Log out</li>
							</ul>
						</div>
					</div>
					<div className="dashboard-content">
						<div>
							{this.props.children}
						</div>
						<div className="button-wrapper">
							<button onClick={this.handleNext} className="new-assessment-button">New assessment</button>
						</div>
						<div onClick={this.handleOverlayClick} className="overlay"></div>
					</div>
				</div>
			</Baseslide>
		);
	}
}

export default withRouter(Dashboard);
