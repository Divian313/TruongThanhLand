
import IMGzalo from "../image/zalo.png"
import styled from "styled-components";
const Wrap = styled.div`
  /* animation: zoom 0.5s ease-in-out infinite , shake 0.5s ease-in-out infinite; */
  animation: zoom 0.5s ease-in-out infinite;
  transform-origin: center;
  @keyframes zoom {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.1);
    }
  }
`;
const IMG = styled.div`
  margin-bottom: 10px;
  animation: shake 0.5s ease-in-out infinite;
  @keyframes shake {
    0% {
      transform: rotate(1deg);
    }
    25% {
      transform: rotate(-1deg);
    }
    50% {
      transform: rotate(1deg);
    }
    75% {
      transform: rotate(-1deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
const IconZalo = () => {
  return (
    <Wrap>
      
      <IMG>
        <img className="rounded-circle" width={"100%"} src={IMGzalo} alt="" srcset="" />
      </IMG>
      
    </Wrap>
  );
};
export default IconZalo;
