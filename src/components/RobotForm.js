import React from 'react';
import robots from '../robots.js'

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

    render(){
        return (
            <>
                <h1>
                    Create a RoboFriend
                </h1>
                <form>
                    <input type="text" name="name" value={this.state.name} placeholder="Name"/>
                    <input type="text" name="username" value={this.state.username} placeholder="Username"/>
                    <input type="text" name="email" value={this.state.email} placeholder="Email"/>
                    <button value="Submit"/>
                </form>
            </>
        )
    }
}

export default RobotForm