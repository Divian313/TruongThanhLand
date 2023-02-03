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
      id: 1,
      image: IMGhouse1,
      address: "House 1",
      floors: 3,
      area: 200,
      price: 1000000,
    },
    {
      id: 2,
      image: IMGhouse2,
      address: "House 2",
      floors: 2,
      area: 150,
      price: 800000,
    },
    {
      id: 3,
      image: IMGhouse2,
      address: "House 2",
      floors: 2,
      area: 150,
      price: 800000,
    },
    {
      id: 4,
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
            <Link to={`/gio-hang-chuyen-nhuong/${house.id}`}>
            
            <House
              image={house.image}
              address={house.address}
              floors={house.floors}
              area={house.area}
              price={house.price}
            />
            </Link>
          </WrapHouse>
        ))}
      </div>
    </div>
  );
};
export default HangChuyenNhuong;
