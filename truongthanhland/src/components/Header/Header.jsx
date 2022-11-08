import styled from "styled-components";
const Wrap = styled.div`
  
  background-color: red;
  h1 {
      margin: 0;
      color: blue;
  }
`;
const Header = () => {
  return (
    <Wrap>
      <h1>Test</h1>
    </Wrap>
  );
};
export default Header;
