import React, { useState } from "react";

function Contact() {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
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
    if (!forms.message) {
      newErrors.message = "Message is required";
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

  const handleClear = () => {
    setForms({ name: "", email: "", mob: "", message: "" });
    setErrors({});
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100 align-items-center">
        <div className="col-md-6 d-none d-md-block p-0 text-center">
          <img
            src="/imgs/register.jpg"
            alt="Register"
            className="img-fluid img-thumbnail shadow"
          />
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div
            className="card shadow-lg p-4 w-75 h-50 me-5"
            style={{ maxWidth: "500px" }}
          >
            <h3 className="text-center text-success mb-3">Contact Us</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Enter Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="name"
                  name="name"
                  placeholder="Enter name here"
                  autoComplete="off"
                  value={forms.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Enter Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  placeholder="Enter email here"
                  autoComplete="off"
                  value={forms.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Enter Mobile Number
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.mobile ? "is-invalid" : ""
                  }`}
                  id="mobile"
                  name="mobile"
                  placeholder="Enter valid mobile number"
                  autoComplete="off"
                  value={forms.mobile}
                  onChange={handleChange}
                />
                {errors.mob && (
                  <div className="invalid-feedback">{errors.mob}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Enter Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`form-control ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  value={forms.message}
                  placeholder="Enter message here"
                ></textarea>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary">
                Send message
              </button>
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={handleClear}
              >
                Clear
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
