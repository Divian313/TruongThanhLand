import styled from "styled-components";
const Wrap = styled.div`
  border: 1px dashed black;
`
const MiniReason = (props) => {
  return (
    <>
      <div class="card border-none">
        <div class="card-body">
          <i class="fa-light fa-apartment"></i>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
      </div>
    </>
  );
};
export default MiniReason;
