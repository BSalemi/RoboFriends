import React from 'react';
import robots from '../robots.js';
import './RobotForm.css';

class RobotForm extends React.Component {

    state = {
        id: "",
        name: "",
        username: "",
        email: ""
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnClick = () => {
        const roboForm = document.getElementById('roboForm');

        if(roboForm.style.display === "none" ){
            roboForm.style.display = "inline";
        } else {
            roboForm.style.display = "none";
        }
    }

    render(){
        const inputCSS = "pa2 ba br1 b--green bg-lightest-blue"
        return (
            <>
                <h2 id="createRoboFriend" onClick={() => this.handleOnClick()}>
                    Create a RoboFriend
                </h2>
                <form id="roboForm" className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                    <input className={`${inputCSS}`} type="text" name="name" value={this.state.name} placeholder="Name" onChange={event => this.handleOnChange(event)}/>
                    <input className={`${inputCSS}`} type="text" name="username" value={this.state.username} placeholder="Username"  onChange={event => this.handleOnChange(event)}/>
                    <input className={`${inputCSS}`} type="text" name="email" value={this.state.email} placeholder="Email" onChange={event => this.handleOnChange(event)}/>
                    <input className={`${inputCSS} +   ma1`} type="submit" value="Create RoboFriend"/>
                </form>
            </>
        )
    }
}

export default RobotForm