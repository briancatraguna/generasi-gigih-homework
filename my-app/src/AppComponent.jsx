import React from 'react';
import data from './data/albumData.js';
import TopNavigationMenu from './components/TopNavigationMenu/index.jsx';
import SectionTitle from './components/SectionTitle/index.jsx';
import SongItem from './components/SongItem/index.jsx';
import axios from 'axios';




class AppComponent extends React.Component{
    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
        // window.location.href = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:3000/&scope=playlist-modify-private`

        const urlSearchParams = new URLSearchParams(window.location.hash.substring(1));
        let accessToken = urlSearchParams.get('access_token');

        console.log(accessToken);
        
        this.state = {
            isLogin: false,
            textInput: "",
            accessToken: accessToken,
            data: null
        }

        if (accessToken.length>0){
            console.log("Acces token length above 0")
            this.setState({
                isLogin: true,
                textInput: "",
                accessToken: accessToken,
                data: {}
            })
            console.log(this.state.accessToken)
        }

        
    }

    handleSearch(){
        //https://api.spotify.com/v1/search?q=queen&type=album&limit=30
        let query = this.state.textInput;
        let accessToken = `Bearer ${this.state.accessToken}`;
        const BASE_URL = "https://api.spotify.com/v1/search?q="
        console.log(accessToken)
        const getSpotifySearch = async() => {
            try {
                //https://api.spotify.com/v1/search?q=queen&type=album&limit=30
                const response = await axios.get(`${BASE_URL}${query}&type=album&limit=30`,{
                    headers: {
                        'Authorization': accessToken
                    }
                })
                console.log(response.data)
                this.setState({
                    data: response.data
                })
                console.log(this.state.data)
            } catch(error){
                console.error(error);
            }
        }
        getSpotifySearch();
    }

    handleChange(e){
        this.setState({textInput: e.target.value})
    }

    render(){
        let listData;
        const theLink = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:3000/&scope=playlist-modify-private`
        if (this.state.data != null){
            listData = this.state.data.albums.items.map((item,index)=>{
                return (
                    <SongItem
                    imgUrl = {item.images[0].url}
                    songTitle = {item.name}
                    artist = {item.artists[0].name}
                    artistLink = {item.artists[0].href}
                    />
                )
            })
            console.log("Rednering")
            console.log(this.state.data)
        }
        return(
            <div className="App">
                <TopNavigationMenu name="Music"/>
                <TopNavigationMenu name="Podcast"/>
                <TopNavigationMenu name="Live"/>
                <TopNavigationMenu name="Radio"/>

                <a href={theLink}>LOGIN</a>
                
                <SectionTitle title="Search your favorite albums!"/>
                <br></br>
                <input type="text" value={this.state.textInput} onChange={this.handleChange}></input>
                <button onClick={this.handleSearch}>Search!</button>
                <br></br>

                {listData}

            </div>
        )
        
    }
}

export default AppComponent;