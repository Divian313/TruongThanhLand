import { useState } from "react";
import styled, { keyframes } from "styled-components";
import logo from "./image/logo-truongthanh.png";
const chuyenmau = keyframes`
  from {
    color: black;
  }
  to {
    color: #d07d0b;
  }
`
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
  a:hover {
    animation: ${chuyenmau} 0.5s forwards;
  }
`;

const ListDuAn = styled.div`
  width: 270px;
  height: auto;
  padding-top: 10px;
  transform: translate(5%, 0%);
  display: none;
  background-color: white;
  position: absolute;
  box-shadow: 5px 5px 5px rgb(0 0 0 / 30%);
  a {
    display: inline-block;
    /* font-weight: 100; */
    font-size: 16px;
    margin-left: 0px;
    padding: 10px 10px;
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
const DuAn = styled.li`
  &:hover  ${ListDuAn}{
    display: block;
  }
`
const Header = () => {
  
  return (
    <div className="container-fluid">
      <WrapHeader className="row text-center">
        <div className="col-2">
          <img src={logo} alt="" srcset="" style={{ width: 70 }} />
        </div>
        <div className="col-8">
          <ul>
            <li>
              <a href="">TRANG CHỦ</a>
            </li>
            <DuAn>
              <a               
                href=""
              >
                DỰ ÁN
              </a>
              <ListDuAn className="text-start">
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
            </DuAn>
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
