import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import Section from "./components/Section/Section";
import { useEffect, useState } from "react";

function App() {
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);
  const [newAlbuSongs, setNewAlbumSongs] = useState([]);
  const [songsData, setSongsData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);

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
    } catch (error) {
      console.log(error);
      return null;
    }
  };

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
    
    </div>
  );
}

export default App;
