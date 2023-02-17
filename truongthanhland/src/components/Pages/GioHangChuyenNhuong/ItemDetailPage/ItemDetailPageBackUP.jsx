import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../Contents/Footer/Footer";
import Header from "../../../Header/Header";
import BreadcrumbNav from "../../../Material/Breadcrumb/Breadcrumb";
import Database from "../Material/Database/Database";
import HinhAnhPhongTo from "./Material/Swiper/HinhAnhPhongTo/HinhAnhPhongTo";
import SlideSwiper from "./Material/Swiper/SildeSwiper";
import styled from "styled-components";
import SlideHinhAnh from "./Material/Swiper/SlideHinhAnh";
import SlideHinhAnhBT from "./Material/Swiper/SlideHinhAnhBT";
import ContentComponent from "../../../Material/ContentComponent/ContentComponent";
import FormThongTin from "../../../Material/FormThongTin/FormThongTin";
const H1 = styled.h1`
  margin: 30px 0;
  padding-top: 10px;
  font-family: "Quicksand", sans-serif;
  color: #d07d0b;
  text-transform: uppercase;
  font-size: 35px;
  /* font-family: avertaBold; */
  background: -webkit-linear-gradient(rgb(160, 96, 8), #d07d0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 1000;
`;
const H2 = styled.h2`
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  margin: 0;
  p {
    line-height: 1;
    margin: 0;
  }
`;
const StyleBoder = styled.div`
  width: 100%;
  /* border: 2px solid; */
  display: inline-block;
`;
const HR = styled.hr`
  /* margin: 0; */
  /* padding-top: 20px; */
`;
const Wrap = styled.div`
  border-bottom: 1px solid gray;
  opacity: 0.5;
`;
const TitleH2 = (props) => {
  return (
    <>
      <div className="row container mt-5 mb-5">
        <Wrap className="col-1 p-0 m-0 "></Wrap>
        <div className="col-auto p-0 m-0">
          <H2>
            <p>{props.title}</p>
          </H2>
        </div>
        <Wrap className="col p-0 m-0 "></Wrap>
      </div>
    </>
  );
};
const Table = () => {
  return (
    <>
      <table class="table">
        <tbody>
          <tr className="row row-cols-1 row-cols-sm-2">
            <td>
              <span class="s-title">
                <i class="fa fa-map-o"></i> Diện tích
              </span>
            </td>
            <td>
              <span class="val">
                293 m<sup>2</sup>
              </span>
            </td>
            <td>
              <span class="s-title">
                <i class="fa fa-usd"></i> Mức giá
              </span>{" "}
            </td>
            <td>
              <span class="val">54 Tỷ</span>
            </td>
          </tr>
          <tr className="row row-cols-1 row-cols-sm-2">
            <td>
              <span class="s-title">
                <i class="fa fa-bed"></i> Số phòng ngủ
              </span>
            </td>
            <td>
              <span class="val">4 phòng</span>
            </td>
            <td>
              <span class="s-title">
                <i class="fa fa-bath"></i> Số toilet/Phòng tắm
              </span>{" "}
            </td>
            <td>
              <span class="val">3 phòng </span>
            </td>
          </tr>

          <tr className="row row-cols-1 row-cols-sm-2">
            <td>
              <span class="s-title">
                <i class="fa fa-compass"></i> Hướng nhà
              </span>{" "}
            </td>
            <td>
              <span class="val">Đông Nam </span>
            </td>
            <td>
              <span class="s-title">
                <i class="fa fa-compass"></i> Hướng ban công
              </span>
            </td>
            <td>
              <span class="val">Đông Nam </span>
            </td>
          </tr>
          {/* ----------------------------------- */}
          <tr className="row row-cols-1 row-cols-sm-2">
            <td>
              <span class="s-title">
                <i class="fa fa-archive"></i> Nội thất
              </span>
            </td>
            <td>
              <span class="val">Bàn giao cơ bản </span>
            </td>
            <td>
              <span class="s-title">
                <i class="fa  fa fa-check-square-o"></i> Trạng thái
              </span>
            </td>
            <td>
              <span class="val"> Đã bàn giao </span>
            </td>
          </tr>
          <tr className="row row-cols-1 row-cols-sm-2">
            <td>
              <span class="s-title">
                <i class="fa  fa fa-check-square-o"></i> Số tầng
              </span>
            </td>
            <td>
              <span class="val"> 3 Tầng</span>
            </td>
            <td>
              <span class="s-title">
                <i class="fa  fa fa-check-square-o"></i> Mặt tiền
              </span>
            </td>
            <td>
              <span class="val"> 10 m</span>
            </td>
          </tr>
          <tr className="row row-cols-1 row-cols-sm-2">
            <td>
              <span class="s-title">
                <i class="fa  fa fa-check-square-o"></i> Đường vào
              </span>
            </td>
            <td>
              <span class="val"> 13 m</span>
            </td>
            <td>
              <span class="s-title">
                <i class="fa  fa fa-check-square-o"></i> Kích thước sàn
              </span>
            </td>
            <td>
              <span class="val">10 x 29 m</span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
const Tablee = () => {
  return (
    <>
      <div class="mb-4">
        <ul class="list-dacdiem list-unstyled">
          <li>
            <span class="s-title">
              <i class="fa fa-map-o"></i> Diện tích
            </span>{" "}
            <span class="val">
              293 m<sup>2</sup>
            </span>
          </li>
          <li>
            <span class="s-title">
              <i class="fa fa-usd"></i> Mức giá
            </span>{" "}
            <span class="val">54 Tỷ</span>
          </li>
          <li>
            <span class="s-title">
              <i class="fa fa-bed"></i> Số phòng ngủ
            </span>{" "}
            <span class="val">4 phòng</span>
          </li>
          <li>
            <span class="s-title">
              <i class="fa fa-bath"></i> Số toilet/Phòng tắm
            </span>{" "}
            <span class="val">3 phòng </span>
          </li>
          <li>
            <span class="s-title">
              <i class="fa fa-compass"></i> Hướng nhà
            </span>{" "}
            <span class="val">Đông Nam </span>
          </li>
          <li>
            <span class="s-title">
              <i class="fa fa-compass"></i> Hướng ban công
            </span>{" "}
            <span class="val">Đông Nam </span>
          </li>
          <li>
            <span class="s-title">
              <i class="fa fa-archive"></i> Nội thất
            </span>{" "}
            <span class="val">Bàn giao cơ bản </span>
          </li>
          <li>
            <span class="s-title">
              <i class="fa  fa fa-check-square-o"></i> Trạng thái
            </span>{" "}
            <span class="val"> Đã bàn giao </span>
          </li>
          <li>
            <span class="s-title">
              <i class="fa  fa fa-check-square-o"></i> Số tầng
            </span>{" "}
            <span class="val"> 3 Tầng</span>
          </li>
          <li>
            <span class="s-title">
              <i class="fa  fa fa-check-square-o"></i> Mặt tiền
            </span>{" "}
            <span class="val"> 10 m</span>
          </li>
          <li>
            <span class="s-title">
              <i class="fa  fa fa-check-square-o"></i> Đường vào
            </span>{" "}
            <span class="val"> 13 m</span>
          </li>
          <li>
            <span class="s-title">
              <i class="fa  fa fa-check-square-o"></i> Kích thước sàn
            </span>{" "}
            <span class="val">10 x 29 m</span>
          </li>
        </ul>
      </div>
    </>
  );
};
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
      <div className="container">
        <BreadcrumbNav />
        {house && (
          <>
            {/* <img src={house.image[0]} alt={house.diachi} />
            <p>Address: {house.diachi}</p>
            <p>Floors: {house.sotang}</p>
            <p>Area: {house.dientich}</p>
            <p>Price: {house.mucgia}</p> */}
            <H1>{house.tensanpham}</H1>
            <p>- {house.diachi}</p>
            <TitleH2 title="Thông tin cơ bản" />
            <Table />
            <TitleH2 title="Hình ảnh" />
            <i> (Click vào ảnh để phóng to)</i>
            <StyleBoder></StyleBoder>
            <HinhAnhPhongTo></HinhAnhPhongTo>
          </>
        )}
      </div>
      <ContentComponent title="YÊU CẦU TƯ VẤN">
        <FormThongTin />
      </ContentComponent>
      <Footer />
    </>
  );
};
export default ItemDetailPage;
