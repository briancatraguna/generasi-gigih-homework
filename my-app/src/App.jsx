import './App.css';
import 'regenerator-runtime/runtime';
import data from './data/albumData.js'

console.log(process.env.REACT_APP_CLIENT_ID);

function App() {
  return (
    <div className="App">
      <div>
        <h1 class="topNav">Music</h1>
        <h1 class="topNav">Podcast</h1>
        <h1 class="topNav">Live</h1>
        <h1 class="topNav">Radio</h1>
      </div>
    
      <div class="songsContainer">
        <h1 class="songsTitle">Songs You Might Like</h1>
        <div class="itemContainer">
          <img src={data.album.images[0].url} alt="image"/>
          <p class="songTitle">Bohemian Rhapsody (The Original Soundtrack)</p>
          <p class="artist">Queen</p>
          <button class="selectButton">Select</button>
        </div>
        <div class="itemContainer">
          <img src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b"/>
          <p class="songTitle">Bohemian Rhapsody (The Original Soundtrack)</p>
          <p class="artist">Queen</p>
          <button class="selectButton">Select</button>
        </div>
        <div class="itemContainer">
          <img src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b"/>
          <p class="songTitle">Bohemian Rhapsody (The Original Soundtrack)</p>
          <p class="artist">Queen</p>
          <button class="selectButton">Select</button>
        </div>
      </div>
    </div>
  );
}

export default App;
