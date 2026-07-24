import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <>
      <nav
        className="navbar navbar-expand-md bg-white border-bottom shadow-sm py-1 fixed-top"
        style={{ fontFamily: "'Cairo', sans-serif", zIndex: 1030 }}
      >
        <div className="container-fluid px-1 px-md-4 justify-content-between justify-content-md-evenly align-items-center gap-1 gap-md-3 d-flex w-100 position-relative">

          <button
            className="navbar-toggler border-0 shadow-none p-0 text-secondary fs-3 order-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#khaledStoreNavbar"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <Link
            to="/"
            className="navbar-brand d-flex align-items-center m-0 text-decoration-none order-1 order-md-0"
          >
            <span
              className="fw-extrabold"
              style={{
                fontSize: "2.3rem",
                fontStyle: "italic",
                letterSpacing: "-0.5px",
                background: "linear-gradient(45deg, #0b6b57, #139a7e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "1px 2px 4px rgba(11, 107, 87, 0.1)",
              }}
            >
              Store
            </span>

            <span
              className="fw-bold me-1 me-md-2"
              style={{
                fontSize: "2.3rem",
                fontStyle: "italic",
                letterSpacing: "-0.5px",
                color: "#d97706",
                textShadow: "0px 0px 12px rgba(217, 119, 6, 0.3)",
              }}
            >
              Khaled
            </span>
          </Link>

          <div className="collapse navbar-collapse flex-grow-1 justify-content-md-center order-3 order-md-1" id="khaledStoreNavbar">
            <div className="w-100 d-md-flex justify-content-md-center align-items-center py-2 py-md-0 mt-2 mt-md-0 border-md-0">

              <div className="flex-grow-1 mx-md-5 mb-3 mb-md-0" style={{ maxWidth: "400px" }}>
                <div
                  className="d-flex align-items-center px-3"
                  style={{
                    background: "#eef3ef",
                    border: "1px solid #d1ded5",
                    borderRadius: "10px",
                    height: "40px",
                  }}
                >
                  <i className="fa-solid fa-magnifying-glass text-secondary"></i>
                  <input
                    type="text"
                    className="form-control border-0 bg-transparent shadow-none text-end ps-2 fw-semibold"
                    placeholder="ابحث عن منتج..."
                    style={{ fontSize: "15px", color: "#495057" }}
                  />
                </div>
              </div>

              <button
                className="btn w-100 text-end p-0 py-2 border-0 text-secondary d-flex justify-content-between align-items-center d-md-none"
                style={{ fontSize: "15px", fontWeight: "600" }}
              >
                <i className="fa-regular fa-moon fs-5"></i>
                <span>الوضع الليلي</span>
              </button>

            </div>
          </div>

          <div className="d-flex align-items-center gap-2 gap-md-4 order-2 order-md-2">
            <button
              className="btn p-0 border-0 text-secondary d-none d-md-block"
              style={{ fontSize: "20px" }}
              title="الوضع الليلي"
            >
              <i className="fa-regular fa-moon"></i>
            </button>

            <Link
              to="/CheckOut"
              className="text-secondary transition-all position-relative"
              style={{ fontSize: "20px" }}
              title="السلة"
            >
              <i className="fa-solid fa-cart-shopping"></i>
              {cartCount > 0 && (
                <span
                  className="position-absolute top-0 start-0 translate-middle badge rounded-circle bg-danger"
                  style={{ fontSize: "0.65rem", padding: "0.25em 0.45em" }}
                >
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;