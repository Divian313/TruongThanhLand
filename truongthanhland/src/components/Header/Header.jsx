import styled from "styled-components";
import logo from "./image/logo-truongthanh.png";
const WrapHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    margin: 0;
    display: flex;
    justify-content: center;
    list-style-type: none;
    
  }
  
  a {
    display: block;
    font-family: 'Open Sans', sans-serif;


    font-size: 1.1em;
    font-weight: 500;
    color: black;
    padding: 0 12px;
    text-decoration: none;
    white-space: nowrap;
}
`
const ListDuAn = styled.div`
  width: 270px;
  height: auto;
  
  /* display: flex; */
  /* flex-direction: column; */
  background-color: red;
  position: absolute;
  a {
    padding: 5px 10px;
  }
`

const Header = () => {
  return (
    <div className="container-fluid">
      <WrapHeader className="row text-center">
        <div className="col-2">
          <img src={logo} alt="" srcset="" style={{ width: 100 }} />
        </div>
        <div className="col-8">
          <ul>
            <li>
              <a href="">TRANG CHỦ</a>
            </li>
            <li>
              <a href="">DỰ ÁN</a>
              <ListDuAn className="text-start">
                
                  <li><a href="">Vinhomes</a></li>
                  <li><a href="">Zeit River</a></li>
                  <li><a href="">Zeit River</a></li>
                
              </ListDuAn>
            </li>
            <li>
              <a href="">GIỎ HÀNG CHUYỂN NHƯỢNG</a>
            </li>
            <li>
              <a href="">TIN TỨC</a>
            </li>
            <li>
              <a href="">TUYỂN DỤNG</a>
            </li>
            <li>
              <a href="">LIÊN HỆ</a>
            </li>
          </ul>
        </div>
        <div className="col-2">check</div>
      </WrapHeader>
    </div>
  );
};
export default Header;
