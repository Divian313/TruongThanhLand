import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styled from "styled-components";
// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
const StyleSwiper = styled(Swiper)`
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
`;
const ImageModal = ({ src, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <img src={src} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
const SlideHinhAnh = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
  };
  return (
    <>
      {modalOpen && (
        <ImageModal src={selectedImage} onClose={() => setModalOpen(false)} />
      )}
      <StyleSwiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-5.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-6.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-7.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-8.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-9.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-10.jpg"
          />
        </SwiperSlide>
      </StyleSwiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-5.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-6.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-7.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-8.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-9.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
            src="https://swiperjs.com/demos/images/nature-10.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SlideHinhAnh;
