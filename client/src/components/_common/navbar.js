import React, { Component } from 'react';

import axios from 'axios';

class Navbar extends Component {
	constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout = (event) => {
    	event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
    }

	render() {
		return (
			<div className="navbar">
				<button className="back-button" onClick={this.props.handleBack}>Back</button>
				<button className="next-button" onClick={this.props.handleNext}>Next</button>
				<button className="next-button" onClick={this.logout}>Next</button>
			</div>
		);
	}
}

export default Navbar;