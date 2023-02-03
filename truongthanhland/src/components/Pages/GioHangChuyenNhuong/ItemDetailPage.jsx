import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Contents/Footer/Footer";
import Header from "../../Header/Header";
import IMGhouse1 from "../GioHangChuyenNhuong/Material/image/1.jpeg";
import IMGhouse2 from "../GioHangChuyenNhuong/Material/image/2.jpeg";
import Database from "./Material/Database/Database";
const ItemDetailPage = () => {
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
      floors: 3,
      area: 200,
      price: 1500000,
    },
  ]);
  const { id } = useParams();
  return (
    <>
      <Header />
      <Database>
        {(houses) => {
          const house = houses.find((item) => item.id === parseInt(id));
          {
            house && (
              <>
                <img src={house.image} alt={house.address} />
                <p>Address: {house.address}</p>
                <p>Floors: {house.floors}</p>
                <p>Area: {house.area}</p>
                <p>Price: {house.price}</p>
              </>
            );
          }
        }}
      </Database>

      <Footer />
    </>
  );
};
export default ItemDetailPage;

{
  /* {houses.map((house, index) => {
        if ({ id } !== house.id) {
          <div>mot</div>;
        } else {
          <div>hai</div>;
        }
      })}
      id: {id} */
}
{
  /* chec */
}
