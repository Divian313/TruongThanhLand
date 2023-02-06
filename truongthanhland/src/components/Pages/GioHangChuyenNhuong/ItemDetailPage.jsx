import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Contents/Footer/Footer";
import Header from "../../Header/Header";
import BreadcrumbNav from "../../Material/Breadcrumb/Breadcrumb";
import Database from "./Material/Database/Database";
const ItemDetailPage = () => {
  const [houses, setHouses] = useState(Database);
  const { id } = useParams();
  const house = houses.find((item) => item.id === id);
  return (
    <>
      <Header />
      <BreadcrumbNav/>
      {house && (
        <>
          <img src={house.image[0]} alt={house.diachi} />
          <p>Address: {house.diachi}</p>
          <p>Floors: {house.sotang}</p>
          <p>Area: {house.dientich}</p>
          <p>Price: {house.mucgia}</p>
        </>
      )}

      <Footer />
    </>
  );
};
export default ItemDetailPage;
