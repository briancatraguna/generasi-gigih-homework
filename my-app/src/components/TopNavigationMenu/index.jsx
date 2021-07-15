import React from 'react';
import './style.css';

class TopNavigationMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1 className = "topNav" > { this.props.name } </h1>
    }
}

export default TopNavigationMenu;