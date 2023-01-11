import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid,
//   regular,
//   brands,
//   icon,
// } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const Wrap = styled.div`
  border: 1px dashed black;
`;
const MiniReason = (props) => {
  return (
    <>
      <div class="card border-none">
        <div class="card-body">
          <img src="../SVG/apartment.svg"></img>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          {/* <FontAwesomeIcon icon={solid("user-secret")} />
          <FontAwesomeIcon icon={regular("coffee")} />
          <FontAwesomeIcon icon={icon({ name: "coffee", style: "solid" })} />
          <FontAwesomeIcon icon={brands("twitter")} /> */}
        </div>
      </div>
    </>
  );
};
export default MiniReason;
