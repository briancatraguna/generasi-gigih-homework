import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const SectionTitle = (props) => {
    return (
        <h1 className="songsTitle">{props.title}</h1>
    );
}

export default SectionTitle;

SectionTitle.propTypes = {
    title: PropTypes.string
}