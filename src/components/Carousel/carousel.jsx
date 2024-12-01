// // Carousel.jsx
// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const CustomCarousel = ({
//   data,
//   renderCardItem,
//   responsiveConfig,
//   infinite = false,
//   showDots = false,
//   customTransition = "all 0.5s ease-in-out",
//   containerClass = "carousel-container",
//   itemClass = "carousel-item-padding",
//   arrows = true,
// }) => {
//   return (
//     <div className="slide" style={{ margin: "10px 0px 20px 0px" }}>
//       <Carousel
//         responsive={
//           responsiveConfig || {
//             superLargeDesktop: {
//               breakpoint: { max: 4000, min: 3000 },
//               items: 10,
//             },
//             desktop: { breakpoint: { max: 3000, min: 1024 }, items: 7 },
//             tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
//             mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
//           }
//         }
//         showDots={showDots}
//         customTransition={customTransition}
//         infinite={infinite}
//         containerClass={containerClass}
//         itemClass={itemClass}
//         arrows={arrows}
//         style={{ margin: "0 15px", padding: "10px" }}
//       >
//         {data?.map((item, index) => (
//           <div key={item.id || `item-${index}`}>
//             {renderCardItem(item, index)}
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default CustomCarousel;



import React, { useEffect } from 'react';
// Import Swiper React components and hooks
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselLeft from './CarouselLeft/CarouselLeft';
import CarouselRight from './CarouselRight/CarouselRight';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./Carousel.module.css";


// Import Navigation module
import { Navigation } from 'swiper/modules';

const Carousel = ({ data, renderCardItem }) => {
  return (
    <div className= "slide">
      <Swiper
        initialSlide={0}
        spaceBetween={20}
        slidesPerView={"auto"}
        modules={[Navigation]} // Enable Navigation module
        navigation={{
          prevEl: '.swiper-button-prev', // Custom left button
          nextEl: '.swiper-button-next', // Custom right button
        }}
        allowTouchMove
        breakpoints={{
          1024: { // Desktop
            slidesPerView: 7, // Show 7 cards
          },
          768: { // Tablet
            slidesPerView: 4, // Show 4 cards
          },
          480: { // Mobile
            slidesPerView: 2, // Show 2 cards
          },
        }}
      >
        {/* Left and Right Navigation */}
        <CarouselLeft />
        <CarouselRight />

        
        {data.map((item, index) => (
          <SwiperSlide key={index}>{renderCardItem(item)}</SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}

export default Carousel;







// import React from "react";
// import Swiper from "swiper";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/free-mode";


// const CustomCarousel = ({
//   data,
//   renderCardItem,
//   responsiveConfig,
//   infinite = false,
//   showDots = false,
//   customTransition = "all 0.5s ease-in-out",
//   containerClass = "carousel-container",
//   itemClass = "carousel-item-padding",
//   arrows = true,
// }) => {
//   // Initialize Swiper on component mount
//   React.useEffect(() => {
//     const swiper = new Swiper(`.${containerClass}`, {
//       modules: [Navigation, Pagination],
//       spaceBetween: 10,  // Adjust space between items
//       slidesPerView: 7,  // Default to 7 items for desktop
//       navigation: arrows,
//       grabCursor: true,
//       pagination: {
//         el: `.${containerClass} .swiper-pagination`,
//         clickable: true,
//         type: showDots ? 'bullets' : 'none',
//       },
//       loop: infinite,
//       speed: 500,
//       breakpoints: {
//         // Desktop: 7 items
//         1024: {
//           slidesPerView: 7,
//         },
//         // Tablet: 4 items
//         768: {
//           slidesPerView: 4,
//         },
//         // Mobile: 2 items
//         480: {
//           slidesPerView: 2,
//         },
//       },
//     });

//   }, [responsiveConfig, infinite, showDots, arrows, containerClass]);

//   return (
//     <div className="slide" style={{ margin: "10px 0px 20px 0px" }}>
//       <div className={containerClass} style={{ overflow: "hidden" }}>
//         {/* Swiper Container */}
//         <div className="swiper-wrapper">
//           {data?.map((item, index) => (
//             <div className="swiper-slide" key={item.id || `item-${index}`}>
//               {renderCardItem(item, index)}
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         {showDots && <div className="swiper-pagination"></div>}
//       </div>
//     </div>
//   );
// };

// export default CustomCarousel;













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
