import styled from "styled-components";
const Wrap = styled.div`
  width: 200px;
  margin: 0 auto;
`;
const Content = styled.div`
  font-weight: 400 !important;
  margin: 10px auto;  
  width: fit-content;
  background-color: rgba(245,151,148,0.3);
  display: block;
  border-radius: 25px;
  color: rgb(255, 90, 60);
  padding: 5px 15px;
`;
const Logo = () => {
  return (
    <>
        <Content className="text-center">TRƯỜNG THÀNH LAND</Content>
      <Wrap>
      </Wrap>
    </>
  );
};
export default Logo;
