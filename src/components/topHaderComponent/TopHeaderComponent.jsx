
const TopHeaderComponent = () => {
  return (
    <div className="bg-dark mb-4 topHeader">
      <div className="topHeaderDiv d-flex justify-content-between mx-4">
        <div className="freeShop text-white my-auto ">
          <p className="mb-0">Free Shipping On Order Over $99</p>{" "}
        </div>
        <div className="rightDiv d-flex ">
          <select
            className="form-select me-2 selectElement"
            aria-label="Default select example"
          >
            <option value="English">English</option>
            <option value="Germany">Germany</option>
            <option value="Serbia">Serbia</option>
          </select>

          <select className="form-select selectElement selectElement2 " aria-label="Default select example">
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="RSD">RSD</option>
          </select>

          {/* <div className="dropdown">
            <button
              className="btn btn-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              English
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link className="dropdown-item" to="#">
                  English
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Germany
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Serbia
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              EUR €
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link className="dropdown-item" to="#">
                  EUR €
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  USD €
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  RSD €
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TopHeaderComponent;
