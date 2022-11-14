import { useState } from "react";
import styled from "styled-components";
import logo from "./image/logo-truongthanh.png";
const WrapHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    margin: 0;
    display: flex;
    justify-content: center;
    list-style: none;
  }

  a {
    display: block;
    font-family: "Open Sans", sans-serif;

    font-size: 1.1em;
    font-weight: 500;
    color: black;
    padding: 0 12px;
    text-decoration: none;
    white-space: nowrap;
  }
`;
const ListDuAn = styled.div`
  width: 270px;
  height: auto;
  transform: translate(5%, 30%);
  /* display: ${(props) => (props.chuotXuatHien && "block") || "none"}; */
  display: block;
  background-color: red;
  position: absolute;
  a {
    display: inline-block;
    margin-left: 0px;
    padding: 8px 10px;
  }
  li:before {
    content: "\f105";
    font-family: FontAwesome;
    display: inline;
    margin-left: 10px;
    width: 1.3em;
    z-index: 9;
  }
`;

const Header = () => {
  const [chuotVaoDuAn, setChuotVaoDuAn] = useState(false);
  const mouseMoveHandler = () => {
    setChuotVaoDuAn(true);
  };
  const mouseOutHandler = () => {
    setChuotVaoDuAn(false);
  };
  return (
    <div className="container-fluid">
      <WrapHeader className="row text-center">
        <div className="col-2">
          <img src={logo} alt="" srcset="" style={{ width: 100 }} />
        </div>
        <div className="col-8">
          <ul>
            <li>
              <a href="">TRANG CHỦ</a>
            </li>
            <li>
              <a
                onMouseOver={mouseMoveHandler}
                onMouseOut={mouseOutHandler}
                href=""
              >
                DỰ ÁN
              </a>
              <ListDuAn chuotXuatHien={chuotVaoDuAn} className="text-start">
                <li>
                  <a href="">Vinhomes</a>
                </li>
                <li>
                  <a href="">Zeit River</a>
                </li>
                <li>
                  <a href="">Zeit River</a>
                </li>
              </ListDuAn>
            </li>
            <li>
              <a href="">GIỎ HÀNG CHUYỂN NHƯỢNG</a>
            </li>
            <li>
              <a href="">TIN TỨC</a>
            </li>
            <li>
              <a href="">TUYỂN DỤNG</a>
            </li>
            <li>
              <a href="">LIÊN HỆ</a>
            </li>
          </ul>
        </div>
        <div className="col-2">check</div>
      </WrapHeader>
    </div>
  );
};
export default Header;
