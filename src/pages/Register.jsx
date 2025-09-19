import React, { useState } from "react";

function Register() {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
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
    if (!forms.name) {
      newErrors.name = "Name is required";
    }
    if (!forms.email) {
      newErrors.email = "Email is required";
    }
    if (!forms.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(forms.mobile)) {
      newErrors.mobile = "Mobile number is invalid";
    }
    if (!forms.password) {
      newErrors.password = "Password is required";
    }
    if (!forms.confirm_password) {
      newErrors.confirm_password = "Confirm Password is required";
    } else if (forms.password !== forms.confirm_password) {
      newErrors.confirm_password = "Passwords do not match";
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
      alert("Form submitted succesfully");
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
            <h3 className="text-center text-success mb-3">Register</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Enter username
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter username "
                  autoComplete="off"
                  name="name"
                  value={forms.name}
                  onChange={handleChange}
                />
                {<errors className="name"></errors> && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Enter Email address
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email address"
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
                <label htmlFor="mobile" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.mobile ? "is-invalid" : ""
                  }`}
                  id="mobile"
                  placeholder="Enter mobile number"
                  autoComplete="off"
                  name="mobile"
                  value={forms.mobile}
                  onChange={handleChange}
                />
                {<errors className="mobile"></errors> && (
                  <div className="invalid-feedback">{errors.mobile}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  id="password"
                  placeholder="Enter password"
                  autoComplete="off"
                  name="password"
                  value={forms.password}
                  onChange={handleChange}
                />
                {<errors className="password"></errors> && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="confirm_password" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className={`form-control ${
                    errors.confirm_password ? "is-invalid" : ""
                  }`}
                  id="confirm_password"
                  placeholder="Re-enter password"
                  autoComplete="off"
                  name="confirm_password"
                  value={forms.confirm_password}
                  onChange={handleChange}
                />
                {<errors className="confirm_password"></errors> && (
                  <div className="invalid-feedback">
                    {errors.confirm_password}
                  </div>
                )}
              </div>

              <button type="submit" className="btn btn-success">
                Register
              </button>
            </form>
          </div>

          <div className="col-md-6 d-none d-md-block p-0 text-center">
            <img
              src="/imgs/register.jpg"
              alt="Register"
              className="img-fluid img-thumbnail shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
