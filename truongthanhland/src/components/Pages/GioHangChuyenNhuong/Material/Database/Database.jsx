import IMGhouse1 from "./image/1.jpg"
import IMGhouse2 from "./image/2.jpg"

const Database = () => {
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
      // ...
    ]);
    
    return (
      <div>
        {/* <HienThiHang houses={houses} /> */}
        
      </div>
    );
  }
  
  export default Database;