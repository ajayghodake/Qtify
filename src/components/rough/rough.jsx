import * as React from "react";
import { useEffect, useState } from "react";
import Api from "../../api/api.js";
import AreaCard from "../Card/Card.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Chip from "@mui/material/Chip";

export default function RoughSection({ endpoint, title }) {
  const [apiData, setApiData] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // const top = "top";
      setLoading(true);
      try {
        const res = await Api(endpoint);
        setApiData(res);
        // const ress = await axios(`https://qtify-backend-labs.crio.do/albums/${endpoint}`);
        // setApiData(ress.data);
      } catch (err) {
        console.error("Error fetching API data", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [endpoint]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container">
      <div className="header">
        <h3>{title}</h3>
        <button className="toggle-button" onClick={toggleExpanded}>
          {isExpanded ? "Collapse" : "Show all"}
        </button>
      </div>

      <div id="carousel-layout">
        <Carousel
          showDots={false}
          customTransition="all 0.5s ease-in-out"
          infinite={false}
          containerClass="carousel-container"
          itemClass="carousel-item-padding"
          renderButtonGroupOutside={false}
          arrows={true}
        >
          {apiData?.map((album, index) => (
            <div className="main">
              <div className="container">
                <div key={album.id} className="card-container">
                  <div className="card-box">
                    <img src={album.image} alt={album.title || "Album"} />
                    <Chip id="chip" label={`${album.follows} follows`} />
                  </div>
                  <div id="slug">{album.slug || "Unknown"}</div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
<>
  {/* // Section Component--------------------------------------------- */}
  <div className="albumSection">
    <div>
      <div className="section">
        <div className="title_Action">
          <p>Top Albums</p>
          <button>show all</button>
        </div>

        <div className="CardCarousel_Container">
          <div className="Carousel_Container">
            <div className="Swiper_Initilization">
              {/* Swiper will come Here */}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* // Swiper Component--------------------------------------------- */}
  <div className="swiper_wrapper">
    <div className="swiper_slide">
        {/* Cards will come here */}
    </div>
  </div>

  {/* // Card Component--------------------------------------------- */}

    <a href="http://google.com" target="_blank" rel="noopener noreferrer">
        <div className="card">
            <div className="card_content">
                <img src="" alt="" />
                <div className="card_followers">
                    <p>15142 followers</p>
                </div>
            </div>
        </div>
    </a>

</>;




