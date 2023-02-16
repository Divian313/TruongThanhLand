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
const Table = (props) => {
  return (
    <>
      <table class="table">
        <tbody>
          <tr className="row row-cols-2 row-cols-lg-4 ms-3">
            <td>
              <span class="s-title">
                <i class="me-2 fa fa-map-o"></i> Diện tích
              </span>
            </td>
            <td>
              <span class="val">
                {props.dientich} m<sup>2</sup>
              </span>
            </td>
            <td>
              <span class="s-title">
                <i class="me-2 fa fa-usd"></i> Mức giá
              </span>{" "}
            </td>
            <td>
              <span class="val">{props.mucgia} Tỷ</span>
            </td>
          </tr>
          <tr className="row row-cols-2 row-cols-lg-4 ms-3">
            <td>
              <span class="s-title">
                <i class="me-2 fa fa-bed"></i> Số phòng ngủ
              </span>
            </td>
            <td>
              <span class="val">{props.phongngu} phòng</span>
            </td>
            <td>
              <span class="s-title">
                <i class="me-2 fa fa-bath"></i> Số toilet/Phòng tắm
              </span>{" "}
            </td>
            <td>
              <span class="val">{props.wc} phòng </span>
            </td>
          </tr>

          <tr className="row row-cols-2 row-cols-lg-4 ms-3">
            <td>
              <span class="s-title">
                <i class="me-2 fa fa-compass"></i> Hướng nhà
              </span>{" "}
            </td>
            <td>
              <span class="val">{props.huongnha} </span>
            </td>
            <td>
              <span class="s-title">
                <i class="me-2 fa fa-compass"></i> Hướng ban công
              </span>
            </td>
            <td>
              <span class="val">{props.huongbancong}</span>
            </td>
          </tr>
          {/* ----------------------------------- */}
          <tr className="row row-cols-2 row-cols-lg-4 ms-3">
            <td>
              <span class="s-title">
                <i class="me-2 fa fa-archive"></i> Nội thất
              </span>
            </td>
            <td>
              <span class="val">{props.noithat} </span>
            </td>
            <td>
              <span class="s-title">
                <i class="me-2 fa  fa fa-check-square-o"></i> Trạng thái
              </span>
            </td>
            <td>
              <span class="val"> {props.trangthai} </span>
            </td>
          </tr>
          <tr className="row row-cols-2 row-cols-lg-4 ms-3">
            <td>
              <span class="s-title">
                <i class="me-2 fa  fa fa-check-square-o"></i> Số tầng
              </span>
            </td>
            <td>
              <span class="val"> {props.sotang} Tầng</span>
            </td>
            <td>
              <span class="s-title">
                <i class="me-2 fa  fa fa-check-square-o"></i> Mặt tiền
              </span>
            </td>
            <td>
              <span class="val"> {props.mattien} m</span>
            </td>
          </tr>
          <tr className="row row-cols-2 row-cols-lg-4 ms-3">
            <td>
              <span class="s-title">
                <i class="me-2 fa  fa fa-check-square-o"></i> Đường vào
              </span>
            </td>
            <td>
              <span class="val"> {props.duongvao} m</span>
            </td>
            <td>
              <span class="s-title">
                <i class="me-2 fa  fa fa-check-square-o"></i> Kích thước sàn
              </span>
            </td>
            <td>
              <span class="val">{props.kichthuocsan} m</span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
const ThongTinCore = (props) => {
  const WrapCore = styled.div`
    width: 100%;
    height: fit-content;
    /* display: flex;
    align-items: center; */
    /* justify-content: space-between; */
    background-color: #f4f4f4;
    font-weight: bold;
    p {
      color: gray;
    }
  `;
  const StyleRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  return (
    <WrapCore className="container my-5">
      <StyleRow className="row row-cols-sm-4 row-cols-2 m-3 p-3">
        <div className="col">
          <p>Mức giá</p>
          <div>{props.mucgia}</div>
        </div>
        <div className="col">
          <p>Diện tích</p>
          <div>{props.dientich}</div>
        </div>
        <div className="col mt-4 mt-sm-0">
          <p>Phòng ngủ</p>
          <div>{props.phongngu}</div>
        </div>
        <div className="col mt-4 mt-sm-0">
          <p>Kích thước</p>
          <div>{props.kichthuocsan}</div>
        </div>
      </StyleRow>
    </WrapCore>
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
            <ThongTinCore
              mucgia={house.mucgia}
              dientich={house.dientich}
              phongngu={house.phongngu}
              kichthuocsan={house.kichthuocsan}
            />
            <p>- {house.diachi}</p>
            <TitleH2 title="Thông tin cơ bản" />
            <Table
              dientich={house.dientich}
              mucgia={house.mucgia}
              phongngu={house.phongngu}
              wc={house.wc}
              huongnha={house.huongnha}
              huongbancong={house.huongbancong}
              noithat={house.noithat}
              trangthai={house.trangthai}
              sotang={house.sotang}
              mattien={house.mattien}
              duongvao={house.duongvao}
              kichthuocsan={house.kichthuocsan}
            />
            <TitleH2 title="Hình ảnh" />
            <i> (Click vào ảnh để phóng to)</i>
            <StyleBoder></StyleBoder>
            <HinhAnhPhongTo></HinhAnhPhongTo>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};
export default ItemDetailPage;
