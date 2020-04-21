import React from 'react';
import CardList from '../components/CardList.js'
import SearchBar from '../components/SearchBar.js'
import Scroll from '../components/Scroll.js'
import RobotForm from '../components/RobotForm.js'
import { robots } from '../robots.js';
import './App.css';

class App extends React.Component{


    state = {
        robots: robots,
        searchField: ""

    }

    addRobot = (robot) => {
        this.setState({
            ...this.state,
            robots: [...this.state.robots, robot]
        })
    }

    onSearchChange = (event) =>{
        this.setState({
            searchField: event.target.value
        })
    }

    render(){
        const { robots, searchField} = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return(
                <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <RobotForm addRobot={this.addRobot}/>
                <SearchBar searchField={searchField} searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}


export default App 