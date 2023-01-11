import styled from "styled-components";
import MiniReason from "./Material/MiniReason";
const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Logo = styled.div`
  /* width: 200px;
    height: 50px; */
  display: block;
  /* justify-content: center;
    align-items: center; */
  background-color: #ffefec;
  border-radius: 25px;
  color: rgb(255, 90, 60);
  padding: 5px 15px;
`;
const H1 = styled.h1`
  margin-top: 20px;
  font-family: 'Mali', cursive;

  font-weight: 300;
`;
const data = [
    {
        image: "1"
    }
]
const Reason = () => {
  return (
    <>
      <Wrap>
        <Logo>TRƯỜNG THÀNH LAND</Logo>
      </Wrap>
      <H1 className="text-center">Lý do bạn lựa chọn chúng tôi</H1>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 d-flex justify-content-center">
          {/* <div className="col"><MiniReason/></div>
          <div className="col"><MiniReason/></div>
          <div className="col"><MiniReason/></div>
          <div className="col"><MiniReason/></div> */}
          <MiniReason  title="check" />
          <MiniReason/>
          <MiniReason/>
          <MiniReason/>
          
          
        </div>
      </div>
    </>
  );
};
export default Reason;




