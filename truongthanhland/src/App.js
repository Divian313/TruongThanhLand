import Banner from "./components/Contents/Banner/Banner";
import Reason from "./components/Contents/Reason/Reason";
import Service from "./components/Contents/Service/Service";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import ContentComponent from "./components/Material/ContentComponent/ContentComponent";
import MenuButton from "./components/Material/MenuButton/MenuButton";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />      
      <Reason/>
      <ContentComponent title="CÁC LOẠI DỊCH VỤ CUNG CẤP">
        <Service/>
      </ContentComponent>
      <ContentComponent></ContentComponent>
      {/* <ContentComponent title="Lý do bạn lựa chọn chúng tôi">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 d-flex justify-content-center">
            {listItems}
          </div>
        </div>
      </ContentComponent> */}
    </div>
  );
}
export default App;
