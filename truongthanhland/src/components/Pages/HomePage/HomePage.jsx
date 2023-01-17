import Banner from "../../Contents/Banner/Banner";
import Footer from "../../Contents/Footer/Footer";
import Reason from "../../Contents/Reason/Reason";
import Service from "../../Contents/Service/Service";
import Header from "../../Header/Header";
import ScrollHeader from "../../Header/ScrollHeader";
import ContentComponent from "../../Material/ContentComponent/ContentComponent";

const HomePage = () => {
  return (
    <>
    
      <ScrollHeader/>
      <Header/>
      <Banner/>
      <Reason/>
      <ContentComponent title="CÁC LOẠI DỊCH VỤ CUNG CẤP">
          <Service/>
      </ContentComponent>
      <Footer/>
    </>
  );
};
export default HomePage;
