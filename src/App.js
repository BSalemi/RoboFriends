import React from 'react';
import CardList from './CardList.js'
import SearchBar from './SearchBar.js'
import { robots } from './robots.js';

class App extends React.Component{


    state = {
        robots: robots,
        searchField: ""

    }

    onSearchChange(event){
        console.log(event)
    }

    render(){
        return(
                <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBar searchField={this.state.searchField} searchChange={this.onSearchChange}/>
                <CardList robots={this.state.robots}/>
            </div>
        )
    }
}


export default App 