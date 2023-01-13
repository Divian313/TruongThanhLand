import IMGnhapho from "./image/nhapho.jpg"
import IMGduan from "./image/datnen.jpg"
import styled from "styled-components";
const Nhapho = styled.div`
    height: 350px;
    img {
        filter: brightness(85%);
    }
`
const Duan = styled.div`
    height: 350px;
    img {
        filter: brightness(85%);

    }
`
const Service = () => {
  return (
    
      <div className="row">
        <Nhapho className="col-lg-7 col-md-6 col-12 me-2">
            <img style={{height: "100%"}} className="w-100" src={IMGnhapho} alt="" srcset="" />
        </Nhapho>
        <Duan className="col mt-4 mt-md-0">
            <img style={{height: "100%"}} className="w-100" src={IMGduan} alt="" srcset="" />
        </Duan>
      </div>
    
  );
};
export default Service;
