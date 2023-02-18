import IMGlogo from "./image/logoTruongThanh.jpg";
import IconMess from "./Material/IconMess";
import styled from "styled-components";
import IconPhone from "./Material/IconPhone";
import IconZalo from "./Material/IconZalo";
import GoToTopButton from "../../Material/GoTopButton/GoTopButton";

const Icon = styled.div`
  width: 45px;
  height: 200px;
  /* background-color: #dfd2d2; */
  z-index: 99;
  bottom: 50px;
  right: 10px;
`;

const Hotline = styled.div`
  width: 100%;
  background: linear-gradient(45deg, #d07d0b, #ffc913);
  font-size: 2rem;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  a {
    color: white;
    text-decoration: none;
  }
`;
const P = styled.p`
  margin: 0;

  font-size: 18px;
  display: inline-block;
  font-weight: 700 !important;
`;
const H5 = styled.h5`
  font-weight: 500;
  margin-bottom: 15px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
const Wrap = styled.div`
  font-family: "Crimson Text", serif;
  font-weight: 400;
  img {
    width: 100%;
  }
`;
const UL = styled.ul`
  li {
  }
`;
const WrapInfo = styled.div`
  font-family: "Crimson Text", serif;
  white-space: nowrap;
  ul {
    margin-left: 15px;
  }
  a {
    font-size: 1.1rem;
    color: black;
    text-decoration: none;
  }
  i {
    margin: 5px 10px;
    font-size: 2.5em;
  }
`;

const Footer = () => {
  return (
    <div className="w-100 mt-5 position-relative">
      <Hotline className="text-center">
        <a href="tel:0901563356">Hotline: 0901 563 356</a>
      </Hotline>
      <Wrap className="container-lg container-fluid row row-cols-3 m-auto mt-3">
        <div className="col-lg-2 col-12">
          <img src={IMGlogo} alt="" srcset="" />
        </div>
        <div className="col-lg-7 col-12">
          <h5 style={{ color: "red", fontWeight: 1000, marginBottom: 20 }}>
            CÔNG TY TNHH DỊCH VỤ BẤT ĐỘNG SẢN TRƯỜNG THÀNH
          </h5>
          <UL>
            <li>
              <P>Mã số thuế</P>: 0317334114
            </li>
            <li>
              <P>Địa chỉ</P>: Số D2A-43, Đường Nguyễn Xiển, Phường Long Thạnh
              Mỹ, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
            </li>
            <li>
              <P>Điện thoại</P>: 0909116262
            </li>
            <li>
              <P>Email</P>: phanthanhtung.270890@gmail.com
            </li>
          </UL>
        </div>
        <WrapInfo className="col-lg-3 col-12">
          <H5>GIỚI THIỆU</H5>
          <ul>
            <li className="mb-3">
              <a href="#">Thông tin công ty</a>
            </li>
          </ul>
          <H5>THÔNG TIN</H5>
          <ul>
            <li>
              <a href="#">Chế độ bảo hành</a>
            </li>
            <li>
              <a href="#">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="#">Điều khoản sử dụng</a>
            </li>
          </ul>
          <ul className="text-center">
            <a href="https://www.facebook.com/tung.phan.988">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
            <a href="https://www.facebook.com/tung.phan.988">
              <i class="fa fa-youtube-square" aria-hidden="true"></i>
            </a>
          </ul>
        </WrapInfo>
      </Wrap>
      <Icon className="Icon position-fixed ">
        <a href="tel:0901563356">
          <IconPhone></IconPhone>
        </a>
        <a id="zalotest" href="https://chat.zalo.me/?phone=0901563356">
          <IconZalo></IconZalo>
        </a>
        <a href="https://www.facebook.com/tung.phan.988">
          <IconMess></IconMess>
        </a>
        <GoToTopButton />
      </Icon>
    </div>
  );
};
export default Footer;

// href="tel:0901563356"
