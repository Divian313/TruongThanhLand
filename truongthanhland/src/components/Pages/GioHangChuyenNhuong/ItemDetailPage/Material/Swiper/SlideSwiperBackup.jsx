import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled, { StyledComponent } from "styled-components";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Database from "../../../Material/Database/Database";
import { useParams } from "react-router-dom";

const StyleSwiper = styled(Swiper)`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`;
const StyleSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const SlideSwiper = () => {
  const [houses, setHouses] = useState(Database);
  const { id } = useParams();
  const house = houses.find((item) => item.id === id);
  return (
    <>
      <StyleSwiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {house.image.map((img, index) => (
          <StyleSwiperSlide>
            <img key={index} src={img} />
          </StyleSwiperSlide>
        ))}
      </StyleSwiper>
    </>
  );
};
export default SlideSwiper;
