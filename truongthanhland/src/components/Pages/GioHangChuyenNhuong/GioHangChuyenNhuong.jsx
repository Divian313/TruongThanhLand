import { Link } from "react-router-dom";
import Footer from "../../Contents/Footer/Footer";
import Header from "../../Header/Header";
import ScrollHeader from "../../Header/ScrollHeader";
import HangChuyenNhuong from "./Material/HangChuyenNhuong/HangChuyenNhuong";
import styled from "styled-components";
import BreadcrumbNav from "../../Material/Breadcrumb/Breadcrumb";
const H1 = styled.h1`
  margin: 30px 0;
  padding-top: 10px;
  font-family: "Quicksand", sans-serif;
  color: #d07d0b;
    text-transform: uppercase;
    font-size: 35px;
    /* font-family: avertaBold; */
    background: -webkit-linear-gradient(rgb(160, 96, 8),#d07d0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 1000;
`;
const Breadcrumb = styled.div`
  margin: 20px 50px;
`

const GioHangChuyenNhuong = () => {
  return (
    <>
      <ScrollHeader />
      <Header />
      {/* <Breadcrumb>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">HOME</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
          GIỎ HÀNG CHUYỂN NHƯỢNG
          </li>
        </ol>
      </Breadcrumb> */}
      <BreadcrumbNav/>
      <H1 className="text-center">GIỎ HÀNG CHUYỂN NHƯỢNG</H1>
      <HangChuyenNhuong />
      <Footer />
    </>
  );
};
export default GioHangChuyenNhuong;
