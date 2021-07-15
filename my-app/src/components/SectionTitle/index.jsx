import React from 'react';
import './style.css';

class SectionTitle extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <h1 className="songsTitle">{this.props.title}</h1>
    }
}

export default SectionTitle;