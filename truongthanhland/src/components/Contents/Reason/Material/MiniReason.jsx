import styled from "styled-components";

const H2 = styled.h2`
  margin: 15px 0;
  font-size: 18px;
  font-weight: bold;
`
const Wrap = styled.div`
  padding: 40px 25px;
`;
const MiniReason = (props) => {
  return (
    <>      
        <Wrap>                   
          <img style={{width: 50}} src={props.image}></img>
          <H2>{props.title}</H2>
          <p>{props.text}</p>          
        </Wrap>      
    </>
  );
};
export default MiniReason;

// #FF5A3C