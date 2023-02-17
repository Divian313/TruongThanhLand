import { Link } from "react-router-dom";

import { useState } from "react";
import styled from "styled-components";
const H2 = styled.h2`
  margin: 0;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  font-size: 1em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  overflow-wrap: break-word;
  a {
    /* width: 10%; */
    /* display: flex; */
    /* justify-content: space-between; */

    font-weight: ${(props) => (props.open ? "1000" : "100")};
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;

const Button = styled.button`
  width: 10px;
  border: none;
  /* content: "+";  */
`;
const Wrap = styled.div`
  a {
    /* color: red; */
    /* font-weight: bold; */
    /* width: 100%;
    border-bottom: 2px solid black; */
  }
`;
const Accordion = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (open === false) {
      setOpen(true);
    }
    setOpen(false);
  };
  return (
    <Wrap class="accordion" id="accordionPanelsStayOpenExample">
      {/* <div className="accordion-item">
        <H2>Trang chủ</H2>        
      </div> */}

      {/* DỰ ÁN */}
      <div class="accordion-item">
        <H2 class="accordion-header" id="panelsStayOpen-headingOne">
          <a open href="/">
            DỰ ÁN
          </a>
          {/* <Link to="/">DỰ ÁN</Link> */}
          <Button
            onClick={handleClick}
            style={{ width: 40 }}
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseOne"
          >
            +
          </Button>
        </H2>
        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div class="accordion-body">
            <H2>
              <a href="">VINHOME GRAND PARK</a>
            </H2>
            <H2>
              <a href="">ZEIT RIVER</a>
            </H2>
          </div>
        </div>
      </div>
      {/* GIỎ HÀNG CHUYỂN NHƯỢNG */}
      <div class="accordion-item">
        <H2 class="accordion-header" id="panelsStayOpen-headingTwo">
          {/* <Link to="/gio-hang-chuyen-nhuong">GIỎ HÀNG CHUYỂN NHƯỢNG</Link> */}
          <a href="/gio-hang-chuyen-nhuong">GIỎ HÀNG CHUYỂN NHƯỢNG</a>
          <Button
            style={{ width: 40 }}
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            +
          </Button>
        </H2>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div class="accordion-body">
            <H2>
              <a href="">NHÀ PHỐ, BIỆT THỰ, SHOP</a>
            </H2>
            <H2>
              <a href="">CĂN HỘ</a>
            </H2>
            <H2>
              <a href="">CHO THUÊ</a>
            </H2>
          </div>
        </div>
      </div>
      <H2>
        <a style={{}} href="#">
          TIN TỨC
        </a>
      </H2>
      <H2>
        <a style={{}} href="#">
          TUYỂN DỤNG
        </a>
      </H2>
      <H2>
        <a style={{}} href="#">
          LIÊN HỆ
        </a>
      </H2>
    </Wrap>
  );
};
export default Accordion;
