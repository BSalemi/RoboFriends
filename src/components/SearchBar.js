import React from 'react';

class SearchBar extends React.Component {
   

    render(){
        return(
            <div className="pa2">
                <input className="pa3 ba b--green bg-lightest-blue"
                    type="search"
                    placeholder="Search Robots"
                    onChange={this.props.searchChange}
                />
            </div>
        )
    }
}

export default SearchBar