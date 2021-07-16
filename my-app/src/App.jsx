import './../src/App.css';
import 'regenerator-runtime/runtime';
import data from './data/albumData.js';
import TopNavigationMenu from './components/TopNavigationMenu/index.jsx';
import SectionTitle from './components/SectionTitle/index.jsx';
import SongItem from './components/SongItem/index.jsx'

console.log(process.env.REACT_APP_CLIENT_ID);

function App() {
  return (
    <div className="App">
      <TopNavigationMenu name="Music"/>
      <TopNavigationMenu name="Podcast"/>
      <TopNavigationMenu name="Live"/>
      <TopNavigationMenu name="Radio"/>
    
      <SectionTitle title="Songs you might like"/>
      {data.map((item,index)=>{
        return (
          <SongItem imgUrl={item.album.images[0].url} songTitle={item.album.name} artist={item.album.artists[0].name}/>
        )
      })}

    </div>
  );
}

export default App;
