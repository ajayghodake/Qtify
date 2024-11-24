import * as React from "react";
import PropTypes from "prop-types"; // For type-checking
import Chip from "@mui/material/Chip";
import "./Card.css";

export default function AreaCard({ id, image, title, follows, slug}) {
  return (
    <>
 
        {/* <div className="container"> */}
          <div key={id} className="card-container">
            <div className="card-box">
              <img src={image} alt={title || "Album"} />
              <Chip id="chip" label={`${follows} follows`} />
            </div>
            <div id="slug">{slug || "Unknown"}</div>
          </div>
        {/* </div> */}
  

      {/* <a href="link">
        <div key={id} className="card">
          <div className="card_content">
            <img src={image} alt={title || "Album"} />
            <div className="card_followers">
              <p>${follows} follows</p>
            </div>
          </div>
        </div>
      </a> */}

    </>
  );
}

// Define prop types
AreaCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  follows: PropTypes.number.isRequired,
  slug: PropTypes.string,
};

// Default props
AreaCard.defaultProps = {
  slug: "Unknown",
};

