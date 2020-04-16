import React from 'react';
import CardList from './CardList.js'
import SearchBar from './SearchBar.js'
import { robots } from './robots.js';

class App extends React.Component{


    state = {
        robots: robots,
        searchField: ""

    }
    render(){
        return(
                <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBar/>
                <CardList/>
            </div>
        )
    }
}


export default App 