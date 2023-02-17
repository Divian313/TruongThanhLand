import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Database from "../../../../Material/Database/Database";

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s;

  &.is-open {
    position: fixed;
    width: 75%;
    top: 50%;
    left: 50%;
    /* top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
    transform: translate(-50%, -50%);

    z-index: 10;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 0.3s;
  opacity: 0;
  z-index: 9;

  &.is-open {
    opacity: 1;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 11;
`;

function Image({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledImage
        src={src}
        alt={alt}
        onClick={handleClick}
        className={isOpen ? "is-open" : ""}
      />
      {isOpen && (
        <>
          <Overlay className="is-open" onClick={handleClick} />
          {/* <CloseButton onClick={handleClick}>Close</CloseButton> */}
        </>
      )}
    </>
  );
}

const HinhAnhPhongTo = () => {
  const [houses, setHouses] = useState(Database);
  const { id } = useParams();
  const house = houses.find((item) => item.id === id);
  return (
    <div className="row row-cols-md-2 row-cols-1 row-cols-lg-3">
      {house.image.map((img, index) => (
        <div className="col mt-4">
          <Image src={img} alt="Image" />
        </div>
      ))}
    </div>
  );
};

export default HinhAnhPhongTo;
