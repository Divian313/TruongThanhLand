import "./Navbar.css";
import logo from "./image/logo-truongthanh.png";
const Navbar = () => {
  return (
    <nav class="container-fluid navbar navbar-expand-lg fixed-top">
      <div class="container-xxl d-flex justify-content-between">
        <a class="navbar-brand m-0 p-0" href="#">
          <img className="img-fluid" src={logo} width="100" />
        </a>
        {/* <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <button
          class="navbar-toggler "
          type="button "
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse d-flex justify-content-center d-none "
          tabindex="-1"
          id="navbarText"
          aria-labelledby="ONavbarLabel"
        >
          <ul class="navbar-nav ">
            <li class="nav-item ">
              <a class="nav-link" href="#">
                TRANG CHỦ
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                DỰ ÁN
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                GIỎ HÀNG CHUYỂN NHƯỢNG
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                TIN TỨC
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                TUYỂN DỤNG
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                LIÊN HỆ
              </a>
            </li>
          </ul>
        </div>

        <div
          class="offcanvas offcanvas-end d-lg-none "
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
            <button
              type="button"
              class="btn-close "
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body m-0 p-0">
            <ul class="navbar-nav justify-content-end flex-grow-1 ">
            <li class="nav-item ">
              <a class="nav-link" href="#">
                TRANG CHỦ
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                DỰ ÁN
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                GIỎ HÀNG CHUYỂN NHƯỢNG
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                TIN TỨC
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                TUYỂN DỤNG
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                LIÊN HỆ
              </a>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
