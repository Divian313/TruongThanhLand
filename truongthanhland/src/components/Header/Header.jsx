import {Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import MenuButton from "../Material/MenuButton/MenuButton";
import MenuButtonTest from "../Material/MenuButton/MenuButtonTest";
import PhoneNumberButton from "../Material/PhoneNumberButton/PhoneNumberButton";
import logo from "./image/logoTruongThanh.jpg";
const chuyenmau = keyframes`
  from {
    color: black;
  }
  to {
    color: #d07d0b;
  }
`
const hienra = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const WrapHeader = styled.div`
  display: flex;
  justify-content: space-between;
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
z-index: 99;

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
    animation: ${hienra} 0.3s forwards;
  }
`
const Header = () => {
  
  return (
    <div className="container-fluid">
      <WrapHeader className="text-center">
        {/* LOGO */}
        <Link to="/"><img src={logo} alt="" srcset="" style={{ width: 70, maxHeight: 60 }} /></Link>
        {/* MENU O GIUA */}
        <div className="d-none d-xl-block">
          <ul>
            <li>
              <Link to="/">TRANG CHỦ</Link>
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
            <DuAn>
              {/* <a href="">GIỎ HÀNG CHUYỂN NHƯỢNG</a> */}
              <Link to="/gio-hang-chuyen-nhuong">GIỎ HÀNG CHUYỂN NHƯỢNG</Link>
               <ListDuAn className="text-start">
                <li>
                  <a href="">Gio hang</a>
                </li>
                <li>
                  <a href="">Chuyen nhuong</a>
                </li>
                <li>
                  <a href="">Zeit River</a>
                </li>
              </ListDuAn>
            </DuAn>
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
        {/* PHONENUMBER */}
        <div className="">
          <PhoneNumberButton></PhoneNumberButton>
        </div>
        {/* MENU BUTTON */}
        <MenuButtonTest className="d-xl-none d-none"></MenuButtonTest>
      </WrapHeader>
    </div>
  );
};
export default Header;
