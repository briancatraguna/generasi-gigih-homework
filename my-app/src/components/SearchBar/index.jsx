import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './style.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';

const SearchBar = (props) => {

    const {accessTokenBearer} = useSelector((state) => state.token)

    const [textInput,setTextInput] = useState("");

    const handleChange = (e) => {
        setTextInput(e.target.value);
    }

    const handleSearch = () => {
        const query = textInput;
        const BASE_URL = "https://api.spotify.com/v1/search?q="
        const getSpotifySearch = async() => {
            try {
                const response = await axios.get(`${BASE_URL}${query}&type=track&limit=30`,{
                    headers: {
                        'Authorization': accessTokenBearer
                    }
                })
                props.getData(response.data);
            } catch(error){
                console.error(error);
            }
        }
        getSpotifySearch();
    }

    return(
        <div>
            <TextField className="textField" type="text" value={textInput} onChange={handleChange}></TextField>
            <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
        </div>
    );
}

export default SearchBar;

SearchBar.propTypes = {
    getData: PropTypes.function
}