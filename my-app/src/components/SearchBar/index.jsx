import React from 'react';
import './style.css';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <input className="searchBar" type="text"></input>
        );
    }
}

export default SearchBar;