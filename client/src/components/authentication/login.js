import React, { Component } from 'react';
import Baseslide from "../slides/baseslide";

import axios from 'axios';

class Login extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
            password: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
        console.log('handleSubmit')

        axios.post('/user/login', {
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                	console.log("Logged in succesfully");
                    // update App.js state
                    // this.props.updateUser({
                    //     loggedIn: true,
                    //     email: response.data.email
                    // })
                    // update the state to redirect to home
                    this.props.history.push("/start")
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
	}

	handleChange = (event) => {
		this.setState({
            [event.target.name]: event.target.value
        })
	}	

	render() {
		return (
			<Baseslide>
				<div className="login">
					<div className="slide-box-main login">
						<div className="instructions">
							<h2>Log in</h2>
							<p>Fill out your email and password.</p>
						</div>
						<div>
							<div>
								<form >
			                        <div>
			                            <div>
			                                <label>Email</label>
			                            </div>
			                            <div>
			                                <input className="form-input" type="text" id="eamil" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
			                            </div>
			                        </div>
			                        <div >
			                            <div >
			                                <label htmlFor="password">Password</label>
			                            </div>
			                            <div className="col-3 col-mr-auto">
			                                <input className="form-input" placeholder="password" type="password" name="password" value={this.state.password} onChange={this.handleChange}
			                                />
			                            </div>
			                        </div>
			                        <div>
			                            <button className="btn btn-primary col-1 col-mr-auto" onClick={this.handleSubmit} type="submit">Login</button>
			                        </div>
                    			</form>
							</div>
						</div>
					</div>	
				</div>
			</Baseslide>
		);
	}
}

export default Login;
