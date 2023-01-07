import styled from "styled-components";

const MiniReason = (props) => {
  return (
    <>
      <div class="card" style={{ width: "16rem" }}>
        <div class="card-body">
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
      </div>
    </>
  );
};
export default MiniReason;
