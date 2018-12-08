import React, { Component } from 'react';
import Baseslide from "../slides/baseslide";

import axios from 'axios';

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			name: "",
			company: "",
			country: "",
			email: "",
			password: ""
		}
	}

	handleSubmit = (event) => {
		console.log('sign-up handleSubmit, email: ')
		console.log(this.state.email)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/signup', {
			name: this.state.name,
			company: this.state.company,
			country: this.state.country,
			email: this.state.email,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					// this.props.history.push("/login")
				} else {
					console.log('email already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)
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
				<div className="signup">
					<div className="slide-box-main signup">
						<div className="instructions">
							<h2>Sign up</h2>
							<p>To get started with Nucleon, please fill out the fields below and sign up.</p>
						</div>
						<div>
							<div>
								<form>
									<label htmlFor="name">Name: </label>
									<input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
									<br/>
									<label htmlFor="company">Company: </label>
									<input type="text" name="company" value={this.state.company} onChange={this.handleChange}/>
									<br/>
									<label htmlFor="username">Country: </label>
									<input type="text" name="country" value={this.state.country} onChange={this.handleChange}/>
									<br/>
									<label htmlFor="email">Email: </label>
									<input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
									<br/>
									<label htmlFor="password">Password: </label>
									<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
									<br/>
									<button onClick={this.handleSubmit}>Login</button>
								</form>
							</div>
						</div>
					</div>	
				</div>
			</Baseslide>
		);
	}
}

export default Signup;
