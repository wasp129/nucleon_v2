import React, { Component } from 'react';
import axios from 'axios';
import { TimelineLite } from "gsap/all";
import arrow from "../../assets/images/icons/down-arrow.png";
import { withRouter } from 'react-router-dom';

class Topmenu extends Component {
    constructor() {
        super()
        this.state = {
            clicked: false
        }

        this.dropdownButton = null;
        this.menuWrapper = null;
        this.userLoggedIn = null;
        this.dropdownTween = null;
    }

    componentDidMount() {
        this.dropdownTween = new TimelineLite({ paused:true })
        .to(this.dropdownButton, 0.5, { ease: "Power1.easeOut", rotation: 180 })
        .to(this.menuWrapper, 0.5, { ease: "Power1.easeOut", y: 115 }, "=-0.5")
        .to(this.userLoggedIn, 0.5, {css:{color: "#4885ed", ease: "Power1.easeOut"}  }, "=-0.5")
    }

    onClick = () => {
        if (!this.state.clicked) {
            this.dropdownTween.play()
            this.setState({
                clicked: true
            })
        } else {
            this.dropdownTween.reverse()
            this.setState({
                clicked: false
            })
        }
    }

    handleBack = () => {
        this.props.history.push("/dashboard");
    }

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
            console.log('Logout error', error)
        })
    }

    render() {
        return (
            <div className="topmenu">
                    <div className="menu-list-wrapper" ref={div => this.menuWrapper = div}>
                        <ul className="menu-list">
                            <li onClick={this.logout}>Log out</li>
                            <li onClick={this.handleBack}>Back to dashboard</li>
                        </ul>
                    </div>
                <p className="user-logged-in" onClick={this.onClick} ref={p => this.userLoggedIn = p}>USER EXAMPLE<span><img ref={img => this.dropdownButton = img} className="arrow" src={arrow} alt={this.props.user}/></span></p>
            </div>
        );
    }
}

export default withRouter(Topmenu);