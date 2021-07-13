import './App.css';
import 'regenerator-runtime/runtime';
import data from './data/albumData.js'

console.log(process.env.REACT_APP_CLIENT_ID);

function showAlert(){
  alert(`You selected ${data.album.name} !`)
}

function App() {
  return (
    <div className="App">
      <div>
        <h1 class="topNav">Music</h1>
        <h1 class="topNav">Podcast</h1>
        <h1 class="topNav">Live</h1>
        <h1 class="topNav">Radio</h1>
      </div>
    
      <h1 class="songsTitle">Songs You Might Like</h1>
      <div class="itemContainer">
        <img src={data.album.images[0].url} alt="image"/>
        <p class="songTitle">{data.album.name}</p>
        <p class="artist">{data.album.artists[0].name}</p>
        <button class="selectButton" onClick={showAlert}>Select</button>
      </div>
    </div>
  );
}

export default App;
