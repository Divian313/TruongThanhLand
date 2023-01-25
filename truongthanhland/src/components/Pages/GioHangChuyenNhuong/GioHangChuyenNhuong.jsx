import { Link } from "react-router-dom";
import Footer from "../../Contents/Footer/Footer";
import Header from "../../Header/Header";
import ScrollHeader from "../../Header/ScrollHeader";
import HangChuyenNhuong from "./Material/HangChuyenNhuong/HangChuyenNhuong";
import styled from "styled-components";
const H1 = styled.h1`
  font-family: "Quicksand", sans-serif;
  margin: 30px 0;
`;
const Breadcrumb = styled.div`
  margin: 20px 50px;
`

const GioHangChuyenNhuong = () => {
  return (
    <>
      <ScrollHeader />
      <Header />
      <Breadcrumb>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">HOME</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
          GIỎ HÀNG CHUYỂN NHƯỢNG
          </li>
        </ol>
      </Breadcrumb>
      <H1 className="text-center">GIỎ HÀNG CHUYỂN NHƯỢNG</H1>
      <HangChuyenNhuong />
      <Footer />
    </>
  );
};
export default GioHangChuyenNhuong;
