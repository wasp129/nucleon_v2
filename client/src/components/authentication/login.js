import React, { Component } from 'react';
import { TimelineLite} from "gsap/all";
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Login extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
            password: ''
		}

		this.loginContainer = null;
		this.loginTween = null;
	}

	componentDidMount() {
        this.props.onRef(this)
    }

    method = () => {
        console.log("Login clicked from LOGIN.JS");
    	this.loginTween = new TimelineLite({ paused:true })
		.to(this.loginContainer, 0.750, { left: 0 })
    	this.loginTween.play()
    }

	handleSubmit = (event) => {
		event.preventDefault();

        axios.post('/user/login', {
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                if (response.status === 200) {
                	console.log("Logged in succesfully");
                    this.props.history.push("/dashboard")
                }
            }).catch(error => {
                console.log('login error: ' , error)
            })
	}

	handleChange = (event) => {
		this.setState({
            [event.target.name]: event.target.value
        })
	}	

	render() {
		return (
			<div className="login-wrapper">
                    <div className="login">
                        <div className="slide-box-main login-box" ref={div => this.loginContainer = div}>
                            <div className="instructions">
                                <h2>{this.props.signupHeadline}</h2>
                                <p>{this.props.signupMessage}</p>
                            </div>
                            <div> 
                                <div>
                                    <form autoComplete="off">
                                        <div>
                                            <div>
                                                <p className="login-label">Email</p>
                                                <input className="input-standard" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div >
                                            <div>
                                                <p className="login-label">Password</p>
                                                <input className="input-standard" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn btn-primary col-1 col-mr-auto" onClick={this.handleSubmit} type="submit">Log in</button>
                                        </div>
                                        <p>Not a member yet? <span onClick={() => this.loginTween.reverse()} className="login-optout">Sign up</span></p>
                                    </form>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
		);
	}
}

export default withRouter(Login);
