import React from "react";
import Products from "../components/Products";

function Care() {
  return (
    <div className="container d-flex flex-column my-2 gap-5">
      <div className="row mb-2 justify-content-center">
        <h3 className="row justify-content-center">Grooming</h3>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Products
            imgSrc="/imgs/brushing.jpg"
            title="Brushing"
            text="Brushing – How often to brush long-haired vs short-haired cats."
            btnText="Explore"
          />
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3">
          <Products
            imgSrc="/imgs/nailTrimming.jpg"
            title="Nail Trimming"
            text="Tips to trim safely and signs nails are too long."
            btnText="Explore"
          />
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3">
          <Products
            imgSrc="/imgs/bathing.jpg"
            title="Bathing"
            text="Rare but needed sometimes; how to do it stress-free."
            btnText="Explore"
          />
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3">
          <Products
            imgSrc="/imgs/earCare.jpg"
            title="Ear Cleaning & Eye Care"
            text="Keep ears and eyes clean to avoid infections."
            btnText="Explore"
          />
        </div>
      </div>

      <div className="row mb-2 justify-content-center">
        <h3 className="row justify-content-center">Skin & Coat Health</h3>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Products
            imgSrc="/imgs/fleaks.jpg"
            title="Fleas & Ticks"
            text="Prevention and safe treatments."
            btnText="Explore"
          />
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3">
          <Products
            imgSrc="/imgs/allergy.jpg"
            title="Dryness & Allergies"
            text="Signs and remedies (special shampoos, diet)."
            btnText="Explore"
          />
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3">
          <Products
            imgSrc="/imgs/shedding.jpg"
            title="Shedding"
            text="How to manage seasonal shedding."
            btnText="Explore"
          />
        </div>
      </div>

      <div className="row mb-2 justify-content-center">
        <h3 className="row justify-content-center">Seasonal Care</h3>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Products
            imgSrc="/imgs/winterCare.jpg"
            title="Winter Care"
            text="Keep cats warm, skin hydration tips."
            btnText="Explore"
          />
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3">
          <Products
            imgSrc="/imgs/summerCare.jpg"
            title="Summer Care"
            text="Prevent overheating, sunburn on light-colored cats."
            btnText="Explore"
          />
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3">
          <Products
            imgSrc="/imgs/allergySeason.jpg"
            title="Allergy Seasons"
            text="Protecting sensitive cats from pollen, dust."
            btnText="Explore"
          />
        </div>
      </div>

      <div className="row mb-2 justify-content-center">
        <h3 className="row justify-content-center">Dental Care</h3>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Products
            imgSrc="/imgs/d1.jpg"
            title="Brushing Teeth"
            text="Use a cat-specific toothbrush and toothpaste; start slowly to get your cat used to it."
            btnText="Explore"
          />
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3">
          <Products
            imgSrc="/imgs/d2.jpg"
            title="Dental Treats & Chews"
            text="Special treats help reduce plaque and tartar buildup."
            btnText="Explore"
          />
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3">
          <Products
            imgSrc="/imgs/d3.jpg"
            title="Regular Vet Check-ups"
            text="Annual dental exams can catch problems early."
            btnText="Explore"
          />
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3">
          <Products
            imgSrc="/imgs/d4.jpg"
            title="Dental Toys"
            text="Some toys and diets are designed to help keep teeth clean naturally."
            btnText="Explore"
          />
        </div>
      </div>
    </div>
  );
}

export default Care;
