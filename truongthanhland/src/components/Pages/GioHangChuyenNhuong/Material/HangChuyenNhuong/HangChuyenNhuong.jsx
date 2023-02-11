import { useState } from "react";
import House from "./House";

import { Link } from "react-router-dom";
import Database from "../Database/Database";
import styled from "styled-components";
const WrapHouse = styled.div`
  margin: 12px 0px;
  a {
    color: black;
    text-decoration: none;
  }
`;

const HangChuyenNhuong = () => {
  //Database duoc lay tu Database.jsx
  const [houses, setHouses] = useState(Database);
  //Truyen Database vao House
  return (
    <div className="container">
      <div className="row row-cols-1">
        {houses.map((house, index) => (
          <WrapHouse key={index} className="col-md-4">
            <Link to={`/gio-hang-chuyen-nhuong/${house.id}`}>
              <House
                image={house.image[0]}
                diachi={house.diachi}
                sotang={house.sotang}
                dientich={house.dientich}
                mucgia={house.mucgia}
                phongngu={house.phongngu}
                wc={house.wc}
                tensanpham={house.tensanpham}
              />
            </Link>
          </WrapHouse>
        ))}
      </div>
    </div>
  );
};
export default HangChuyenNhuong;
