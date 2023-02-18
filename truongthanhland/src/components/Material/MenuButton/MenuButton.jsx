import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Button = styled.button`
  background-color: white;
  /* width: 1.3rem; */
  margin-right: 1em;

  color: black;

  border: none;
  padding: 10px 20px;
  cursor: pointer;
  i {
    font-size: 16px;
  }
`;

const OffcanvasWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: rgba(0, 0, 0, 0.5); */
  z-index: 9999;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: visibility 0s, opacity 0.3s ease-in-out;
  overflow-wrap: break-word;
`;

const OffcanvasContent = styled.div`
  width: 80%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  /* padding: 20px; */
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 100;

  &.show {
    transform: translateX(0%);
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`;
const HeaderOffcanva = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fee060;
  h5 {
    color: white;
    padding: 5px 10px;
  }
  button {
    margin: 10px;
  }
`;

const H2 = styled.h2`
  margin: 0;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  font-size: 1em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  overflow-wrap: break-word;
  a {
    font-weight: ${(props) => (props.open ? "1000" : "100")};
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;

const Buttonn = styled.button`
  width: 10px;
  border: none;
`;
const Wrap = styled.div``;

function MenuButton() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleShow = () => setShowOffcanvas(true);
  const handleHide = () => setShowOffcanvas(false);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (open === false) {
      setOpen(true);
    }
    setOpen(false);
  };
  return (
    <div>
      <Button className="d-xl-none d-block m-0 p-0" onClick={handleShow}>
        <i class="fa fa-bars fs-3" aria-hidden="true"></i>
      </Button>
      <OffcanvasWrapper show={showOffcanvas} onClick={handleHide}>
        <OffcanvasContent className={showOffcanvas ? "show" : ""}>
          <HeaderOffcanva class="">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">
              DANH MỤC
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </HeaderOffcanva>
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
                {/* <Link to="/">DỰ ÁN</Link>  */}
                {/* <Buttonn
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
                </Buttonn> */}
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
                <Link to="/gio-hang-chuyen-nhuong">GIỎ HÀNG CHUYỂN NHƯỢNG</Link>
                {/* <a href="/gio-hang-chuyen-nhuong">GIỎ HÀNG CHUYỂN NHƯỢNG</a> */}
                {/* <Buttonn
                  style={{ width: 40 }}
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  +
                </Buttonn> */}
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
          </Wrap>{" "}
        </OffcanvasContent>
      </OffcanvasWrapper>
    </div>
  );
}

export default MenuButton;
