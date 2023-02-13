import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../Contents/Footer/Footer";
import Header from "../../../Header/Header";
import BreadcrumbNav from "../../../Material/Breadcrumb/Breadcrumb";
import Database from "../Material/Database/Database";
import HinhAnhPhongTo from "./Material/Swiper/HinhAnhPhongTo/HinhAnhPhongTo";
import SlideSwiper from "./Material/Swiper/SildeSwiper";
import SlideHinhAnh from "./Material/Swiper/SlideHinhAnh";
import SlideHinhAnhBT from "./Material/Swiper/SlideHinhAnhBT";
const ItemDetailPage = () => {
  const [houses, setHouses] = useState(Database);
  const { id } = useParams();
  const house = houses.find((item) => item.id === id);
  return (
    <>
      <Header />
      {/* <SlideHinhAnh></SlideHinhAnh> */}
      {/* <SlideHinhAnhBT></SlideHinhAnhBT> */}
      <SlideSwiper></SlideSwiper>
      <BreadcrumbNav />
      {house && (
        <>
          <img src={house.image[0]} alt={house.diachi} />
          <p>Address: {house.diachi}</p>
          <p>Floors: {house.sotang}</p>
          <p>Area: {house.dientich}</p>
          <p>Price: {house.mucgia}</p>
        </>
      )}
      <HinhAnhPhongTo></HinhAnhPhongTo>
      <Footer />
    </>
  );
};
export default ItemDetailPage;
