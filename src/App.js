import React from 'react';
import CardList from './CardList.js'
import SearchBar from './SearchBar.js'

const App = () => {
    return(
        <div>
            <h1>RoboFriends</h1>
            <SearchBar/>
            <CardList/>
        </div>
    )
}

export default App 