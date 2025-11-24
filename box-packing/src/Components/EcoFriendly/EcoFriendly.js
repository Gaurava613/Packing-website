import React from "react";
import "./EcoFriendly.css";

function EcoSection() {
  return (
<section className="eco-section" data-aos="fade-up">
      {/* Left big background image layer */}
      <div
        className="eco-bg"
        style={{ backgroundImage: "url('/assets/ecoBoxBg.png')" }}
      ></div>

      {/* Right content */}
      <div className="container py-5 py-lg-6 position-relative">
        <div className="row justify-content-end">
          <div className="col-lg-6 text-start">
            <p className="eco-kicker text-uppercase fw-semibold small mb-2">
              Eco-friendly packaging
            </p>

            <h2 className="eco-title fw-bold mb-3">
              Sustainable boxes that are kind to the planet.
            </h2>

            <p className="eco-text mb-3">
              Our packaging is designed with recycled and responsibly sourced
              materials, so every unboxing feels good for your brand and better
              for the environment.
            </p>

            <ul className="list-unstyled eco-list mb-4">
              <li>
                <span className="me-2">♻️</span>
                Made with recycled &amp; recyclable board
              </li>
              <li>
                <span className="me-2">🌿</span>
                Soy-based inks &amp; water-based coatings
              </li>
              <li>
                <span className="me-2">🚚</span>
                Strong enough for shipping, light on waste
              </li>
            </ul>

            <button className="btn btn-success btn-lg px-4">
              Explore Eco Options
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EcoSection;
