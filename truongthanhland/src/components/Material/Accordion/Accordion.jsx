import { useState } from "react";
import styled from "styled-components";
const H2 = styled.h2`
  margin: 0;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  border-bottom: 1px solid rgba(0,0,0, 0.2);
  
  a {
    width: 100%;
    display: flex;
    justify-content: space-between;
    

    font-weight: ${props => props.open ? '1000' : '100'};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }  
`;

const Button = styled.button`
  width: 10px;
  border: none;
  /* content: "+"; */
  
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
      setOpen(true)
    }
    setOpen(false)
  }
  return (
    <Wrap class="accordion" id="accordionPanelsStayOpenExample">
      {/* <div className="accordion-item">
        <H2>Trang chủ</H2>        
      </div> */}

      {/* DỰ ÁN */}
      <div class="accordion-item">
        <H2  class="accordion-header" id="panelsStayOpen-headingOne">
          <a open href="#">DỰ ÁN</a>
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
          <a style={{}} href="#">
            GIỎ HÀNG CHUYỂN NHƯỢNG
          </a>
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
        <a style={{  }} href="#">
          TIN TỨC
        </a>
      </H2>
      <H2>
        <a style={{  }} href="#">
          TUYỂN DỤNG
        </a>
      </H2>
      <H2>
        <a style={{  }} href="#">
          LIÊN HỆ
        </a>
      </H2>

      {/* <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div> */}
    </Wrap>
  );
};
export default Accordion;
