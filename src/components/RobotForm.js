import React from 'react';
import robots from '../robots.js'

class RobotForm extends React.Component {

    state = {
        id: "",
        name: "",
        username: "",
        email: ""
    }

    render(){
        return (
            <>
                <h1>
                    Create a RoboFriend
                </h1>
                <form>
                    <input type="text" value={this.state.name}/>
                    <input type="text" value={this.state.username}/>
                    <input type="text" value={this.state.email}/>
                    <button/>
                </form>
            </>
        )
    }
}

export default RobotForm