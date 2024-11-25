import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import TopAlbum from "./components/TopAlbum/topAlbum";
// import NewAlbum from "./components/NewAlbum/newAlbum";
import Section from "./components/Section/albumSection";
import LabTabs from "./components/Tabs/tab"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="component-wrapper">
      <Section endpoint={"top"} title={"Top Albums"} />
      </div>
      <div className="component-wrapper">
      <Section endpoint={"new"} title={"New Albums"} />
      </div>
      <LabTabs />
    </div>
  );
}

export default App;
