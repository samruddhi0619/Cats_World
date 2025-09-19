import React from "react";

function Footer() {
  return (
    <div>
      <div className="container-fluid">
        <footer className="text-white text-center text-lg-start bg-dark">
          <div className="container p-4">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">About company</h5>
                <p>
                  Cats World — A trusted space for cat lovers to find care tips,
                  products, and inspiration to give every cat a happy, healthy
                  life. 🐾
                </p>

                <div className="mt-4">
                  <a
                    type="button"
                    className="btn btn-floating btn-light btn-lg me-1"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    type="button"
                    className="btn btn-floating btn-light btn-lg me-1"
                  >
                    <i className="fab fa-dribbble" />
                  </a>
                  <a
                    type="button"
                    className="btn btn-floating btn-light btn-lg me-1"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    type="button"
                    className="btn btn-floating btn-light btn-lg me-1"
                  >
                    <i className="fab fa-google-plus-g" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
                <div className="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="formControlLg"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="formControlLg">
                    Search
                  </label>
                </div>
                <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-home" />
                    </span>
                    <span className="ms-2">Mumbai, 415605, India</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-envelope" />
                    </span>
                    <span className="ms-2">catsworld@gmail.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-phone" />
                    </span>
                    <span className="ms-2">+91 9356874126</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Opening hours</h5>
                <table className="table text-center text-white">
                  <tbody className="fw-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 1am</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>9am - 10pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
