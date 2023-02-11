import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Image = styled.img`
  width: 100%;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
const WrapImage = styled.div`
  width: 100%;
  overflow: hidden;
`;
const H5 = styled.h5`
  color: #000000;
  font-size: 16px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
const H4 = styled.h4`
  color: #af0202;
  font-family: "Quicksand", sans-serif;
  font-weight: bolder;
`;
const Cardbody = styled.div`
  p {
    display: inline;
  }
  i {
    margin: 0 0.7em;
  }
  figcaption {
    margin-top: 10px;
  }
`;

const House = (props) => {
  return (
    <div className="card">
      <WrapImage>
        <Image src={props.image} alt="" srcset="" />
      </WrapImage>

      <Cardbody className="card-body">
        <H5 className="card-title">{props.tensanpham}</H5>
        <H4 className="card-text">{props.mucgia} Tỷ</H4>
        {/* so phong ngu,nha ve sinh, dien tich. */}
        <p className="card-text">
          <i style={{ marginLeft: 0 }} class="fa fa-bed" aria-hidden="true"></i>
        </p>
        {props.phongngu}
        <p className="card-text">
          <i className="fa fa-bath"></i>
        </p>
        {props.wc}
        <p className="card-text">
          <i class="fa fa-map-o" aria-hidden="true"></i>
        </p>
        {props.dientich} m²
        <p style={{ color: "#838383", display: "block", fontSize: "0.9em" }}>
          {props.diachi}
        </p>
      </Cardbody>
    </div>
  );
};
export default House;
