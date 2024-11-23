import * as React from "react";
import { useEffect, useState } from "react";
import Api from "../../api/api.js";
import AreaCard from "../Card/Card.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import './topAlbum.css'
// import axios from "axios";

export default function NewAlbum() {
  const [apiData, setApiData] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // const top = "top";
      setLoading(true);
      try {
        const res = await Api("new");
        setApiData(res);
        // const res = await axios("https://qtify-backend-labs.crio.do/albums/top");
        // setApiData(res.data);
      } catch (err) {
        console.error("Error fetching API data", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container">
      <div className="header">
        <h3>New Albums</h3>
        <button className="toggle-button" onClick={toggleExpanded}>
          {isExpanded ? "Collapse" : "Show More"}
        </button>
      </div>

    
        {loading ? (
          <div className="loading">Loading...</div>
        ) : apiData.length === 0 ? (
          <div className="noData">No Data Available</div>
        ) : isExpanded ? (
          <div className="wrapper grid-layout">
            {apiData?.map((album, index) => (
              <AreaCard
                key={album.id || index} // Unique key
                id={album.id}
                image={album.image}
                title={album.title}
                follows={album.follows}
                slug={album.slug}
              />
            ))}
          </div>
        ) : (
          <div id="carousel-layout">
            <Carousel
              responsive={{
                superLargeDesktop: {
                  breakpoint: { max: 4000, min: 3000 },
                  items: 10,
                },
                desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
                tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
                mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
              }}
              showDots={false}
              customTransition="all 0.5s ease-in-out"
              infinite={false}
              containerClass="carousel-container"
              itemClass="carousel-item-padding"
              renderButtonGroupOutside={false}
              arrows={true}
            >
              {apiData?.map((album, index) => (
                <AreaCard
                  key={album.id || index} // Unique key
                  id={album.id}
                  image={album.image}
                  title={album.title}
                  follows={album.follows}
                  slug={album.slug}
                />
              ))}
            </Carousel>
          </div>
        )}
      </div>
   
  );
}


