import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isAdminLogin, removeUser } from "../../redux/userSlicer";
import { removeLocalStorage } from "../../service/authService";
import "animate.css";
import logo from "../../assets/image/logo-zurea.jpg";
import { removeProduct } from "../../redux/cartSlicer";
import { useState } from "react";
import { toggleLoader } from "../../redux/loaderSlicer";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const userStore = useSelector((store) => store.userSlicer.user);
  const cartSlicer = useSelector((store) => store.cartSlicer);
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");

  let subtotal = 0;

  cartSlicer.cart.map((el, index) => {
    subtotal += el.quantity * el.price;
  });

  const onLogout = () => {
    removeLocalStorage("my_token");
    dispatch(removeUser());
    dispatch(isAdminLogin(false));
  };

  const removeInCart = (event, el) => {
    event.preventDefault();
    dispatch(removeProduct(el.id));
  };

  const searchField = (e) => {
    e.preventDefault();
    navigate(`/search?search=${inputSearch}`);
    setInputSearch("");
  };

  const selectedCategory = (e) => {
    navigate(`/category?category=${e.target.getAttribute("value")}`);
    dispatch(toggleLoader(true));
    console.log("working")
  };

  return (
    // <div className="container-fluid mt-5">
    <nav className="navDiv navbar navbar-expand-lg navbar-light bg-light border border-secondary mx-md-5 m-auto py-0">
      <Link className="navbar-brand navLogo" to={"/"}>
        <img className="py-3 px-5" src={logo} alt="" />
      </Link>
      <button
        className="navbar-toggler navBtn"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto navUl">
          <li className="nav-item">
            <Link
              className="navigationLink nav-link animate__animated animate__backInLeft"
              aria-current="page"
              to={"/"}
            >
              Home
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              className="navigationLink nav-link animate__animated animate__backInLeft"
              to={"/shop"}
            >
              Shop
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              className="navigationLink nav-link dropdown-toggle animate__animated animate__backInRight"
              to={"/"}
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </Link>
            <div
              className="dropdown-menu ulDiv"
              aria-labelledby="navbarDropdown"
            >
              <ul className="d-flex flex-column moreUl">
                <li
                  className="dropdown-item"
                  value={"6401f0a8032f552ca5fb2b9f"}
                  onClick={(e) => selectedCategory(e)}
                >
                  Computer
                </li>
                <li
                  className="dropdown-item"
                  value={"62b5a9c5b56631db50071ddb"}
                  onClick={(e) => selectedCategory(e)}
                >
                  Monitor
                </li>
                <li
                  className="dropdown-item"
                  value={"62b464521253c8eb3742e51c"}
                  onClick={(e) => selectedCategory(e)}
                >
                  Other
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link
              className="navigationLink nav-link animate__animated animate__backInRight"
              aria-current="page"
              to={"/contact"}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="userSearch d-flex">
          <div className="nav-item dropdown user">
            <Link
              className="nav-link "
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></Link>
            <ul
              className="dropdown-menu dropdown-menu-end animate__animated animate__slideInDown userDropdown"
              aria-labelledby="navbarDropdown"
            >
              {console.log(userStore.email)}
              {!userStore?.email ? (
                <>
                  <li>
                    <Link className="dropdown-item" to={"/register"}>
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/login"}>
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="dropdown-item" to={"/"}>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/"} onClick={onLogout}>
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="dropdown searchDrop ">
            <button
              className="btn btn-secondary searchBtn"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul
              className="dropdown-menu dropdown-menu-start animate__animated animate__slideInDown px-2 searchDropdown"
              aria-labelledby="dropdownMenu2"
            >
              <form className="d-flex">
                <input
                  value={inputSearch}
                  className="form-control me-2 searchInp "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => setInputSearch(e.target.value)}
                />
                <button
                  className="btn btn-outline-success"
                  onClick={(e) => searchField(e)}
                >
                  Search
                </button>
              </form>
            </ul>
          </div>
        </div>
        <div className="basketAll">
          <div className="basket d-flex px-3">
            <div className="basketImg "></div>
            <p className="align-self-center m-0">
              Cart - {!cartSlicer.cart.length ? 0 : cartSlicer.cart.length}
            </p>
          </div>
          <div className="cardDropdown border">
            {!cartSlicer.cart.length ? (
              <div className="p-2">No Product Add In Cart</div>
            ) : (
              <div>
                <p className="m-0 p-2 text-start">
                  Your Cart: {cartSlicer.cart.length} Items
                </p>
                <hr className="m-1" />
                <div className="d-flex flex-column">
                  {cartSlicer.cart.map((el, index) => {
                    return (
                      <div key={index}>
                        <Link
                          className="productLink"
                          to={`/show-product?id=${el.id}`}
                        >
                          <div className="productCart d-flex align-items-center justify-content-around">
                            <img className="  " src={el.imgUrl} alt="" />
                            <p className="mb-0">
                              {el.title.length > 20
                                ? el.title.substring(0, 15) + "..."
                                : el.title}
                            </p>
                            <div className="quantity">
                              <p className="m-0">{el.quantity} X</p>
                              <p className="m-0">$ {el.price}</p>
                            </div>
                            <button
                              className="removeProduct"
                              onClick={(event) => removeInCart(event, el)}
                            >
                              X
                            </button>
                          </div>
                        </Link>

                        <hr className="m-1" />
                      </div>
                    );
                  })}
                </div>
                <div className="d-flex justify-content-between px-3">
                  <p className="m-0 p-2 ">
                    <dt>Subtotal </dt>
                  </p>
                  <p className="m-0 py-2">${subtotal}</p>
                </div>
                <div className="btnField">
                  <button
                    className="btn btn-light"
                    onClick={() => navigate("/cart-shop")}
                  >
                    View Cart
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
    // {/* </div> */}
  );
};

export default NavbarComponent;
