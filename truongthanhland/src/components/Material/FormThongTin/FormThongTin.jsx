import styled from "styled-components";
const Wrap = styled.div`
  /* padding: 2em; */
  position: relative;
  /* background-color: aqua; */
  input {
    width: 100%;
  }
`;
const Button = styled.button`
  /* width: 100px; */
  margin: 1em;
  position: absolute;
  right: 5%;
`;
const FormThongTin = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Wrap className="container">
      <form
        className="needs-validation   row row-cols-md-3 row-cols-1  "
        action="https://docs.google.com/forms/d/e/1FAIpQLSdJMkVR9OWifd1VDlYS0zVTxVd8J58zG0EJGvAdUTjNs8SJ-w/formResponse"
      >
        {/* <div className="input-group">
          <input
            type="text"
            name="entry.2005620554"
            placeholder="Tên khách hàng (*)"
            required
          />
          <div className="invalid-feedback">Yêu cầu</div>
        </div> */}

        <div className="col-md-3 mt-3 mt-md-0">
          <input
            type="text"
            name="entry.2005620554"
            placeholder="Tên khách hàng (*)"
            required
          />
        </div>

        <div className="col-md-3 mt-3 mt-md-0">
          <input
            type="text"
            name="entry.1166974658"
            required
            placeholder="Điện thoại (*)"
          />
        </div>
        <div className="col-md-6 mt-3 mt-md-0">
          <input
            type="text"
            name="entry.839337160"
            placeholder="Bình luận"
            required
          />
        </div>
      </form>
      <Button className="my-2" type="submit">
        Gửi thông tin
      </Button>
    </Wrap>
  );
};
export default FormThongTin;
// https://docs.google.com/forms/d/e/1FAIpQLSdJMkVR9OWifd1VDlYS0zVTxVd8J58zG0EJGvAdUTjNs8SJ-w/viewform?usp=pp_url&entry.2005620554=tennnn&entry.1166974658=dienthoaiii&entry.839337160=ghichuuu
