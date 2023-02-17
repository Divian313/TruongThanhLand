import IMGapartment from "./Material/SVG/apartment-block-building-svgrepo-com.png";
import IMGoperator from "./Material/SVG/operator-svgrepo-com.png";
import IMGpark from "./Material/SVG/park-svgrepo-com.png";
import IMGlocation from "./Material/SVG/location-map-svgrepo-com.png";
import styled from "styled-components";
import MiniReason from "./Material/MiniReason";
import Logo from "./Material/Logo";
const Wrap = styled.div`
  font-family: "Quicksand", sans-serif;
`;

const H1 = styled.h1`
  /* white-space: nowrap; */

  margin-top: 20px;
  margin-bottom: 50px;
  font-weight: 600;
  font-size: 39px;
`;
const data = [
  {
    hinhanh: IMGapartment,
    tieude: "Sản phẩm đa dạng",
    text: "Với nhiều sản phẩm đa dạng trên toàn quốc chúng tôi luôn lựa chọn những sản phẩm đạt chất lượng và có tiềm năng cao",
  },
  {
    hinhanh: IMGoperator,
    tieude: "Hỗ trợ nhiệt tình 24/7",
    text: "Đội ngũ nhân viên trẻ và năng động luôn là thế mạnh của công ty chúng tôi chính và làm lên thương hiệu như ngày nay",
  },
  {
    hinhanh: IMGpark,
    tieude: "Mặt bằng giá tốt",
    text: "Không đội giá , không cò những sản phẩm phát triển của chủ đầu tư được chúng tôi lựa chọn với nhiều chính sách tốt nhất",
  },
  {
    hinhanh: IMGlocation,
    tieude: "Vị trí đắc địa",
    text: "Luôn đi đầu thị trường từ những ngày đầu , lựa chọn các dự án dẫn đầu xu hướng tăng tỉ lệ lợi nhuận cao cho khách hàng",
  },
];
const Reason = () => {
  const listItems = data.map((item) => (
    <MiniReason image={item.hinhanh} title={item.tieude} text={item.text} />
  ));

  return (
    <div className="container">
      <Logo />
      <Wrap>
        <H1 className="text-center">Lý do bạn lựa chọn chúng tôi</H1>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 d-flex justify-content-center">
            {listItems}
          </div>
        </div>
      </Wrap>
    </div>
  );
};
export default Reason;
