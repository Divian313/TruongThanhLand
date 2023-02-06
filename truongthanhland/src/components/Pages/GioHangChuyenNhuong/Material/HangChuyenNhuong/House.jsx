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
  height: 50%;
  overflow: hidden;
`;
const House = (props) => {
  return (
    <div className="card">
      <WrapImage>
        <Image src={props.image} alt="" srcset="" />
      </WrapImage>

      <div className="card-body">
        <h5 className="card-title">{props.diachi}</h5>
        <p className="card-text">Floors: {props.sotang}</p>
        <p className="card-text">Area: {props.dientich}</p>
        <p className="card-text">Price: {props.mucgia}</p>
      </div>
    </div>
  );
};

export default House;
