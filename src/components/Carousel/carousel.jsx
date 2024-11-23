// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "./carousel.css";
// import Chip from "@mui/material/Chip";
// import '../Card/Card.css'

// export default function SpringSlider({ data }) {
//   return (
//     <Swiper
//       modules={[Navigation]}
//       spaceBetween={20}
//       slidesPerView={4}
//       navigation={{
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       }}
//       loop={false}
//       breakpoints={{
//         320: { slidesPerView: 2 }, // Mobile
//         768: { slidesPerView: 3 }, // Tablet
//         1024: { slidesPerView: 6 }, // Desktop
//       }}
//     >
//       {data.map((item, index) => (
//         <SwiperSlide key={index} className="swiper-slide">
//           <div className="main">
//             <div className="container">
//               <div key={item.id} className="card-container">
//                 <div className="card-box">
//                   <img src={item.image} alt={item.title || "Album"} />
//                   <Chip id="chip" label={`${item.follows} follows`} />
//                 </div>
//                 <div id="slug">{item.slug || "Unknown"}</div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//       {/* Custom navigation buttons */}
//       <button className="swiper-button-prev">&lt;</button>
//       <button className="swiper-button-next">&gt;</button>
//     </Swiper>
//   );
// }
