import React, { useState } from "react";
import IMGhouse1 from "./image/1.jpeg";
import IMGhouse2 from "./image/2.jpeg";
import { useParams } from "react-router-dom";
const Database = (props) => {
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
  return <>
    {props.children(houses)}
  </>;
};

export default Database;
