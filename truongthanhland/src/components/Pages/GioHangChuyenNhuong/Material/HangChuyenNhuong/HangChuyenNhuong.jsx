import { useState } from "react";
import House from "./House";
import IMGhouse1 from "../image/1.jpeg";
import IMGhouse2 from "../image/2.jpeg";
import { Link } from "react-router-dom";
import styled from "styled-components";
const WrapHouse = styled.div`
margin: 15px 0px;
`;
const HangChuyenNhuong = () => {
  const [houses, setHouses] = useState([
    {
      image: IMGhouse1,
      address: "House 1",
      floors: 3,
      area: 200,
      price: 1000000,
    },
    {
      image: IMGhouse2,
      address: "House 2",
      floors: 2,
      area: 150,
      price: 800000,
    },
    {
      image: IMGhouse1,
      address: "House 2",
      floors: 2,
      area: 150,
      price: 800000,
    },
    {
      image: IMGhouse2,
      address: "House 2",
      floors: 2,
      area: 150,
      price: 800000,
    },
    {
        image: IMGhouse2,
        address: "House 2",
        floors: 2,
        area: 150,
        price: 800000,
      },
      {
        image: IMGhouse2,
        address: "House 2",
        floors: 2,
        area: 150,
        price: 800000,
      },
      {
        image: IMGhouse2,
        address: "House 2",
        floors: 2,
        area: 150,
        price: 800000,
      },
  ]);
  return (
    <div className="container">
      <div className="row row-cols-3">
        {houses.map((house, index) => (
          <WrapHouse key={index} className="col-md-4">
            <House
              image={house.image}
              address={house.address}
              floors={house.floors}
              area={house.area}
              price={house.price}
            />
          </WrapHouse>
        ))}
      </div>
    </div>
  );
};
export default HangChuyenNhuong;
