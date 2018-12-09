import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Topmenu extends Component {

	logout = (event) => {
    	event.preventDefault()
        console.log('Logging out. Bye!')
        axios.post('/user/logout').then(response => {
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              name: null
            })
            this.props.history.push("/");
          }
        }).catch(error => {
            console.log('Logout error' , error)
        })
    }

	render() {
		return (
			<div className="topmenu">
				<p className="user-logged-in">{this.props.user}</p>
				<button onClick={this.logout}>Log out</button>
			</div>
		);
	}
}

export default withRouter(Topmenu);
