import { useState } from "react";
import House from "./House";
const HangChuyenNhuong = () => {
    const [houses, setHouses] = useState([
        {
            // image: ,
            address: 'House 1',
            floors: 3,
            area: 200,
            price: 1000000
        },
        {
            address: 'House 2',
            floors: 2,
            area: 150,
            price: 800000
        },
        // ...
    ]);
    return(
        <div className="container">
            <div className="row row-cols-3">
            {houses.map((house, index) => (
                <div key={index} className="col-md-4">
                    <House address={house.address} floors={house.floors} area={house.area} price={house.price} />
                </div>
            ))}
            </div>
        </div>
    )
}
export default HangChuyenNhuong;