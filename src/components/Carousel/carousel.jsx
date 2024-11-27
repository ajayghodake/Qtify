// Carousel.jsx
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomCarousel = ({
  data,
  renderCardItem,
  responsiveConfig,
  infinite = false,
  showDots = false,
  customTransition = "all 0.5s ease-in-out",
  containerClass = "carousel-container",
  itemClass = "carousel-item-padding",
  arrows = true,
}) => {
  return (
    <div className="slide" style={{ margin: "20px 0px 0px 0px" }}>
      <Carousel
        responsive={
          responsiveConfig || {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 10,
            },
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 7 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
          }
        }
        showDots={showDots}
        customTransition={customTransition}
        infinite={infinite}
        containerClass={containerClass}
        itemClass={itemClass}
        arrows={arrows}
        style={{ margin: "0 15px", padding: "10px" }}
      >
        {data?.map((item, index) => (
          <div key={item.id || `item-${index}`}>
            {renderCardItem(item, index)}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;

// import * as React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import AreaCard from "../Card/Card.jsx";

// const AreaCarousel = ({ data, renderCards, type }) => {
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 10,
//     },
//     desktop: { breakpoint: { max: 3000, min: 1024 }, items: 7 },
//     tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
//     mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
//   };

//   return (
//     <Carousel
//     responsive={responsive}
//     showDots={false}
//     customTransition="all 0.5s ease-in-out"
//     infinite={false}
//     containerClass="carousel-container"
//     itemClass="carousel-item-padding"
//     renderButtonGroupOutside={false}
//     arrows={true}
//     style={{
//       transform: "translate3d(33px, 0px, 0px)",
//     }}
//   >
//     {data?.map((album, index) => (
//       <AreaCard
//       data={album}
//       type={type}
//       key={album.id || index}
//       />
//     ))}
//   </Carousel>
//   )
// };

// export default AreaCarousel;
