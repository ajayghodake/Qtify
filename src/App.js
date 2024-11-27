import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import Section from "./components/Section/Section";
import { FilteredSection } from "./components/FilterSection/FilterSection";
import BasicTabs from "./components/BasicTabs/BasicTabs";
import { useEffect, useState } from "react";

function App() {
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);
  const [newAlbuSongs, setNewAlbumSongs] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [value, setValue] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  const generateTopAlbumSongs = async () => {
    try {
      const res = await fetchTopAlbums();
      setTopAlbumSongs(res);
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  const generateNewAlbumSongs = async () => {
    try {
      const res = await fetchNewAlbums();
      setNewAlbumSongs(res);
    } catch (error) {
      console.log(error);
      return null;
    }
  };


  const generateSongs = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
      setFilteredData(res);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const generateNewSongs = async (index) => {
    let key = "";
    if(index === 0){
      generateSongs();
    }else if (index === 1) {
      key = "rock";
    }else if(index === 2){
      key ="pop";
    }else if(index === 3){
      key = "jazz";
    }else if(index === 4){
      key = "blues";
    }

    let newFilterdSongs = songsData.filter((song) => {
      return (song.genre.key === key);
    })

    setFilteredData(newFilterdSongs);
  }

  const handleIndexChange = async (newValue) => {
    setValue(newValue);
    generateNewSongs(newValue);
  }

  useEffect(() => {
    generateTopAlbumSongs();
    generateNewAlbumSongs();
    generateSongs();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="component-wrapper">
        <Section type="album" title="Top Albums" data={topAlbumSongs} />
        <Section type="album" title="New Albums" data={newAlbuSongs} />
      </div>
      <FilteredSection type="song" title="Songs" value={value} filteredData={filteredData} handleIndexChange={handleIndexChange}/>
    
    </div>
  );
}

export default App;
