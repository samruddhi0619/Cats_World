import React from "react";
import Products from "../components/Products";
import Cards from "../components/Cards";

function Health() {
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="/imgs/health.png"
            alt="Health"
            className="img-fluid img-thumbnail shadow"
          />
        </div>

        <div className="col-md-6">
          <h2 className="mb-3">Welcome to Cat Health & Wellness</h2>
          <p>
            Ensuring the health and happiness of your feline friend is our top
            priority. From regular check-ups to preventive care, we provide
            comprehensive health services tailored to your cat's unique needs.
            Our experienced veterinarians are dedicated to promoting wellness
            through vaccinations, nutrition advice, dental care, and more. Trust
            us to keep your cat thriving and purring with joy.
          </p>
        </div>

        <div className="container d-flex flex-column my-2 gap-5">
          <div className="row mt-5 g-4 justify-content-center">
            <h3 className="row justify-content-center">Common Diseases</h3>
            <div className="col-sm-6 col-md-4 col-lg-3  text-center shadow p-3 mb-5 bg-body rounded me-2 ms-2">
              <h4>Feline Leukemia Virus (FeLV)</h4>
              <p className="text-muted">
                A contagious viral infection that weakens a cat’s immune system,
                making them prone to other illnesses. It spreads mainly through
                saliva, blood, or close contact.
              </p>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 text-center shadow p-3 mb-5 bg-body rounded me-2">
              <h4>Feline Immunodeficiency Virus (FIV)</h4>
              <p className="text-muted">
                A slow-acting virus that attacks a cat’s immune system, reducing
                its ability to fight infections. It is commonly transmitted
                through bite wounds.
              </p>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 text-center shadow p-3 mb-5 bg-body rounded me-2">
              <h4>Fleas & Ticks</h4>
              <p className="text-muted">
                External parasites that feed on a cat’s blood, causing itching,
                irritation, and possible disease transmission. Heavy
                infestations can lead to anemia.
              </p>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 text-center shadow p-3 mb-5 bg-body rounded me-2">
              <h4>Worms</h4>
              <p className="text-muted">
                Intestinal parasites like roundworms or tapeworms that can cause
                weight loss, vomiting, and diarrhea. Cats usually get them by
                ingesting infected fleas or prey.
              </p>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 text-center shadow p-3 mb-5 bg-body rounded me-2">
              <h4>Obesity</h4>
              <p className="text-muted">
                Excess body fat that can lead to diabetes, arthritis, and heart
                problems in cats. It often results from overeating and lack of
                exercise.
              </p>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 text-center shadow p-3 mb-5 bg-body rounded me-2">
              <h4>Feline Upper Respiratory Infection</h4>
              <p className="text-muted">
                A common contagious illness causing sneezing, runny nose, and
                eye discharge. It spreads easily in multi-cat environments.
              </p>
            </div>
          </div>
        </div>

        <div className="container d-flex flex-column my-2 gap-5">
          <div className="row mb-2">
            <h3>Vaccinations</h3>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Products
                imgSrc="/imgs/v1.jpg"
                title="Feline Panleukopenia"
                text="Prevents a deadly and highly contagious virus."
                btnText="Explore"
              />
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <Products
                imgSrc="/imgs/v2.jpg"
                title="Feline Calicivirus"
                text="Protects against respiratory infections and mouth ulcers."
                btnText="Explore"
              />
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <Products
                imgSrc="/imgs/v3.jpg"
                title="Feline Rhinotracheitis"
                text="Guards against severe upper respiratory infections."
                btnText="Explore"
              />
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <Products
                imgSrc="/imgs/v4.jpg"
                title="Rabies"
                text="Prevents a fatal disease that can spread to humans."
                btnText="Explore"
              />
            </div>
          </div>
        </div>

        <div className="container-fluid my-2 gap-5">
          <div className="row mb-2">
            <h3>Diet and Nutrition</h3>
            <div className="col-12">
              <Cards
                imgSrc="/imgs/catFood.jpg"
                title="🥩 Types of Cat Food"
                text={
                  <>
                    Dry Food (Kibble): Convenient and long-lasting, but ensure
                    your cat drinks enough water.
                    <br />
                    Wet Food (Canned): Contains more moisture, which helps with
                    hydration and urinary health.
                    <br />
                    Homemade Diets: Can be fresh and healthy but must be
                    balanced with all required nutrients.
                  </>
                }
                btnText="Explore"
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-12">
              <Cards
                imgSrc="/imgs/nutrients.jpg"
                title="💪 Essential Nutrients"
                text={
                  <>
                    Protein: Cats are obligate carnivores — they need high
                    animal protein.
                    <br />
                    Fats: Provide energy and keep their coat shiny.
                    <br />
                    Vitamins & Minerals: Support immunity, bone health, and body
                    functions.
                    <br />
                    Water: Always keep fresh water available to prevent Chronic
                    Kidney Disease.
                  </>
                }
                btnText="Explore"
              />
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-12">
              <Cards
                imgSrc="/imgs/feeding.jpg"
                title="⚖️ Feeding Tips"
                text={
                  <>
                    Feed kittens 3–4 small meals daily; adults 2 meals a day.
                    <br />
                    Avoid toxic foods like chocolate, onions, garlic, and
                    caffeine.
                    <br />
                    Maintain a feeding schedule to prevent Obesity.
                    <br />
                    Use portion control and consult a vet before changing diets.
                  </>
                }
                btnText="Explore"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Health;
