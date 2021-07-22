import React from 'react';
import './style.css';

const SectionTitle = (props) => {
    return (
        <h1 className="songsTitle">{props.title}</h1>
    );
}

export default SectionTitle;