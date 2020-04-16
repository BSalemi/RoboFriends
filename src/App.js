import React from 'react';
import CardList from './CardList.js'
import SearchBar from './SearchBar.js'
import { robots } from './robots.js';

class App extends React.Component{


    state = {
        robots: robots,
        searchField: ""

    }

    onSearchChange = (event) =>{
        this.setState({
            searchField: event.target.value
        })
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return(
                <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBar searchField={this.state.searchField} searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        )
    }
}


export default App 