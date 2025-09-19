import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [forms, setForms] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForms({ ...forms, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!forms.email) {
      newErrors.email = "Email is required";
    }
    if (!forms.password) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ValidateErrors = validate();
    if (Object.keys(ValidateErrors).length > 0) {
      setErrors(ValidateErrors);
    } else {
      setErrors({});
      alert("Login succesfully!");
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100 align-items-center">
        <div className="col-md-12 d-flex justify-content-center align-items-center">
          <div
            className="card shadow-lg p-4 w-75 h-50 me-5"
            style={{ maxWidth: "500px" }}
          >
            <h3 className="text-center text-primary mb-3">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">
                  Enter Email address
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email address "
                  autoComplete="off"
                  name="email"
                  value={forms.email}
                  onChange={handleChange}
                />
                {<errors className="email"></errors> && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="password"
                  placeholder="Enter password here"
                  autoComplete="off"
                  name="password"
                  value={forms.password}
                  onChange={handleChange}
                />
                {<errors className="password"></errors> && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>

          <div className="col-md-6 d-none d-md-block p-0 text-center">
            <img
              src="/imgs/login.jpg"
              alt="Login"
              className="img-fluid img-thumbnail shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
