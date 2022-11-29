import styled, { keyframes } from "styled-components";
import Header from "../../Header/Header";

const chuyenmau = keyframes`
  from {
    color: black;
  }
  to {
    color: #d07d0b;
  }
`
const hienra = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`


const ListDuAn = styled.div`
  width: 270px;
  height: auto;
  padding-top: 10px;
  transform: translate(5%, 0%);
  display: none;
  background-color: white;
  /* position: absolute; */
  /* box-shadow: 5px 5px 5px rgb(0 0 0 / 30%); */
z-index: 99;

  a {
    display: inline-block;
    /* font-weight: 100; */
    font-size: 16px;
    margin-left: 0px;
    padding: 10px 10px;
  }
  
  li:before {
    content: "\f105";
    font-family: FontAwesome;
    display: inline;
    margin-left: 10px;
    width: 1.3em;
    z-index: 9;
  }
  
  
`;
const DuAn = styled.li`
  &:hover  ${ListDuAn}{
    display: block;
    animation: ${hienra} 0.3s forwards;
  }
`

const Wrap = styled.div`
  /* width: 200px;
    height: 50px;
    background-color: red; */
`;
const WrapBodyOffcanva = styled.div`
  ul {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`
const Button = styled.div`
  width: 1.3rem;
  cursor: pointer;
  margin-right: 1em;
`;
const MenuButton = () => {
  return (
    <Wrap className="d-xl-none d-block">
      <Button
        // className="btn btn-primary"
        // type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </Button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">
            Offcanvas right
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
        <WrapBodyOffcanva className="">
          <ul>
            <li>
              <a href="">TRANG CHỦ</a>
            </li>
            <DuAn>
              <a               
                href=""
              >
                DỰ ÁN
              </a>
              <ListDuAn className="text-start">
                <li>
                  <a href="">Vinhomes</a>
                </li>
                <li>
                  <a href="">Zeit River</a>
                </li>
                <li>
                  <a href="">Zeit River</a>
                </li>
              </ListDuAn>
            </DuAn>
            <DuAn>
              <a href="">GIỎ HÀNG CHUYỂN NHƯỢNG</a>
               <ListDuAn className="text-start">
                <li>
                  <a href="">Gio hang</a>
                </li>
                <li>
                  <a href="">Chuyen nhung</a>
                </li>
                <li>
                  <a href="">Zeit River</a>
                </li>
              </ListDuAn>
            </DuAn>
            <li>
              <a href="">TIN TỨC</a>
            </li>
            <li>
              <a href="">TUYỂN DỤNG</a>
            </li>
            <li>
              <a href="">LIÊN HỆ</a>
            </li>
          </ul>
        </WrapBodyOffcanva>
        </div>
      </div>
    </Wrap>
  );
};
export default MenuButton;
