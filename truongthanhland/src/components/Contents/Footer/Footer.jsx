import IMGlogo from "./image/logo-truongthanh.png";

import styled from "styled-components";
import IconPhone from "./Material/IconPhone";
import IconZalo from "./Material/IconZalo";

const Icon = styled.div`
  width: 50px;
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
      <Wrap className="container row row-cols-3 m-auto mt-3">
        <div className="col-2">
          <img src={IMGlogo} alt="" srcset="" />
        </div>
        <div className="col-7">
          <h5 style={{ color: "red", fontWeight: 1000, marginBottom: 20 }}>
            CÔNG TY TNHH DỊCH VỤ BẤT ĐỘNG SẢN TRƯỜNG THÀNH
          </h5>
          <UL>
            <li>
              <P>Mã số thuế</P>: 1234567798
            </li>
            <li>
              <P>Địa chỉ</P>: 1234567798
            </li>
            <li>
              <P>Điện thoại</P>: 1234567798
            </li>
            <li>
              <P>Email</P>: 1234567798
            </li>
          </UL>
        </div>
        <WrapInfo className="col-3">
          <H5>GIỚI THIỆU</H5>
          <li className="mb-3">
            <a href="#">Thông tin công ty</a>
          </li>
          <H5>THÔNG TIN</H5>
          <li>
            <a href="#">Chế độ bảo hành</a>
          </li>
          <li>
            <a href="#">Chính sách bảo mật</a>
          </li>
          <li>
            <a href="#">Điều khoản sử dụng</a>
          </li>
          <a href="">
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
          </a>
          <i class="fa fa-youtube-square" aria-hidden="true"></i>
        </WrapInfo>
      </Wrap>
      <Icon className="Icon position-fixed ">
        <a href="tel:0901563356"><IconPhone></IconPhone></a>
        <a href="zalo://chat?id="><IconZalo></IconZalo></a>
      </Icon>
      
    </div>
  );
};
export default Footer;

// href="tel:0901563356"
