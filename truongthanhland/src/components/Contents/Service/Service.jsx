import IMGnhapho from "./image/nhapho.jpg";
import IMGduan from "./image/datnen.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Nhapho = styled.div`
  height: 350px;
  img {
    filter: brightness(60%);
  }
`;
const Duan = styled.div`
  height: 350px;
  img {
    filter: brightness(60%);
  }
`;
const Title = styled.h4`
  white-space: nowrap;
  color: white;
  text-shadow: 2px 2px #000000;
  /* text-shadow: 2px 2px 4px #0000007e; */
`;
const Service = () => {
  return (
    <div className="row container">
      <Nhapho className="col-lg-7 col-md-6 col-12 me-2 position-relative">
        <Link to={`/gio-hang-chuyen-nhuong/`}>
          <img
            style={{ height: "100%" }}
            className="w-100 position-absolute"
            src={IMGnhapho}
            alt=""
            srcset=""
          />
          <Title className="position-absolute start-50 top-50 translate-middle">
            Nhà phố - Biệt thự
          </Title>
        </Link>
      </Nhapho>

      <Duan className="col mt-4 mt-md-0 position-relative">
        <img
          style={{ height: "100%" }}
          className="w-100 position-absolute"
          src={IMGduan}
          alt=""
          srcset=""
        />
        <Title className="position-absolute start-50 top-50 translate-middle">
          Dự án
        </Title>
      </Duan>
    </div>
  );
};
export default Service;
