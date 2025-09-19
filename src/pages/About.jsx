import React from "react";

function About() {
  return (
    <div className="container my-5">
      <div className="row align-text-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="/imgs/about.jpg"
            alt="About Us"
            className="img-fluid img-thumbnail shadow"
          />
        </div>

        <div className="col-md-6">
          <h2 className="mb-3">About Us</h2>

          <p className="text-muted ">
            Welcome to <strong>Cats World</strong> — a purr-fect place created
            for every cat lover! 😺 At Cats World, we are passionate about
            celebrating the charm, beauty, and uniqueness of cats. We aim to
            create a warm and welcoming space where cat lovers can find
            everything they need — from care tips and product recommendations to
            inspiring stories and fun content that strengthens the bond between
            cats and their humans.
          </p>

          <p className="text-muted">
            We believe that cats bring endless joy, comfort, and companionship
            into our lives. That’s why we’re dedicated to building a supportive
            community for cat owners and enthusiasts, while also promoting
            responsible pet care and encouraging adoption and rescue efforts.
          </p>
        </div>
      </div>

      <div className="row mt-5 g-4 justify-content-center">
        <div className="col-sm-6 col-md-4 col-lg-3  text-center shadow p-3 mb-5 bg-body rounded me-2">
          <h4>Our mission</h4>
          <p className="text-muted">
            At Cats World, our mission is to guide and support cat lovers with
            easy tips, helpful resources, and a friendly space to care for their
            cats and celebrate the joy they bring.
          </p>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3 text-center shadow p-3 mb-5 bg-body rounded me-2">
          <h4>Our Vision</h4>
          <p className="text-muted">
            We dream of a world where every cat is safe, loved, and happy, and
            where people feel confident and inspired to give their pets the best
            life possible.
          </p>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3 text-center shadow p-3 mb-5 bg-body rounded me-2">
          <h4>Our values</h4>
          <p className="text-muted">
            We believe in compassion for all cats, community to connect cat
            lovers, responsibility in pet care and adoption, trust through
            honest content, and joy in sharing the love of cats. 🐾
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
