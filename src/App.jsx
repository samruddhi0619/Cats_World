import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./components/PageNotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Health from "./pages/Health";
import Care from "./pages/Care";

function App() {
  return (
    <>
      <Router>
        <div className="container-fluid">
          <div className="row mb=1">
            <div className="col-12">
              <Header />
            </div>
          </div>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <Slider />
                    </div>
                  </div>
                </div>

                <div className="container d-flex flex-column my-2 gap-5">
                  <div className="row mb-2">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                      <Products
                        imgSrc="/imgs/p1.jpg"
                        title="MaineCoon Cat"
                        text="One of the largest domestic cats, gentle and loving."
                        btnText="Explore"
                      />
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3">
                      <Products
                        imgSrc="/imgs/p2.jpg"
                        title="Persian Cat"
                        text="Known for their long fur and calm personality."
                        btnText="Explore"
                      />
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3">
                      <Products
                        imgSrc="/imgs/p3.jpg"
                        title="Siamese Cat"
                        text="Friendly, social, and very vocal cats."
                        btnText="Explore"
                      />
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3">
                      <Products
                        imgSrc="/imgs/p4.jpg"
                        title="Birman Cat"
                        text="The Birman, also called the Sacred Cat of Burma，is a domestic cat breed."
                        btnText="Explore"
                      />
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/health" element={<Health />}></Route>
          <Route path="/care" element={<Care />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}>
            {" "}
          </Route>
          <Route path="/register" element={<Register />}>
            {" "}
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
