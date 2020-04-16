import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchTerm: ""
    };

    render(){
        return(
            <div className="pa2">
                <input className="pa3 ba b--green bg-lightest-blue"
                    type="search"
                    placeholder="Search Robots"
                    value={this.state.searchTerm}
                />
            </div>
        )
    }
}

export default SearchBar