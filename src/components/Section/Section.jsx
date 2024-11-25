import * as React from "react";
import { useState } from "react";
// import Api from "../../api/api.js";
import AreaCard from "../Card/Card.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgress } from '@mui/material';
import './Section.css';
import noDataImage from "./nodata.png";
// import './topAlbum.css'
// import axios from "axios";

export default function Section({type, title, data, toggle = true}) {
  // const [apiData, setApiData] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(false);

 

  // console.log("Data Lenght", data.length);

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

    
        {loading ? (
          <div className="loading">
            <CircularProgress />
          </div>
          
        ) : data.length === 0 ? (
          <div className="noData">
            <img className="noDataImg" src={noDataImage} alt="no data found" />
            No Data Available
          </div>
        ) : isExpanded ? (
          <div className="wrapper grid-layout">
            {data?.map((album, index) => (
              <AreaCard
                data={album}
                type={type}
                key={album.id || index}
              />
            ))}
          </div>
        ) : (
    
            <Carousel
              responsive={{
                superLargeDesktop: {
                  breakpoint: { max: 4000, min: 3000 },
                  items: 10,
                },
                desktop: { breakpoint: { max: 3000, min: 1024 }, items: 7 },
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
              style={{
                transform: "translate3d(33px, 0px, 0px)",
              }}
            >
              {data?.map((album, index) => (
                <AreaCard
                data={album}
                type={type}
                key={album.id || index}
                />
              ))}
            </Carousel>
   
        )}
      </div>
   
  );
}


