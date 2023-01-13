import Logo from "../../Contents/Reason/Material/Logo";
import styled from "styled-components";
const H1 = styled.h1`
  margin-top: 20px;
  margin-bottom: 50px;
  font-weight: 600;
  font-size: 39px;
`;
const Wrap = styled.div`
  font-family: "Quicksand", sans-serif;
`;
const ContentComponent = (props) => {
  return (
    <div className="mt-5">
      <Logo />
      <Wrap className="container">
        <H1 className="text-center">{props.title}</H1>
        {props.children}
      </Wrap>
    </div>
  );
};
export default ContentComponent;
