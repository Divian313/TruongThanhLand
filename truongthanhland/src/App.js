// import Banner from "./components/Contents/Banner/Banner";
// import Footer from "./components/Contents/Footer/Footer";
// import Reason from "./components/Contents/Reason/Reason";
// import Service from "./components/Contents/Service/Service";
// import Header from "./components/Header/Header";
// import TestHeader from "./components/Header/ScrollHeader";
// import ContentComponent from "./components/Material/ContentComponent/ContentComponent";
import { Route, Routes } from "react-router-dom";
import GioHangChuyenNhuong from "./components/Pages/GioHangChuyenNhuong/GioHangChuyenNhuong";
import ItemDetailPage from "./components/Pages/GioHangChuyenNhuong/ItemDetailPage/ItemDetailPage";
import HomePage from "./components/Pages/HomePage/HomePage";

function App() {
  return (
    // <div className="App">
    //   <TestHeader></TestHeader>
    //   <Header />
    //   <Banner />
    //   <Reason/>
    //   <ContentComponent title="CÁC LOẠI DỊCH VỤ CUNG CẤP">
    //     <Service/>
    //   </ContentComponent>
    //   <Footer/>
    // </div>
    <div className="App">
      {/* <Link to="/">Home</Link> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/gio-hang-chuyen-nhuong"
          element={<GioHangChuyenNhuong />}
        ></Route>
        <Route
          path="/gio-hang-chuyen-nhuong/:id"
          element={<ItemDetailPage />}
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
